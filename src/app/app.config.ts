import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"instagram-troller","appId":"1:476033497215:web:52db5b5f1bd5ae4fefa74a","storageBucket":"instagram-troller.appspot.com","apiKey":"AIzaSyAmLiPTOyC5ULQjn-99AkLkf8FPF6emw64","authDomain":"instagram-troller.firebaseapp.com","messagingSenderId":"476033497215"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
