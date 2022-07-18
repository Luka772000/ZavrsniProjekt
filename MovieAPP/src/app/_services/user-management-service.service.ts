import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieClass } from '../_models/movie';
import { GetUser, User } from '../_models/user';
const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer' + JSON.parse(localStorage.getItem('user'))
  })
}
@Injectable({
  providedIn: 'root'
})
export class UserManagementServiceService {
  movformData:MovieClass= new MovieClass();
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getMember(id: string) {
    return this.http.get<GetUser>(this.baseUrl + 'user/userid/' + id, httpOptions);
  }
  getUser(id: string) {
    return this.http.get<User>(this.baseUrl + 'user/userid/' + id, httpOptions);
  }
  postMovie(movieForm:any){
    return this.http.post(this.baseUrl + `MovieCreatingAndRenting/create`,movieForm)
  } 
  getMovies(){
    return this.http.get<MovieClass[]>(this.baseUrl + `MovieCreatingAndRenting/unRentedFilms`,httpOptions)
  }
  getRentedMovies(){
    return this.http.get<MovieClass[]>(this.baseUrl + `MovieCreatingAndRenting/rentedFilms`,httpOptions)
  }
}
