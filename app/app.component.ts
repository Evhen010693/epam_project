import {Component} from 'angular2/core';
import { CoursesComponents } from './courses/courses.components'

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2+2 App</h1><courses></courses>',
    directives: [CoursesComponents]
})
export class AppComponent { }