import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public result: String = "Resultado"

  calculate() {
    if(this.priceAlcohol && this.priceGasoline) {
      var pAlcohol = parseFloat(this.priceAlcohol)
      var pGasoline = parseFloat(this.priceGasoline)
      if(pAlcohol / pGasoline >= 0.7) {
        this.result = "Melhor utilizar Gasolina"
      } else {
        this.result = "Melhor utilizar Álcool"
      }
    } else {
      this.result = "Preencha corretamente os campos!"
    }
  }

}
