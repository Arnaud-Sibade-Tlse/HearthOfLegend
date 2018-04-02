import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

export const AppRoutes: any = [
{ path: "", component: LoginComponent},
{ path: "error", component: ErrorComponent}
];

export const AppComponents: any = [
	LoginComponent,
	ErrorComponent
];