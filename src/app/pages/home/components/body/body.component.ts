import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameMin } from 'src/app/models/Game/gameMin.model';
import { GameService } from 'src/app/services/GameService/game.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  games: GameMin[] = []

  constructor(private router: Router, private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe(
      data => {
        this.games = data;
      },
      error => {
        console.error('Erro ao buscar jogos', error);
      }
    );
  }

  viewGame(id: number) {
    if (id) {
      this.router.navigate(['app', 'viewGame', id]);
    } else {
      console.error('O ID do jogo está indefinido');
    }
  }
}