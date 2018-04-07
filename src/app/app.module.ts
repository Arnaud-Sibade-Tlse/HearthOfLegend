import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponents, AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CollectionComponent } from './collection/collection.component';
import { AllCardsService } from './all-cards.service';

@NgModule({
  declarations: [
    AppComponent,
    ...AppComponents,
    CardComponent,
    CollectionComponent,
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
