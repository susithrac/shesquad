import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule }  from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatSelectModule } from '@angular/material';

import {
  MatCardModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatTableModule, MatToolbarModule, MatTooltipModule, MatTreeModule,MatNativeDateModule,MatExpansionModule,
  MatIconModule
} from "@angular/material";
import { SeatComponent } from './seat/seat.component';
import { BookingResolver } from './booking.resolver';
import { FullseatComponent } from './fullseat/fullseat.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookingComponent,
    ProfileComponent,
    LoginComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    SeatComponent,
    FullseatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule,MatNativeDateModule,MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule
  ],
  providers: [ BookingResolver ],
  bootstrap: [AppComponent]
})
export class AppModule { }
