function area(shape, width, height) {
    var area = width * height;
    return "Yo soy un " + shape + " con un area de " + area + "cm cuadrados.";
}
document.body.innerHTML = area("rectangulo", 30, 15);
