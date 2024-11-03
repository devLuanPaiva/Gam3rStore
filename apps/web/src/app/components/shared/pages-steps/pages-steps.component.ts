import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pages-steps',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './pages-steps.component.html',
})
export class PagesStepsComponent {
  @Input() step!: 'cart' | 'payment';
  selectedColor(step: string): string {
    return this.step === step ? 'text-pink-500' : 'text-zinc-400';
  }
  selectedBk(step: string): string {
    return this.step === step
      ? 'bg-pink-500 text-white'
      : 'bg-zinc-400 text-black';
  }
}
