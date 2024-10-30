const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateDemeritPoints(speed, speedLimit = 70) {
    return speed > speedLimit ? Math.floor((speed - speedLimit) / 5) : 0;
}


rl.question("Enter the speed of the car (in km/h): ", (input) => {
    const speed = Number(input);

    if (isNaN(speed) || speed < 0) {
        console.log("Please enter a valid speed that is within limits.");
    } else {
        const demeritPoints = calculateDemeritPoints(speed);
        
        if (demeritPoints === 0) {
            console.log("Ok - You're within the speed limit.");
        } else {
            console.log("Points:", demeritPoints);
            if (demeritPoints > 12) {
                console.log("License suspended");
            }
        }
    }
    
    
    rl.close();
});
