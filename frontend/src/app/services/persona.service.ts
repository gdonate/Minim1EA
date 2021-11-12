import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Persona} from '../models/Persona'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URI="http://localhost:4002/minimExemple/personas";
  constructor(private http:HttpClient) { }

  createPersonas(persona:Persona){
    return this.http.post<Persona>(this.URI,persona)
  }

  getPersonas(){
    return this.http.get<Persona[]>(this.URI)
  }

}
