import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProductResponse } from './productResponse';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private getProductsUrl = 'http://localhost:8080/rest/v1/products';

    constructor(private http: HttpClient) { }

    getProducts(searchParam: string, limit: number, page: number): Observable<ProductResponse> {
        let params = new HttpParams();
        params.append('limit', limit + '' || '10');
        params.append('page', page + '' || '1');
        params.append('name', searchParam || '');

        var preparedUrl = this.getProductsUrl.concat('?')
             .concat('limit=' + (limit || 10))
             .concat('&page=' + (page || 0))
             .concat('&name=' + searchParam || '');

        return this.http.get<ProductResponse>(
                preparedUrl,
                {params: params});
    }
}
