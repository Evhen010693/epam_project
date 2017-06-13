// angular modules
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// custom components
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { ToolboxComponent } from './toolbox/toolbox.component';

@NgModule({
	declarations: [
		CoursesComponent,
		CourseComponent,
		ToolboxComponent
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	exports:[
		CoursesComponent
	],
	providers: []
})
export class CoursesModule {
	constructor() {
	}
}
