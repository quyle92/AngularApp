export class Products {
	public id: number;
	public name: string;
	public price: number;
	public status: number;

	constructor( name: string, price: number, status: number){
		
		this.name = name;
		this.price = price;
		this.status = status;
	}
}