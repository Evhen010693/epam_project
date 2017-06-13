import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { CourseItem } from '../../../core/entities';

@Component({
	selector: 'course-item',
	templateUrl: './course.component.html',
	styleUrls: ['./course.component.scss'],
	providers: []
})

export class CourseComponent {
	@Input() public item: CourseItem;

	@Output() public childChanged = new EventEmitter<number>();

	constructor() {
	}

	public onItemDelete(value: number) {
		this.childChanged.emit(value);
	}
}
