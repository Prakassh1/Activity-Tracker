import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { SharedModule } from '@app/auth/shared/shared.module';

import { AuthRoutingModule } from '@app/auth/auth-routing.module';

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDh-WDc9BFHjeUAl9ajPHAH0W88gGFs2zA",
  authDomain: "activity-tracker-d433a.firebaseapp.com",
  databaseURL: "https://activity-tracker-d433a-default-rtdb.firebaseio.com",
  projectId: "activity-tracker-d433a",
  storageBucket: "activity-tracker-d433a.appspot.com",
  messagingSenderId: "943688514451",
  appId: "1:943688514451:web:8cf3d417ebaeef947bc666",
  measurementId: "G-ML0HJVFB4Z"
};

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {}
