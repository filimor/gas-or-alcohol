"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomePage = void 0;
var core_1 = require("@angular/core");
var HomePage = /** @class */ (function () {
    function HomePage() {
        this.result = "Resultado";
    }
    HomePage.prototype.calculate = function () {
        if (this.priceAlcohol && this.priceGasoline) {
            var pAlcohol = parseFloat(this.priceAlcohol);
            var pGasoline = parseFloat(this.priceGasoline);
            if (pAlcohol / pGasoline >= 0.7) {
                this.result = "Melhor utilizar Gasolina";
            }
            else {
                this.result = "Melhor utilizar Álcool";
            }
        }
        else {
            this.result = "Preencha corretamente os campos!";
        }
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss']
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
