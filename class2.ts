class Persona {
    nombre: string;
    constructor(theName: string) {
        this.nombre = theName;
    }
    introduceSelf() {
        console.log("Hola, yo soy " + this.nombre + "!");
    }
}
 
let personA = new Persona("Sally");
 
personA.introduceSelf();