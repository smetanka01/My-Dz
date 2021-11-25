class Transport {
    constructor(speed,startEngine, control, consumption, year) {
        this.speed = speed + " км/час";
        this.startEngine = startEngine;
        this.control = control;
        this.consumption = consumption
        this.year = year + "года"
    }

    doStartEngine(){
        console.log(this.startEngine)
    }
}
const transport = new Transport(20, "Кнопка", "руль", "вода", 1999)

console.log(transport)
transport.doStartEngine()

class Car extends Transport{
    constructor(speed, startEngine, control, consumption, year, volume, driveUnit) {
        super(speed, startEngine, control, consumption, year);
        this.volume = volume;
        this.driveUnit = driveUnit;
    }

    doStartEngine() {
        super.doStartEngine(this.startEngine);
    }
}

const car = new Car(60,"ключь", "руль", "бензин", 2005, 3.5,"4вд")

console.log(car)
car.doStartEngine()