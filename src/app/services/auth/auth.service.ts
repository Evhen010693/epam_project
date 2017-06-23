import { Injectable } from '@angular/core';
import { User } from '../../core/entities/user';

@Injectable()
export class AuthService {
	public loggedIn = false;

	constructor() {
		this.loggedIn = !!localStorage.getItem('currentUser');
	}

	public isLoggedIn() {
		return this.loggedIn;
	}

	public login(user: User): void {
		console.log('User ' + user.name + ' has logged in');
		if (user) {
			localStorage.setItem('currentUser', JSON.stringify(user));
		}
		this.loggedIn = true;
	}

	public logout(): void {
		console.log('The user has logged out');
		localStorage.removeItem('currentUser');
		this.loggedIn = false;
	}

	public isAuthenticated(): boolean {
		return localStorage.getItem('currentUser') === null ? false : true;
	}

	public getUserInfo(): User {
		const currentUserJson = localStorage.getItem('currentUser');
		const currentUser: User = Object.assign(new User(), JSON.parse(currentUserJson));

		return currentUser;

	}
}

