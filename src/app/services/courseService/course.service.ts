import { Injectable } from '@angular/core';
import { CourseItem } from '../../core/entities/courseItem';
import { COURSES } from '../../mocks';

@Injectable()
export class CourseService {
	public getAll(): CourseItem[] {
		return COURSES;
	}

	public get(id: number): CourseItem {
		return COURSES.filter((item) => {
			return item.id === id;
		})[0];
	}
	public create(): void {}
	public update(): void {}
	public remove(id: number): void {
		const indexToDelete = COURSES.map((el) => el.id).indexOf(id);

		if (indexToDelete !== -1) {
			COURSES.splice(indexToDelete, 1);
		}
	}
}
