import { Component, signal } from "@angular/core";

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})

export class CounterPageComponent {

  // Variable Counter con valor inicial de 0 y tipo number
  counter = 0;
  // Variable CounterSignal con valor inicial de 0 y tipo signal
  counterSignal= signal(0);

  increaseBy(value: number) {
    // Incrementa el valor de Counter por el valor de value
    this.counter += value;
    // Actualiza el valor de CounterSignal por el valor de value
    this.counterSignal.update(current=>current+value);
  }
  decreaseBy(value: number) {
    // Reduce el valor de Counter por el valor de value
    this.counter += value;
    // Actualiza el valor de CounterSignal por el valor de value
    this.counterSignal.update(current=>current+value);
  }
  resetBy() {
    // Setea el valor de Counter a 0
    this.counter = 0;
    // Actualiza el valor de CounterSignal a 0
    this.counterSignal.set(0);
  }

}
