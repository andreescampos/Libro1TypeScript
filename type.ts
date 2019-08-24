function area1(shape: string, width:number, height:number) {
    var area = width * height;
    return "Yo soy un " + shape + " con un area de " + area + "cm cuadrados.";
}

document.body.innerHTML = area1 ("rectangulo", 30,15);