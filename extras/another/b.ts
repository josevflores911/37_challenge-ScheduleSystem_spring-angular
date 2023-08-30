import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority:
          'https://login.microsoftonline.com/08c48015-4219-4236-880b-f7be1e5a4225/v2.0',
        authWellknownEndpointUrl:
          'https://login.microsoftonline.com/08c48015-4219-4236-880b-f7be1e5a4225/v2.0/.well-known/openid-configuration',
        redirectUrl: window.location.origin,
        clientId: 'ec543dac-8252-4f0e-acc1-dea1b1b63ac5',
        scope: 'openid profile email',
        responseType: 'id_token token',
        silentRenew: true,
        silentRenewUrl: window.location.origin + '/silent-renew.html',
        useRefreshToken: true,
        ignoreNonceAfterRefresh: true,
        maxIdTokenIatOffsetAllowedInSeconds: 600,
        issValidationOff: true,
        autoUserInfo: true
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}
