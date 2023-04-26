// ANGULAR
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  // VAR
  @Input() averageRating: number = 0;

  // GET STAR
  get stars(): string[] {
    // ROUNDED RATING
    const roundedRating = Math.round(this.averageRating * 2) / 2;
    // INTEGER PART
    const integerPart = Math.floor(roundedRating);
    // FRACTIONAL PART
    const fractionalPart = roundedRating - integerPart;
    const stars = Array(integerPart).fill('star');
    if (fractionalPart > 0) {
      stars.push('star_half');
    }
    const emptyStars = Array(5 - stars.length).fill('star_border');
    return [...stars, ...emptyStars];
  }
}
