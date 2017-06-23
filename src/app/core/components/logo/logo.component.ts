import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
	selector: 'main-logo',
	templateUrl: 'logo.component.html',
	styleUrls: ['./logo.component.scss'],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class LogoComponent {
	public logoPath: string;

	constructor(private auth: AuthService) {
		this.logoPath = '././assets/img/angular-logo.png';
	}

	public logOut() {
		this.auth.logout();
	}
}
