import { Component, Input } from '@angular/core';

@Component({
	selector: 'toolbox',
	templateUrl: './toolbox.component.html',
	styleUrls: ['./toolbox.component.scss'],
})

export class ToolboxComponent {
	@Input() public inputValue: string;

	constructor() {
	}

	public log(event, item) {
		console.log(item);
	}
}
