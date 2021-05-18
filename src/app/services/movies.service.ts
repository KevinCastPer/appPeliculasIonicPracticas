import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) { }


  getFeature() {

    return this.http.get<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?api_key=79f21bc73fc9e7ff48e40805fe29eba0&language=es&primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-31`)
  }
}
