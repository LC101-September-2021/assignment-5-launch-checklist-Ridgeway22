// Write your JavaScript code here!

window.addEventListener('load', function() {
	let listedPlanets;
	//Set listedPlanetsResponse equal to the value returned by calling myFetch()
	let listedPlanetsResponse = myFetch();
	listedPlanetsResponse
		.then(function(result) {
			listedPlanets = result;
			//console.log(listedPlanets);
		})
		.then(function() {
			//console.log(listedPlanets);
			// Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
			let jack = pickPlanet(listedPlanets);

			addDestinationInfo(document, jack.name, jack.diameter, jack.star, jack.distance, jack.moons, jack.image);
		});

	let form = document.querySelector("[data-testid='testForm']");
	document.getElementById('faultyItems').style.visibility = 'hidden';
	form.addEventListener('submit', function(e) {
		e.preventDefault();
		let copilotName = document.querySelector("input[name='copilotName']");
		let pilotName = document.querySelector("input[name='pilotName']");
		let fuelLevel = document.querySelector("input[name='fuelLevel']");
		let cargoMass = document.querySelector("input[name='cargoMass']");
		let faultyItems = document.getElementById('faultyItems');
		const { validateInput } = require('./scriptHelper');
		formSubmission(document, faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
	});
});
