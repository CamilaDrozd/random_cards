import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './modules/card/card.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'random_cards';

  @HostBinding('class.dark-mode') isDarkMode = false;

  alterarTema() : void{
    this.isDarkMode = !this.isDarkMode;
  }
}
