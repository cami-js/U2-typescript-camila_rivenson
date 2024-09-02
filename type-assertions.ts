let data: any = 7777;

let stringData = data as string;

console.log(`La longitud del string es: ${stringData.length}`)

//Haciendo de esa forma la longitud es undefined, la única forma de convertir la variable a string es con el método toString(), de la siguiente forma:

let value: any = 7777;

let stringValue: string = value.toString();

console.log(`La longitud del string es: ${stringValue.length}`);