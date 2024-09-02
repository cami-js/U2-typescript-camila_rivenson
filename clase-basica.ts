class Car {
    make: string = "Ford";

    drive(): void{
        console.log(`Driving a ${this.make}`);
    }
}

const myCar = new Car();

myCar.drive();