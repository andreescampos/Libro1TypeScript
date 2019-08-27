var fourthLake = {
    name: 'Tanganyika',
    depth: 1470,
    length: 676,
    area: 32600,
    isFreshwater: true,
    countries: ['Burundi', 'Tanzania', 'Zambia', 'Congo'],
    kigoma: 'Tanzania',
    kalemie: 'Congo',
    bujumbura: 'Burundi'
};
var tanque = {
    tamaño: 50,
    vida: 100,
    rango: 60,
    danio: 12
};
// Correcto
tanque.vida = 95;
// Incorrecto porque daño es de solo lectura
//tanque.danio = 10;
