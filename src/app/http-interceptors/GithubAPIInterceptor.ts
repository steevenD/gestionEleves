import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class GithubAPIInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
// si c'est une requête à l'API guithub
    if (req.url.includes('api.github.com')) {
// on doit ajouter un token d'authentification OAUTH
// on es obligé de clonner l’objet requete car c’est immuable
      const clone = req.clone({
        setHeaders: {
          'Content-Type': `Application/json`
        }
      });
      return next.handle(clone);
    }
    // si ce n'est pas une requête à l'API github
    return next.handle(req);
  }
}
