import Car from "./Classes/car"
let Renegade = new Car('Jeep Renegade', [true, true, true]);
let Tiggo5 = new Car('Tiggo 5', [true, false, true]);
let Uno = new Car('Fiat Uno', [true, false, false]);
let Jumpy = new Car('Jumpy', [false, true, false]);

function TestDrive(car: Car){
    console.log(`Valor ${car.model} (com opcionais inclusos): ${car.getPrice()}`);
        car.turnOnSound();
        car.turnOffSound();
}

TestDrive(Renegade);
