import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponents, AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { AllCardsService } from './all-cards.service';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    ...AppComponents,
    GameComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
	RouterModule,
	RouterModule.forRoot(AppRoutes)
  ],
  providers: [AllCardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
