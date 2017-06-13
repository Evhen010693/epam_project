import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../../core/entities';

@Component({
	selector: 'courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit{
	public courses: CourseItem[];

	public itemToDelete: string;

	constructor() {
		this.courses = [];
	}

	ngOnInit(){
		console.log("ngOnInit");
		this.courses =[
			new CourseItem(
				2,
				'Video course 2',
				'Lorem ipsum is a pseudo-Latin text used in web design, typography, placeholder',
				10,
				new Date()),
			new CourseItem(
				3,
				'Video course 3',
				'Lorem ipsum is a pseudo-Latin text used in web design, typography, placeholder',
				20,
				new Date()),
			new CourseItem(
				4,
				'Video course 4',
				'Lorem ipsum is a pseudo-Latin text used in web design, typography, placeholder',
				40,
				new Date()),
			new CourseItem(
				5,
				'Video course 5',
				'Lorem ipsum is a pseudo-Latin text used in web design, typography, placeholder',
				50,
				new Date()),
			new CourseItem(
				6,
				'Video course 6',
				'Lorem ipsum is a pseudo-Latin text used in web design, typography, placeholder',
				60,
				new Date())];
	}

	public logDeletedId(deletedId: number) {
		console.log(deletedId);
	}
}
