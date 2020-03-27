import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { DonationService } from './shared/services/donation.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import * as firebase from "firebase";
firebase.initializeApp(environment.firebase);
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SelectComponent } from './components/select/select.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, "tba2020-a20dd"),
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule, HttpClientModule
  ],
  providers: [DonationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
