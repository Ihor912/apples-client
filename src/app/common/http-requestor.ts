import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { timeout } from 'rxjs/operators';

import { ErrorCodes } from '../common/const';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestor {
    constructor(public http: HttpClient) {}

    getRequest(url: string): Observable<any> {
        const headers = this.addHeaders();
        return this.http.get(url, { headers })
            .pipe(timeout(16000));
    }

    postRequest(url: string, data: any = null): Observable<any> {
        const headers = this.addHeaders();
        const body = JSON.stringify(data);

        return this.http.post(url, body, {headers})
                .pipe(timeout(16000));
    }

    putRequest(url: string, stringData: Number, data: any): Observable<any> {
        const headers = this.addHeaders();
        const body = JSON.stringify(data);

        return this.http.put(url + stringData, body, {headers})
                .pipe(timeout(16000));
    }

    deleteRequest(url: string, stringData: Number): Observable<any> {
        const headers = this.addHeaders();

        return this.http.delete(url + stringData, {headers})
                .pipe(timeout(16000));
    }

    addHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return headers;
    }

    handleError(e: any): Promise<any> {
        console.log('error code: ' + e.status);
        const error = e.message || e;
        if (error === 'Timeout has occurred') {
            return Promise.reject(ErrorCodes.TIMEOUT);
        }

        return Promise.reject(e.status || '');
    }
}
