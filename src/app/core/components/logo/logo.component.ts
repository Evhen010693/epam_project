import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'main-logo',
	templateUrl: 'logo.component.html',
	styleUrls: ['./logo.component.scss'],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class LogoComponent {
	public logoPath: string;

	constructor() {
		this.logoPath = '././assets/img/angular-logo.png';
	}
}
