import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth';
import { User } from '../../core/entities/user';
import { isAuthenticated } from '../../mocks';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent {
	@Input() public loginValue: string;
	@Input() public passwordValue: string;

	constructor(private auth: AuthService) {
		console.log('Login constructor has worked');
	}

	public login() {
		this.auth.login(new User(1, this.loginValue, this.passwordValue));
	}
}
