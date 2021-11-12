// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import {Vacuna} from '../models/Vacuna'

// @Injectable({
//   providedIn: 'root'
// })
// export class VacunaService {

//   constructor(private http:HttpClient) { }

//   createVacuna(vacuna:Vacuna): Observable<any>{
//     return this.http.post(environment.apiURL + '/vacuna/new', nuevogrupo)
//   }

//   getVacunas(){
//     return this.http.get<Vacuna[]>(this.URI)
//   }

//   getVacuna(id:string){
//     return this.http.get<Vacuna>(this.URI+'/'+id)
//   }
//   updateVacuna(vacuna:Vacuna){
//     return this.http.put(this.URI+'/'+vacuna._id,vacuna)
//   }
// }
