import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { MovieComponent } from './components/movie/movie.component';
import { ShowComponent } from './components/show/show.component';
import { TheatreComponent } from './components/theatre/theatre.component';
import { BookingComponent } from './components/booking/booking.component';
import { SeatComponent } from './components/seat/seat.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    CustomerComponent,
    MovieComponent,
    ShowComponent,
    TheatreComponent,
    BookingComponent,
    SeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
