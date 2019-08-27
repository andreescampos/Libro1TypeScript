class Persona {
    private name: string;
    protected edad: number;
    constructor(theName: string, laEdad:number) {
        this.name = theName;
        this.edad = laEdad;
    }
    introduceSelf() {
        console.log("Hola, yo soy " + this.name + "!");
    }
}
 

class Amigo extends Persona {
    anios_conocido: number;
    constructor(nombre: string, edad:number, anios_conocido: number) {
        super(nombre, edad);
        this.anios_conocido = anios_conocido;
    }
    timeKnown() {
        console.log("Hemos sido amigos por " + this.anios_conocido + " años.")
    }
    amigosDesde(){
        let firstAge = this.edad - this.anios_conocido;
        console.log(`Hemos sido amigos desde que tenia ${firstAge} years old.`)
    }   
}

let friendA = new Amigo("William", 19, 8);
 
friendA.introduceSelf();
 
friendA.timeKnown();