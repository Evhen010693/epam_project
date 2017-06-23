import { Course } from './interfaces/course.interface';

export  class User {
	public id: number;
	public name: string;
	public password: string;
	public firstName: string;
	public lastName: string;

	constructor(id?: number, name?: string, password?: string, firstName?: string, lastName?: string) {
		this.id = id;
		this.name = name;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
	}
}
