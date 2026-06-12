import { ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-cdr',
  imports: [],
  templateUrl: './cdr.html',
  styleUrl: './cdr.css',
})
export class Cdr {
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
