import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponents, AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ...AppComponents,
  ],
  imports: [
    BrowserModule,
    HttpModule,
	RouterModule,
	RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
