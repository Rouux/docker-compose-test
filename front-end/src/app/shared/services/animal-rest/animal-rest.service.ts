import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Animal {
  name: string;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class AnimalRestService {
  constructor(private _http: HttpClient) {}

  public getAnimals(): Observable<Animal[]> {
    return this._http.get<Animal[]>('http://localhost:3000/animals');
  }
}
