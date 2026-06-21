import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCard } from '../trip-card/trip-card';  

import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication';

@Component({
  selector: 'app-trip-listing',
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
  providers: [TripData]
})

export class TripListing implements OnInit {
  trips!: Trip[];
  message: string = '';

  constructor(private tripData: TripData, private authenticationService: AuthenticationService, private router: Router, private cdr: ChangeDetectorRef) {
    console.log('trip-listing constructor');
  }

  public addTrip(): void {
    this.router.navigate(['/add-trip']);
  }

  public isLoggedIn(): boolean {
  return this.authenticationService.isLoggedIn();
}

  private getStuff(): void {
    this.tripData.getTrips().subscribe({
      next: (value: any) => {
        // console.log('RAW VALUE:', value);
        // console.log('IS ARRAY?', Array.isArray(value));
        this.trips = value;
        // console.log('this.trips AFTER ASSIGNMENT:', this.trips);
        if(value.length > 0) {
          this.message = 'There are ' + value.length + ' trips available.';
        } else { 
          this.message = 'There were no trips retrieved from the database.';
        }
        console.log(this.message);
        this.cdr.detectChanges(); // Perhaps fixes ASYNC Trip array problems
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}
