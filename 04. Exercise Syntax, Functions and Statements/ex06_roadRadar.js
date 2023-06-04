function roadRadar(speed, area){
    let areaLimit = {
		motorway: 130,
		interstate: 90,
		city: 50,
		residential: 20,
	};

	if (speed <= areaLimit[area]) {
		console.log(`Driving ${speed} km/h in a ${areaLimit[area]} zone`);
	} else {
		let diff = speed - areaLimit[area];
		let status = (diff) => {
			if (diff <= 20) {
				return "speeding";
			} else if (diff <= 40) {
				return "excessive speeding";
			} else {
				return "reckless driving";
			}
		};
		console.log(
			`The speed is ${diff} km/h faster than the allowed speed of ${
				areaLimit[area]
			} - ${status(diff)}`
		);
	}
}

roadRadar(40, 'city'); // Driving 40 km/h in a 50 zone
roadRadar(21, 'residential');  // The speed is 1 km/h faster than the allowed speed of 20 -speeding
roadRadar(120, 'interstate' ); // The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
roadRadar(200, 'motorway' );  // The speed is 70 km/h faster than the allowed speed of 130 - reckless driving