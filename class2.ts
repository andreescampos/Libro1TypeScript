class Persona {
    //private nombre: string;
    nombre:string;
    constructor(theName: string) {
        this.nombre = theName;
    }
    introduceSelf() {
        console.log("Hola, yo soy " + this.nombre + "!");
    }
}
 
let personA = new Persona("Sally");
 
personA.introduceSelf();

personA.nombre = "Mindy";
 
personA.introduceSelf();