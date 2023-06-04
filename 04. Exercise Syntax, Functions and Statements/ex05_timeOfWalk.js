function timeOfWalk(steps, meters, km) {
    let distanceInMeters = steps * meters;
    let speedMetersInSecond = km / 3.6;
    let time = distanceInMeters / speedMetersInSecond;
    let res = Math.floor(distanceInMeters / 500);

    let timeInMin = Math.floor(time / 60);
	let timeInSec = Number((time - timeInMin * 60).toFixed());
	let timeInH = Math.floor(time / 3600);

	timeInMin += res;
	timeInH += Math.floor(timeInMin / 60);
	timeInMin = timeInMin % 60;

	let formattedH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`;
	let formattedMin = timeInMin < 10 ? `0${timeInMin}` : `${timeInMin}`;
	let formattedSec = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`;
	console.log(`${formattedH}:${formattedMin}:${formattedSec}`);
}

timeOfWalk(4000, 0.60, 5);  // 00:32:48
//timeOfWalk(2564, 0.70, 5.5); // 00:22:35