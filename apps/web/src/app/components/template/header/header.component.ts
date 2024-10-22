import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../../shared/logo/logo.component';
import { CartIconComponent } from '../../shared/cart-icon/cart-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoComponent, CartIconComponent, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  amountItems: number = 10;
}
