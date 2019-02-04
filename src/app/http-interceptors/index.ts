import {HTTP_INTERCEPTORS} from  '@angular/common/http';
import {GithubAPIInterceptor} from './GithubAPIInterceptor';
import {ErrorHandlerInterceptor} from './ErrorHandlerInterceptor';
/** Http interceptor providers in outside-in order */

export const
  httpInterceptorProviders = [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GithubAPIInterceptor,
      multi: true
    }
  ];
