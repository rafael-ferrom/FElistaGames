import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/Game/game.model';
import { GameService } from 'src/app/services/GameService/game.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})

export class JogoComponent implements OnInit {
  game: Game | undefined

  constructor(private route: ActivatedRoute, private router: Router, private gameService: GameService) { }

  ngOnInit(): void {
    this.getGame();
  }

  getGame(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.gameService.getGame(id).subscribe(
      game => this.game = game,
      error => console.error('Erro ao buscar o jogo', error)
    );
  }
  
  delete(id: number) {
    this.gameService.deleteGame(id).subscribe({
      next: () => {
        console.log(`Jogo deletado com sucesso!`)
        this.router.navigate(['/app'])
      },
      error:(err) => {
        console.error('Error deleting game:', err);
      }
    });
  }

  update(id: number) {
    this.router.navigate(['/app/edit_game', id])
  }
}