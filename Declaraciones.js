// class vehiculo{
//      constructor(marca,modelo,año){
//         this.marca=marca;
//         this.año=año;
//         this.modelo=modelo;
//      }

//      obtenerdetalles(){
//         return "Marca:";this.marca;"modelo:";this.modelo;"año:";this.año;
//      }
// }

// class carro extends vehiculo{
//     constructor(marca,modelo,año,numeroPuertas){
//         super(marca,modelo,año);
//         this.numeroPuertas=numeroPuertas;
//     }
//     obtenerdetalles(){
//         return "";super.obtenerdetalles();"Puertas:";this.numeroPuertas;
//     }
// }

// class Moto extends vehiculo{
//     constructor(marca,modelo,año,cilindrada){
//         super(marca,modelo,año);
//         this.cilindrada=cilindrada;
//     }
//     obtenerdetalles(){
//         return "";super.obtenerdetalles();"cilindrada:";this.cilindrada;"cc"
//     }
// }

// const micarro = new carro("mercedez","C200",2024,4);
// const mimoto = new Moto ("yamaha","MT-15", 2025,155);

// console.log(micarro.obtenerdetalles())
// console.log(mimoto.obtenerdetalles());



//EJERCICIO 2

// class empleado {
//     constructor(nombre,edad,salariobase){
//         this.nombre=nombre;
//         this.edad=edad;
//         this.salariobase=salariobase;
//     }
//     calcularsalario(){
//         return this.salariobase;
//     }
// }

// class gerente extends empleado{
//     constructor(nombre,edad,salariobase,bonificacion){
//         super(nombre,edad,salariobase);
//         this.bonificacion=bonificacion;
//     }
//     calcularsalario(){
//         return this.salariobase + this.bonificacion;
//     }
// }

// class desarrollador extends empleado{
//     constructor(nombre,edad,salariobase,lenguaje){
//         super(nombre,edad,salariobase);
//         this.lenguaje=lenguaje;
//     }
// }

// const empleado1 = new empleado("Juan",26,3000);
// const gerente1 = new Gerente("Maria", 20, 3000, 500);
// const desa1= new Desarrollador("Pedro", 25, 2500, "Java");

// console.log(empleado1.nombre + " gana $" + empleado1.calcularSalario());
// console.log(gerente1.nombre + " gana $" + gerente1.calcularSalario());
// console.log(desa1.nombre + " gana $" + desa1.calcularSalario());

// // EJERCICIO 3
// function Producto(nombre, precio, marca) {
//   this.nombre = nombre;
//   this.precio = precio;
//   this.marca = marca;

//   this.descripcion = function() {
//     console.log("Producto: " + this.nombre + ", Precio: $" + this.precio + ", Marca: " + this.marca);
//   }
// }

// function Telefono(nombre, precio, marca, almacenamiento, ram) {
  
//   Producto.call(this, nombre, precio, marca);
//   this.almacenamiento = almacenamiento;
//   this.ram = ram;

//   this.descripcion = function() {
//     console.log(
//       "Teléfono: " + this.nombre +
//       ", Precio: $" + this.precio +
//       ", Marca: " + this.marca +
//       ", Almacenamiento: " + this.almacenamiento +
//       ", RAM: " + this.ram
//     );
//   }
// }

// function Laptop(nombre, precio, marca, procesador, pulgadas) {
//   Producto.call(this, nombre, precio, marca);
//   this.procesador = procesador;
//   this.pulgadas = pulgadas;

//   this.descripcion = function() {
//     console.log(
//       "Laptop: " + this.nombre +
//       ", Precio: $" + this.precio +
//       ", Marca: " + this.marca +
//       ", Procesador: " + this.procesador +
//       ", Pantalla: " + this.pulgadas + " pulgadas"
//     );
//   }
// }
// const telefono1 = new Telefono("iPhone 14", 999, "Apple", "128GB", "6GB");
// const laptop1 = new Laptop("Dell XPS 13", 1499, "Dell", "Intel i7", 13.3);

// telefono1.descripcion();
// laptop1.descripcion();  

// // EJERCICIO 4
// function Figura(color) {
//   this.color = color;

//   this.area = function() {
//     return 0; 
//   }
// }

// function Rectangulo(color, base, altura) {
//   Figura.call(this, color); 
//   this.base = base;
//   this.altura = altura;

//   this.area = function() {
//     return this.base * this.altura;
//   }
// }

// function Circulo(color, radio) {
//   Figura.call(this, color);
//   this.radio = radio;

//   this.area = function() {
//     return Math.PI * Math.pow(this.radio, 2);
//   }
// }

// let figura1 = new Figura("gris");
// console.log("Área de Figura base:", figura1.area());

// let rect1 = new Rectangulo("rojo", 5, 10);
// console.log("Área del Rectángulo:", rect1.area());

// let circ1 = new Circulo("azul", 7);
// console.log("Área del Círculo:", circ1.area());


// EJERCICIO 5

// let perro = {
//   nombre: "Rex",
//   edad: 5,
//   sonido: function() {
//     console.log(this.nombre + " ladra");
//   }
// };

// let gato = {
//   nombre: "Miau",
//   edad: 3,
//   sonido: function() {
//     console.log(this.nombre + " maulla");
//   }
// };
// perro.sonido();   
// gato.sonido();     

