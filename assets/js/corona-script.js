//Decalring the Different Variable and Objects
let total_cases = document.querySelector("#totalCases");
let total_death = document.querySelector("#totalDeaths");
let total_recovered = document.querySelector("#totalRecovered");
let new_cases = document.querySelector("#newCases");
let table = document.querySelector('#countries_stat');

// Fetching the Data from the server

//Fetching the World Data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
			"x-rapidapi-key": "53009286a0mshdc8ec356f7aa205p1e0e80jsn5858f548ed53"
		}
	})
	.then(response => response.json().then(data => {
		if ($(total_cases).length != 0) {
			total_cases.innerHTML = data.total_cases;
		}
		if ($(new_cases).length != 0) {
			new_cases.innerHTML = data.new_cases;
		}
		if ($(total_death).length != 0) {
			total_death.innerHTML = data.total_deaths;
		}
		if ($(total_recovered).length != 0) {
			total_recovered.innerHTML = data.total_recovered;
		}

	})).catch(err => {
		console.log(err);
	});


//Fetching The Case by Country Data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
			"x-rapidapi-key": "53009286a0mshdc8ec356f7aa205p1e0e80jsn5858f548ed53"
		}
	})
	.then(response => response.json().then(data => {
		let countries_stat = data.countries_stat;

		for (let i = 0; i < countries_stat.length; i++) {

			let row = table.insertRow(i + 1);
			let country_name = row.insertCell(0);
			let cases = row.insertCell(1);
			let deaths = row.insertCell(2);
			let recovered_per_country = row.insertCell(3);

			if ($(country_name).length != 0) {
				country_name.innerHTML = countries_stat[i].country_name;
			}
			if ($(cases).length != 0) {
				cases.innerHTML = countries_stat[i].cases;
			}
			if ($(deaths).length != 0) {
				deaths.innerHTML = countries_stat[i].deaths;
			}
			if ($(recovered_per_country).length != 0) {
				recovered_per_country.innerHTML = countries_stat[i].total_recovered;
			}
		}
	}))
	.catch(err => {
		console.log(err);
	});