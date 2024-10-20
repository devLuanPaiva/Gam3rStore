import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  icons = {
    facebook: faFacebook,
    instagram: faInstagram,
    linkedin: faLinkedin,
    whatsapp: faWhatsapp,
    youtube: faYoutube,
  };
  year: number = new Date().getFullYear();
}
