import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private url = "SuperHeroes";
  constructor(private http : HttpClient) { }

  public getSuperHeroes() : Observable<SuperHero[]>{
    return this.http.get<SuperHero[]>(`${environment.apiBaseURL}/${this.url}`)
  }


  public updateHero(hero: SuperHero) : Observable<SuperHero[]>{
    return this.http.put<SuperHero[]>(`${environment.apiBaseURL}/${this.url}`, hero)
  }

  
  public createHero(hero: SuperHero) : Observable<SuperHero[]>{
    return this.http.post<SuperHero[]>(`${environment.apiBaseURL}/${this.url}`, hero)
  }


  public deleteHero(hero: SuperHero) : Observable<SuperHero[]>{
    return this.http.delete<SuperHero[]>(`${environment.apiBaseURL}/${this.url}/${hero.id}`)
  }
}
