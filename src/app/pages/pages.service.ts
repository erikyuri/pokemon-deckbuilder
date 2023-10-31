import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../models/response.model';

@Injectable({
    providedIn: 'root'
})
export class PagesService {


    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'X-Api-Key': '33ebd9a5-57d1-48cf-8b87-f801410f6c95',
            'Content-Type': 'application/json',
        }),
    };

    getCards(term: string): Observable<any> {
        return this.http.get<any>(`https://api.pokemontcg.io/v2/cards?q=name:"${term}"`, this.httpOptions).pipe(map((response) => response.data));
    }

}
