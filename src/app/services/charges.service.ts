import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Charge } from '../models/charge';

@Injectable()
export class ChargesService {

  private BASE_URL = 'https://localhost:7079/api/charges';

  constructor(private http: HttpClient) { }

  getCharges(): Observable<Charge[]> {
    const url = `${this.BASE_URL}`;
    return this.http.get<Charge[]>(url);
  }

}

