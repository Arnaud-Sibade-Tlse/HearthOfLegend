import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CardComponent } from './card/card.component';
import { CollectionComponent } from './collection/collection.component';
import { GameComponent } from './game/game.component';


export const AppRoutes: any = [
{ path: "", component: LoginComponent},
{ path: "accueil", component: AccueilComponent, canActivate: [LoginGuardGuard]},
{ path: "error", component: ErrorComponent},
{ path: "card", component: CardComponent, canActivate: [LoginGuardGuard]},
{ path: "collection", component: CollectionComponent, canActivate: [LoginGuardGuard]},
{ path: "game", component: GameComponent, canActivate: [LoginGuardGuard]}
];

export const AppComponents: any = [
	LoginComponent,
	ErrorComponent,
	AccueilComponent,
    CardComponent,
    CollectionComponent,
	GameComponent
];