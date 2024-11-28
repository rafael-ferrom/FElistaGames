import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/Game/game.model';
import { GameService } from 'src/app/services/GameService/game.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent {
  createForm: FormGroup;

  constructor(private router: Router, private gameService: GameService) {
    this.createForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      year: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
      platforms: new FormControl('', [Validators.required]),
      score: new FormControl('', [Validators.required]),
      imgUrl: new FormControl('', [Validators.required]),
      shortDescription: new FormControl('', [Validators.required]),
      longDescription: new FormControl('', [Validators.required]),
    })
  }

  create() {
    if(this.createForm.valid) {
      const newGame: Game = this.createForm.value
      this.gameService.createGame(newGame).subscribe({
        next: (response) => {
          console.log("Game create sucessfully: ", response)
          this.router.navigate(['/app'])
        },
        error: (err) => {
          console.error(err)
        }
      });
    } else {
      console.log("Form not valid!")
      alert("Por favor, preencha o formulário corretamente! TODOS OS CAMPOS SÃO OBRIGATÓRIOS!")
    }
  }
}
