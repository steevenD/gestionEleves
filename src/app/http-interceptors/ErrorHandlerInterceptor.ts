import {ErrorHandler, Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs/internal/observable/throwError';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router, private errorHandler: ErrorHandler) {}
  intercept(req: HttpRequest <any>, next: HttpHandler): Observable <HttpEvent<any>> {
    return next.handle(req).
    pipe(
// On catch l'erreur
      catchError((errorResponse: HttpErrorResponse) => {
// si le statut est Unauthorized
        if (errorResponse.status === 404) {
// on redirige sur la page login
          console.log('error');
          this.router.navigate(['error']);
        } else {
// autrement on notifie l'utilisateur
          console.log(errorResponse);
        }
        return throwError(errorResponse)
        ;
      })
    )
    ;
  }
}
