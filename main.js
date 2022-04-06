const presentLoading = () => {
  const loading = document.createElement("ion-loading");

  loading.message = "Please wait...";
  loading.duration = 10000;

  document.body.appendChild(loading);
  loading.present();

  return loading;
};

const removeLoading = (loading) => {
  loading.dismiss();
};

const showSearch = () => {
  const elSearch = document.getElementById("search");
  const elResults = document.getElementById("results");
  elSearch.style.display = "block";
  elResults.style.display = "none";
};

const showResults = () => {
  const elSearch = document.getElementById("search");
  const elResults = document.getElementById("results");
  elSearch.style.display = "none";
  elResults.style.display = "block";
};

const onSearch = async () => {
  const loadingElement = presentLoading();
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      "X-RapidAPI-Key": "<ENTER_API_KEY>"
    }
  };
  const searchValue = document.getElementById("search-value").value;
  try {
    const res = await fetch(
      "https://weatherapi-com.p.rapidapi.com/current.json?q=" + searchValue,
      options
    );
    const data = await res.json();
    console.log(data);
    document.getElementById(
      "results-location"
    ).textContent = `${data.location.name}, ${data.location.region}`;
    document.getElementById("results-img").textContent =
      data.current.condition.icon;
    document.getElementById(
      "results-temp"
    ).textContent = `${data.current.temp_f}°`;
    document.getElementById("results-desc").textContent =
      data.current.condition.text;
  } catch (e) {}
  removeLoading(loadingElement);
  showResults();
};
