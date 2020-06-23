export class Todo {

	public id: number;
	public employee_name: string;
	public employee_salary: number;

	constructor (  employee_name: string,  employee_salary: number)
	{
		this.employee_name = employee_name; 
		this.employee_salary = employee_salary;
	}
}