class Car {
    private make: string;
    constructor(make: string) {
        this.make = make;
    }

    drive(): void{
        console.log(`Driving a ${this.make}`);
    }

    getMake(): string {
        return this.make;
    }
}

class ElectricCar extends Car {
    private batteryLife: number;
    constructor(make: string, batteryLife: number) {
        super(make);
        this.batteryLife = batteryLife;
    }

    charge(): void {
        console.log(`El ${this.getMake()} se está cargando`);
    }

    getBatteryLife(): number {
        return this.batteryLife;
    }
}

const myElectricCar = new ElectricCar("Tesla", 90);

myElectricCar.drive();
myElectricCar.charge();

console.log(`Battery life: ${myElectricCar.getBatteryLife()}%`);