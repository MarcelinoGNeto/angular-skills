import { Component, OnInit, Input } from '@angular/core';

interface ICard {
  id: number;
  description: string;
  likes: number;
  name: string;
  pic: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: ICard;

  constructor() { }

  ngOnInit() {
  }

  onLike(card: ICard){
    // TODO: incrementar o like, salvar via rest
    card.likes += 1;
  }

  onShare(){
    // TODO: abrir o link do seu linkedin
    window.open('https://www.linkedin.com/in/marcelino-neto/', '_blank')
  }

  changerColor(likes: number){
    if(likes >= 5 && likes <= 10) {
      return 'blue'
    }
    if(likes > 10) {
      return 'green'
    }
  }

}
