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


class Amigo extends Persona {
    anios_conocido: number;
    constructor(nombre: string, anios_conocido: number) {
        super(nombre);
        this.anios_conocido = anios_conocido;
    }
    timeKnown() {
        console.log("Hemos sido amigos por " + this.anios_conocido + " años.")
    }
}
 
let friendA = new Amigo("Jacob", 6);
 
friendA.introduceSelf();
 
friendA.timeKnown();