import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../../shared/logo/logo.component';
import { CartIconComponent } from '../../shared/cart-icon/cart-icon.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoComponent, CartIconComponent, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  amountItems: number = 0;
  constructor(private readonly cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.amountItems = items.length;
    });
  }
}
