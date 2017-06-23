// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// custom components
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from '../../services/courseService';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { ModalComponent } from '../../core/components/modal';

@NgModule({
	declarations: [
		CoursesComponent,
		CourseComponent,
		ToolboxComponent,
		ModalComponent
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	exports: [
		CoursesComponent
	],
	providers: [
		CourseService
	]
})
export class CoursesModule {
	constructor() {
	}
}
