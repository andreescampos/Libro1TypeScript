function area(shape) {
    var area = shape.width * shape.height;
    return "Soy un " + shape.name + " con un area de: " + area + " cm cuadrados.";
}
console.log(area({ name: "rectangulo", width: 30, height: 15 }));
console.log(area({ name: "cuadrado", width: 30, height: 30, color: "blue" }));
