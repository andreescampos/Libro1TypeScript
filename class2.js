var Persona = /** @class */ (function () {
    function Persona(theName) {
        this.nombre = theName;
    }
    Persona.prototype.introduceSelf = function () {
        console.log("Hola, yo soy " + this.nombre + "!");
    };
    return Persona;
}());
var personA = new Persona("Sally");
personA.introduceSelf();
personA.nombre = "Mindy";
personA.introduceSelf();
