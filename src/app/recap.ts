// tu puedes ser un numero o puedes ser un string
const username: string | number = 'juanpablo';
// obtengo feedback instantaneo de las variables
// de mi funcion por el tipado de mi funcion
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1, 3);

class Person {
  // private age: number;
  // lastName: string;

  constructor(private age: number,public lastName: string) {}
}

const juan = new Person(22, 'mera');
// juan.age;
