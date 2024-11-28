import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/Game/game.model';
import { GameService } from 'src/app/services/GameService/game.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent {
  editForm: FormGroup;
  gameId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gameService: GameService
  ) {
    this.gameId = 0
    this.editForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
      platforms: new FormControl('', [Validators.required]),
      score: new FormControl('', [Validators.required]),
      imgUrl: new FormControl('', [Validators.required]),
      shortDescription: new FormControl('', [Validators.required]),
      longDescription: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.gameId = +this.route.snapshot.paramMap.get('id')!;
    this.gameService.getGame(this.gameId).subscribe((game: Game) => {
      this.editForm.patchValue({
        title: game.title,
        year: game.year,
        genre: game.genre,
        platforms: game.platforms,
        score: game.score,
        imgUrl: game.imgUrl,
        shortDescription: game.shortDescription,
        longDescription: game.longDescription
      });
    });
  }

  update() {
    if (this.editForm.valid) {
      const updatedGame: Game = this.editForm.value;
      this.gameService.updateGame(this.gameId, updatedGame).subscribe({
        next: (response) => {
          console.log('Game updated successfully', response);
          this.router.navigate(['/app']);
        },
        error: (error) => {
          console.error('Error updating game', error);
        }
      });
    } else {
      console.log('Form is not valid');
    }
  }

}
