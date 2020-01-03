import { Component, Input } from '@angular/core';

//seems odd to have component here that only handles the "hello" label goes here. i guess it's due to keeping things simple and showing a quick example to people who get it.

@Component({
  selector: 'hello',
  template: `<h1>Hola, I'm learning more about the {{name}} Framework!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
