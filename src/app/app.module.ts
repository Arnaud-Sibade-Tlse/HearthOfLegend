import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponents, AppRoutes } from './app.routing';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    ...AppComponents,
  ],
  imports: [
    BrowserModule,
	RouterModule,
	RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
