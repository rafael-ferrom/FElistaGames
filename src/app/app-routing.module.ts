import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { BodyComponent } from './pages/home/components/body/body.component';
import { JogoComponent } from './pages/home/pages/jogo/jogo.component';
import { CreateGameComponent } from './pages/home/pages/create-game/create-game/create-game.component';
import { EditGameComponent } from './pages/home/pages/edit-game/edit-game/edit-game.component';
import { registerComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "register", component: registerComponent},
  {
    path: "app", component: HomeComponent,
    children: [
      {path: "", component: BodyComponent},
      { path: 'create_game', component: CreateGameComponent },
      { path: 'edit_game/:id', component: EditGameComponent },
      { path: 'viewGame/:id', component: JogoComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
