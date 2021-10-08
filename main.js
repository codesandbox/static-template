const form = document.querySelector(".wt-form");
const tagsArea = form.querySelector(".tags-area");
const inputTags = form.querySelector(".contacts");
const textarea = form.querySelector("#floatingTextarea");
const preview = form.querySelector(".preview-message");
const date = form.querySelector('input[name="date"]');
const weekDay = form.querySelectorAll(".sp-box > input");
const uploadField = form.querySelector("#archives");
const formatArchives = form.querySelector(".format-archives");
const selected = formatArchives.querySelector(".format-selected");
const formatOptions = form.querySelector(".format-options");

render();

function render() {
  tags();
  dateController();
  chooseOptionsUpload();
  submit();
  styleText();
}

function styleText() {
  preview.onclick = () => textarea.focus();

  textarea.onkeyup = () => {
    let val = textarea.value.replace(
      /<(\/)?([a-z0-9]*)\b[^>]*>?/gi,
      "&lt;$1$2&gt;"
    );

    const search = [
      /\*(.*)\*+/g,
      /_(.*)_/g,
      /\[(https?:\/\/.*\.\w{2,}.*\/?)@(\w+)?\]/g,
      /\[(https?:\/\/.*\.\w{2,}.*\/?)\]/g
    ];

    const replace = [
      "<strong>$1</strong>",
      "<i>$1</i>",
      '<a href="$1" target="_blank" class="linkMessage">http://casp.link/$2</a>',
      '<a href="$1" target="_blank" class="linkMessage">http://casp.link/aletatório</a>'
    ];

    for (let i = 0; i < search.length; i++)
      val = val.replace(search[i], replace[i]);

    preview.innerHTML = val;
  };
}

function submit() {
  const updateContacts = () => {
    let tags = "";
    tagsArea
      .querySelectorAll(".tag")
      .forEach((tag) => (tags += "," + tag.innerText));

    inputTags.value = tags;
  };

  form.onsubmit = (e) => {
    e.preventDefault();
    updateContacts();
    const formattedForm = new FormData(form);
    const typeFile = selected.getAttribute("value");
    let status = true;

    if (!date.value) formattedForm.set("date", "* *");
    if (typeFile) formattedForm.set("typeFile", selected.getAttribute("value"));

    formattedForm.forEach((item) => {
      if (!item) {
        const div = document.createElement("div");
        div.classList.add("errors");
        div.innerText = "A Campos que precisam ser preenchidos!";
        document.body.appendChild(div);
        setTimeout(() => document.body.removeChild(div), 5000);
        status = false;
      }
    });

    if (status) {
      formReset();
      sendMessageForSchedule(formattedForm);
    } else inputTags.value = "";
  };
}

function sendMessageForSchedule(form) {
  fetch("http://servos.ga/whatsapp/schedule/", {
    method: "POST",
    body: form
  })
    .then((response) => response.json())
    .then((result) => console.log(result));
}

function formReset() {
  preview.innerHTML = "";
  uploadField.setAttribute("disabled", true);
  formatArchives.classList.remove("active");
  selected.innerHTML = "Formato";
  selected.setAttribute("value", "");

  form.querySelectorAll("input").forEach((input) => {
    const type = input.getAttribute("type");

    if (type !== "checkbox") input.value = "";
    else input.checked = false;
  });

  form.querySelector("textarea").value = "";
  tagsArea.innerHTML = "";
  tags();
}

function dateController() {
  date.onclick = () => weekDay.forEach((day) => (day.checked = false));
  weekDay.forEach((day) => (day.onclick = () => (date.value = "")));
}

function tags() {
  const defaultTags = [
    "Família Servos da Pobreza",
    "Vocacional Aliança",
    "Ministério M.S.S"
  ];

  const createTag = (text) => {
    const span = document.createElement("span");
    span.classList.add("tag");
    span.innerText = text.trim();
    span.onclick = (e) => removeTag(e.target);
    addTag(span);
  };

  const getTags = () => document.querySelectorAll(".tag");

  const addTag = (tag) => {
    tagsArea.appendChild(tag);
  };

  const removeTag = (tag) => {
    tagsArea.removeChild(tag);
  };

  defaultTags.forEach((tag) => createTag(tag));

  inputTags.addEventListener("keyup", (e) => {
    const val = inputTags.value;
    const commaTest = val.match(/,/gi);
    const tagValue = val.replace(/[^\w\d+()-á-à]?[,]/gi, "");
    inputTags.value = tagValue;

    if (commaTest && tagValue !== "") {
      e.preventDefault();
      createTag(tagValue);
      inputTags.value = "";
    }
    if (e.code === "Backspace" && val === "") {
      const tags = getTags();
      removeTag(tags[tags.length - 1]);
    }
  });
}

function chooseOptionsUpload() {
  uploadField.setAttribute("disabled", true);

  const options = [
    { type: "image", icon: "bi-camera-fill" },
    { type: "document", icon: "bi-file-earmark-fill" }
  ];

  const formats = {
    image: "image/*,video/mp4,video/3gpp,video/quicktime",
    document: "*"
  };

  const createChooseOptions = (type, icon) => {
    const div = document.createElement("div");
    div.classList.add("type-archive");
    div.setAttribute("value", type);
    div.innerHTML = `<i class="bi ${icon}"></i>`;
    return div;
  };

  const restoreStatus = () => {
    formatArchives.classList.remove("active");
    formatArchives.classList.add("deactive");

    setTimeout(() => {
      formatOptions.innerHTML = "";
      uploadField.setAttribute("disabled", true);
      formatOptions.removeAttribute("style");
    }, 200);
  };

  const createErrorDiv = (errors) => {
    if (errors.length - 2) {
      const div = document.createElement("div");
      div.classList.add("errors");
      document.body.appendChild(div);
      setTimeout(() => document.body.removeChild(div), 5000);

      for (let i = 0; i < errors.length - 2; i++) {
        const error = document.createElement("div");
        error.innerHTML = `Arquivo <strong>${errors[i].name}</strong> passou de 5 megas`;
        div.appendChild(error);
      }
    }
  };

  selected.addEventListener("click", () => {
    const status = formatArchives.getAttribute("class").split(" ")[1];

    if (selected.offsetTop + 170 > document.body.offsetHeight) {
      formatOptions.style.marginTop = "-200px";
    }

    if (status === "deactive" || !status) {
      formatArchives.classList.remove("deactive");
      formatArchives.classList.add("active");

      let delay = 0;

      options.forEach((option) => {
        const div = createChooseOptions(option.type, option.icon);

        div.addEventListener("click", () => {
          uploadField.setAttribute("accept", formats[option.type]);
          selected.setAttribute("value", option.type);
          uploadField.removeAttribute("disabled");
          uploadField.click();
        });

        setTimeout(() => formatOptions.appendChild(div), delay);
        delay = delay + 100;
      });
    } else {
      restoreStatus();
    }
  });

  document.body.addEventListener("click", (e) => {
    const elementClass = e.target.getAttribute("class");
    if (elementClass !== "anexar-icon") restoreStatus();
  });

  uploadField.onchange = function () {
    const dt = new DataTransfer();
    const errors = [];
    const fileSize = 64000000;
    console.log(uploadField.files);

    for (let i in this.files)
      if (this.files[i].size < fileSize) {
        dt.items.add(this.files[i]);
      } else errors.push(this.files[i]);

    this.files = dt.files;

    createErrorDiv(errors);
  };
}
