import { Component, OnInit, ViewChild } from '@angular/core';
import { CourseItem } from '../../core/entities';
import { COURSES } from '../../mocks';
import { CourseService } from '../../services/courseService';
import { AuthService } from '../../services/auth';
import { ModalComponent } from '../../core/components/modal';

@Component({
	selector: 'courses-page',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
	public courses: CourseItem[];
	public isDisplayPage: boolean;

	@ViewChild(ModalComponent) private modalComponent: ModalComponent;

	constructor(private courseService: CourseService, private auth: AuthService) {
		console.log('Course constructor has worked');
		this.courses = [];
		this.isDisplayPage = auth.isLoggedIn();
	}

	public showConfirmation(deletedId: number) {
		this.modalComponent.show(deletedId);
	}

	public deleteItem(deletedId: number) {
		console.log(deletedId);
		this.courseService.remove(deletedId);
	}

	public ngOnInit() {
		console.log('ngOnInit');
		this.courses = COURSES;
	}
}
