import { Injectable } from '@angular/core';
import {Movie} from './../models/movie.class';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

	public movies: Movie[] = [
		new Movie(1, 'Lac Troi', 'Son Tung'),
		new Movie(2, 'Beo Dat May Troi', 'Khac Tiep')
	];
  constructor() { }

  getAllMovies(): Movie[] {
  	return this.movies;
  }

  addMovie(movie: Movie) {
  	 let stt = this.movies.length;
  	 (this.movies.length!==0) ? movie.id = ++stt : movie.id = 1;
  	console.log(this.movies.push(movie));
  }

  // Cách 2
  //   addMovie(movie: Movie) {

  //   	movie.id = this.getLastID();
  // 		this.movies.push(movie);
  // }
  // 	getLastID(){

  // 		let stt =  this.movies.sort((a,b) => {
  // 			return a.id > b.id ? 11 : b.id > a.id ? 1 : 0
  // 		})[this.movies.length-1].id+1;

  // 		return stt;
  // 	}

}
