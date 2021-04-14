import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private url="http://localhost:8080/api/save";
  private geturl ="http://localhost:8080/api/getall";
  private searchul="http://localhost:8080/api/getnames/";
  private updateurl="http://localhost:8080/api/update/";

  constructor(private http:HttpClient) { }

  createParts(parts:object):Observable<object>{
    return this.http.post(this.url,parts);
  }

  getParts(){
    return this.http.get(this.geturl);
  }

  seacrchParts(names:string):Observable<any>{
    return this.http.get(`${this.searchul}/${names}`)
  }

  updateParts(id:any,part:object){
    return this.http.put(`${this.updateurl}/${id}`,part)
  }
}
