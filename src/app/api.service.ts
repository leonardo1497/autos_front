import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

const httpOptions = {
  headers: new HttpHeaders({
    'Content_Type': 'aplications/json',
    'Authorization': 'Token '+localStorage.getItem('token')
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api: string = 'http://134.209.167.224:8000/api/v1/';
  constructor(
    private http: HttpClient
  ) { }

  login(params: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content_Type': 'aplications/json',
      })
    }
    return this.http.post(`${this.api}login/`,params)
  }

  getAutos(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token '+localStorage.getItem('token')
      })
    }
    return this.http.get(`${this.api}auto/`,httpOptions)
  }

  postAuto(data: any): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token '+localStorage.getItem('token')
      })
    }
    console.log(data);
    return this.http.post<any>(`${this.api}auto/`,data,httpOptions)
  }

  updateAuto(data: any, id): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token '+localStorage.getItem('token')
      })
    }
    return this.http.put<any>(`${this.api}auto/${id}`,data,httpOptions)
  }

  deleteAuto(id): Observable<{}>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Token '+localStorage.getItem('token')
      })
    }
    const url = `${this.api}auto/${id}`
    return this.http.delete(url,httpOptions)
  }
}
