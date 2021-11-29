// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
	// Here is the HTML formatting for our mission target div.

	const missionTarget = document.querySelector("[data-testid='missionTarget']");
	missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
}

function validateInput(testInput) {
	if (testInput === '') {
		return 'Empty';
	}
	if (isNaN(testInput) || isNaN(testInput)) {
		return 'Not a Number';
	}
	if (typeof testInput === 'number' || typeof testInput === 'number') {
		return 'Is a Number';
	}
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
	console.log(list);
	if (
		validateInput(pilot) === 'Empty' ||
		validateInput(copilot) === 'Empty' ||
		validateInput(fuelLevel) === 'Empty' ||
		validateInput(cargoLevel) === 'Empty'
	) {
		alert('All fields are required');
	}
	if (validateInput(Number(pilot)) === 'Is a Number' || validateInput(Number(copilot)) === 'Is a Number') {
		alert('Pilot and Copilot should not be numbers');
	}
	if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number') {
		alert('fuelLevel and CargoLevel should be a number');
	}

	let launchStatus = document.getElementById('launchStatus');
	let faultyItems = document.getElementById('faultyItems');
	let pilotStatus = document.getElementById('pilotStatus');
	let copilotStatus = document.getElementById('copilotStatus');
	let fuelStatus = document.getElementById('fuelStatus');
	let cargoStatus = document.getElementById('cargoStatus');

	pilotStatus.innerHTML = `pilot ${pilot} is for ready launch`;
	copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;

	if (fuelLevel <= 10000) {
		fuelStatus.innerHTML = ' Not enough fuel for the journey';
	} else {
		fuelStatus.innerHTML = ' enough fuel for the journey';
	}

	if (cargoLevel >= 10000) {
		cargoStatus.innerHTML = ' Too much mass for the shuttle to take off';
	} else {
		cargoStatus.innerHTML = ' Low enough mass for the shuttle to take off';
	}

	if (fuelLevel > 10000 && cargoLevel < 10000) {
		launchStatus.style.color = 'green';
		launchStatus.innerHTML = 'Shuttle is ready for launch';
	} else {
		launchStatus.style.color = 'red';
		launchStatus.innerHTML = 'Shuttle not ready for launch';
	}

	faultyItems.style.visibility = 'visible';
}

async function myFetch() {
	let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');

	return planetsReturned.json();
}

function pickPlanet(planets) {
	let planet = Math.floor(Math.random() * planets.length);
	return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
