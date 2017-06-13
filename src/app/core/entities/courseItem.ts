import { Course } from './interfaces/course.interface';

export  class CourseItem implements Course {
	public id: number;
	public title: string;
	public description: string;
	public duration: number;
	public date: Date;

	constructor(id: number, title: string, description: string, duration: number, date: Date) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.duration = duration;
		this.date = date;
	}
}
