export class Movie{

	public id: number;
	public song: string;
	public singer: string;

	constructor(id: number, song: string, singer: string){
		this.id = id;
		this.song = song;
		this.singer = singer;
	}
}