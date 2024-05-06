
// 1. import data from json

const ALL_DATA = require("../data.json");

// 2. give all city name of state which one give by user

function cityByState(stateName) {
    let matchData = ALL_DATA.filter((e) => {
        return e.state_name === stateName;
    });
    let data = matchData.map((e) => {
        return e.city;
    });
    return data;
}

let cityOfAP = cityByState("Andhra Pradesh");
console.log("cityOfAP:", cityOfAP);


// 3. give all city name , which have more character than user given input

function cityData(cityname) {
    let findcity = ALL_DATA.filter((e) => {
        return e.city.length > cityname
    });
    let data = findcity.map((e) => {
        return e.city
    });
    return data;

}

let user = cityData(18)
console.log("user:", user)

// 4. city list which has population more then user give

let populationdata = require("../data.json")

function allCitiesByState(userGivePopulation) {
    return populationdata
        .filter((e) => {
            return e.population > userGivePopulation
        })
        .map((e) => {
            return e.city
        });
}


let citiesData = allCitiesByState(10000000);
console.log(citiesData);

//5. acending decending population wise

let cities = require("../data.json");

function PopulationAscending(a, b) {
    return a.population - b.population;
}

function PopulationDescending(a, b) {
    return b.population - a.population;
}

let citiesAscending = cities.slice().sort(PopulationAscending);
let citiesDescending = cities.slice().sort(PopulationDescending);

console.log("Cities in Ascending Order :");
console.log(citiesAscending);

console.log("Cities in Descending Order :");
console.log(citiesDescending);

//6. top 5 city population wise [only name of city]

const topFiveCities = ALL_DATA.sort((a, b) => b.population - a.population);

const Cities = topFiveCities.slice(0, 5).map(city => city.city);;

console.log(Cities);


// 7.give total populatin of state which give by user

function totalPopulationByState(stateName) {
    let totalPopulation = ALL_DATA.filter(city => city.state_name === stateName).reduce((total, city) => total + parseInt(city.population), 0);

    return totalPopulation;
}

let totalPopulation = totalPopulationByState("Gujarāt");
console.log("totalPopulation:", totalPopulation)

//08. give top 5 state name population wise 

function topFiveStatePopulationWise(data, count) {
    let arr = [];
    data.map((ele) => {
        let index = arr.findIndex((e) => e.stateName === ele.state_name);
        if (index === -1) {
            arr.push({ stateName: ele?.state_name, population: +ele?.population });
        } else {
            arr[index].population += +ele.population;
        }
    });
    arr.sort((a, b) => b.population - a.population);
    return arr.slice(0, count);
}
let x = topFiveStatePopulationWise(ALL_DATA, 6);
console.log("x", x);


