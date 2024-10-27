function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    return speed > speedLimit ? Math.floor((speed - speedLimit) / 5) : 0;
}

const speed = Number(prompt("Enter the speed of the car (in km/h):"));

if (isNaN(speed) || speed < 0) {
    console.log("Please enter a valid speed that is within limits.");
} else {
    const demeritPoints = calculateDemeritPoints(speed);
    
    if (demeritPoints === 0) {
        console.log("Ok");
    } else {
        console.log("Points:", demeritPoints);
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}
calculateDemeritPoints(88)