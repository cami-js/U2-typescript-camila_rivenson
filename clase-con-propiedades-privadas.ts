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

const myCar = new Car("Ford");

myCar.drive();

console.log(myCar.getMake());