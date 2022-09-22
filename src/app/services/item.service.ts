import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  endpoint = 'http://localhost:8080/api/items';

  constructor( private httpClient: HttpClient ) { }

  getItems() {
    return this.httpClient.get (this.endpoint);
  }
}
