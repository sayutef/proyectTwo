import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatCardModule } from '@angular/material/card';
import { CardsTwoComponent } from "../cards-two/cards-two.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, MatCardModule, CardsTwoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
