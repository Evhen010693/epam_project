import { Component, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
	animations: [
		trigger('dialog', [
			transition('void => *', [
				style({ transform: 'scale3d(.3, .3, .3)' }),
				animate(100)]),
			transition('* => void', [
				animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
				])
			])
		]
})

export class ModalComponent {
	public isVisible: boolean = false;
	public deletedId: number;

	@Output() public onDeleted = new EventEmitter<number>();

	public show(id: number) {
		this.deletedId = id;
		this.isVisible = true;
	}

	public hide() {
		this.isVisible = false;
	}

	public deleteCompleted(id: number) {
		this.onDeleted.emit(id);
		this.hide();
	}
}

