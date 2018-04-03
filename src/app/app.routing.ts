import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { AccueilComponent } from './accueil/accueil.component';

export const AppRoutes: any = [
{ path: "", component: LoginComponent},
{ path: "accueil", component: AccueilComponent},
{ path: "error", component: ErrorComponent}
];

export const AppComponents: any = [
	LoginComponent,
	ErrorComponent,
	AccueilComponent
];