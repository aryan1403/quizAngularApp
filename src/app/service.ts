import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class service {
    url = "http://localhost:8080/quiz/quizlist";
    constructor(private http: HttpClient) { }
    getQuiz(): Observable<any> {
        return this.http.get(this.url).pipe(
            map(this.extractData),
            catchError(this.handleErrorObservable)
        )
    }
    async getBooksWithPromise(): Promise<any> {
        try {
            const res = await this.http.get(this.url).toPromise();
            return this.extractData(res);
        } catch (error) {
            return this.handleErrorPromise(error);
        }
    }
    private extractData(res: any) {
        let body = res;
        return body;
    }
    private handleErrorObservable(error: any) {
        console.error(error.message || error);
        return throwError(error);
    }
    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}