class Person {
  static form = document.querySelector("form");
  static multiDeleteButton = document.querySelector(".multi-delete-btn");
  static selectAllButton = document.querySelector(".select-all");
  static firstNameInput = document.querySelector("#firstname");
  static lastNameInput = document.querySelector("#lastname");
  static rowTemplate = document.querySelector("tbody tr");
  static containerElement = document.querySelector("tbody");
  static submitButton = document.querySelector(".add-btn");
  static addModeTitle = "Add";
  static editModeTitle = "Modify";
  static editStage = null; // when click on edit, save object reference to use in handleSubmitMethod
  static members = [];

  static handleSubmit(e) {
    e.preventDefault();
    if (!Person.editStage) {
      new Person(Person.firstNameInput.value, Person.lastNameInput.value);
      return;
    }
    const targetObject = Person.editStage;
    targetObject.modify(); //using object method, not static
  }

  static showMembers() {
    //show all members in table
    Person.containerElement.innerHTML = null;
    for (let member of Person.members) {
      Person.containerElement.appendChild(member.element);
    }
  }

  static resetInputs() {
    Person.firstNameInput.value = null;
    Person.lastNameInput.value = null;
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.initElement();
    Person.members.push(this); // save object reference in array
    Person.showMembers();
    Person.resetInputs();
  }

  initElement() {
    // creating node
    this.element = Person.rowTemplate.cloneNode(true); // new tr
    this.element.querySelector(".firstname").innerHTML = this.firstName;
    this.element.querySelector(".lastname").innerHTML = this.lastName;
    this.element
      .querySelector(".deleteBtn")
      .addEventListener("click", this.delete.bind(this));
    this.element
      .querySelector(".editBtn")
      .addEventListener("click", this.edit.bind(this));
    const checkbox = this.element.querySelector("input");
    checkbox.addEventListener("change", this.toggleSelectItem.bind(this));
    checkbox.checked = this.isSelected;
  }

  delete(e) {
    //delete single row (and its object)
    //this => new Person
    e.preventDefault();
    Person.members = Person.members.filter((member) => member !== this);
    Person.showMembers();
  }

  edit(e) {
    // edit button handler
    e.preventDefault();
    Person.firstNameInput.value = this.firstName;
    Person.lastNameInput.value = this.lastName;
    Person.editStage = this;
    this.updateButtonState();
  }

  modify() {
    // saving changes
    Person.editStage = null;
    this.firstName = Person.firstNameInput.value;
    this.lastName = Person.lastNameInput.value;
    this.updateButtonState();
    this.initElement(); //re-generate elements accourding to name change;
    Person.resetInputs();
    Person.showMembers();
  }

  updateButtonState() {
    //change submit button label
    if (Person.editStage) {
      this.element.style.background = "lightpink";
      Person.submitButton.innerHTML = Person.editModeTitle;
      return;
    }
    this.element.style.background = "";
    Person.submitButton.innerHTML = Person.addModeTitle;
  }

  toggleSelectItem(e) {
    // each row checkbox handler
    const { checked } = e.target;
    this.isSelected = checked;
  }

  static multiDelete() {
    // multi delete button handler
    Person.members = Person.members.filter((member) => !member.isSelected);
    if (!Person.members.length) {
      // uncheck select-all checkbox if table is empty
      Person.selectAllButton.checked = false;
    }
    Person.showMembers();
  }

  static handleSelectAll(e) {
    const { checked } = e.target;
    Person.members.forEach((member) => {
      //change objects state
      member.isSelected = checked;
      member.element.querySelector("input").checked = checked;
    });
    Person.showMembers();
  }
}

Person.rowTemplate.remove(); // emty table on startup

Person.form.addEventListener("submit", Person.handleSubmit);
Person.multiDeleteButton.addEventListener("click", Person.multiDelete);
Person.selectAllButton.addEventListener("change", Person.handleSelectAll);
