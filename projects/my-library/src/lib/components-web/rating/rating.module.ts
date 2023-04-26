// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// API
import { RatingRoutingModule } from './rating-routing.module';
import { RatingComponent } from './rating.component';

@NgModule({
  declarations: [RatingComponent],
  exports: [RatingComponent],
  imports: [CommonModule, RatingRoutingModule],
})
export class RatingModule {}
