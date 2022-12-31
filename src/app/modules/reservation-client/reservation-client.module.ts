import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationClientRoutingModule } from './reservation-client-routing.module';
import { ReservationClientComponent } from './pages/reservation-client/reservation-client.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ReservationClientComponent
  ],
  imports: [
    CommonModule,
    ReservationClientRoutingModule,
    SharedModule
  ]
})
export class ReservationClientModule { }
