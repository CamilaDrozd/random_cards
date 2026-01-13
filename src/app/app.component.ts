import { Component, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './modules/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
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
