var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(theName, laEdad) {
        this.nombre = theName;
        this.edad = laEdad;
    }
    Persona.prototype.introduceSelf = function () {
        console.log("Hola, yo soy " + this.nombre + "!");
    };
    return Persona;
}());
var Amigo = /** @class */ (function (_super) {
    __extends(Amigo, _super);
    function Amigo(nombre, edad, anios_conocido) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.anios_conocido = anios_conocido;
        return _this;
    }
    Amigo.prototype.timeKnown = function () {
        console.log("Hemos sido amigos por " + this.anios_conocido + " años.");
    };
    Amigo.prototype.amigosDesde = function () {
        var firstAge = this.edad - this.anios_conocido;
        console.log("Hemos sido amigos desde que tenia " + firstAge + " years old.");
    };
    return Amigo;
}(Persona));
var friendA = new Amigo("William", 19, 8);
friendA.introduceSelf();
friendA.timeKnown();
