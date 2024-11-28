import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/home/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BodyComponent } from './pages/home/components/body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JogoComponent } from './pages/home/pages/jogo/jogo.component';
import { FooterComponent } from './pages/home/components/footer/footer.component';

import { GameService } from './services/GameService/game.service';
import { EditGameComponent } from './pages/home/pages/edit-game/edit-game/edit-game.component';
import { CreateGameComponent } from './pages/home/pages/create-game/create-game/create-game.component';
import { registerComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    BodyComponent,
    JogoComponent,
    FooterComponent,
    EditGameComponent,
    CreateGameComponent,
    registerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})

export class AppModule { }
