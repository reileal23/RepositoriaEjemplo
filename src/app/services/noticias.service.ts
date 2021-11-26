import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaToHeadLines } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines()
  {
    return this.http.get
    (' https://newsapi.org/v2/everything?q=tesla&from=2021-10-09&sortBy=publishedAt&apiKey=7f33290a0dcb4988b3d32cde62e67cbc')
  }
}
