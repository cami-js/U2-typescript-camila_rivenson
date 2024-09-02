interface Shape {
    area(): number;
}

class Circle implements Shape {
    private radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const myCircle = new Circle(5);

console.log(`El área del círculo es: ${myCircle.area()}`);