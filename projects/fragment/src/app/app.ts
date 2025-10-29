import { ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  counter: number = 0;

  cdr = inject(ChangeDetectorRef);

  increment() {
    this.counter++;
  }

  incrementCDR() {
    this.counter++;
    this.cdr.detectChanges();
  }
}
