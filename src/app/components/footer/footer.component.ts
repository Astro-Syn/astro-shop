import { Component } from '@angular/core';
import {NgIcon, provideIcons } from '@ng-icons/core';
import { featherGithub, featherLinkedin} from '@ng-icons/feather-icons';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIcon],
  providers: [
    provideIcons({ featherGithub, featherLinkedin})
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
