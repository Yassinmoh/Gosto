import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  TranslateModule,
  TranslateLoader,
} from '@ngx-translate/core';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { WishlistEffect } from './store/Wishlist/wishlist.effect';
import { provideEffects } from '@ngrx/effects';
import { OrderEffects } from './store/Order/order.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(reducers, { metaReducers }),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(TranslateModule.forRoot()),
    provideToastr({ closeButton: false }),
    provideEffects([WishlistEffect,OrderEffects])
  ]
};
