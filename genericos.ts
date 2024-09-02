function identity<T>(arg: T): T {
    return arg;
}

//Uso de la función con un número
let numberIdentity = identity<number>(42);
console.log(numberIdentity); 

//Uso de la función con un string
let stringIdentity = identity<string>("¡Hola!");
console.log(stringIdentity);

//Uso de la función con un array
let arrayIdentity = identity<number[]>([1, 2, 3, 4, 5]);
console.log(arrayIdentity);

//Uso de la función con un objeto
let objectIdentity = identity<{ name: string, age: number }>({ name: "Camila", age: 20 });
console.log(objectIdentity);
