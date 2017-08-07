import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  myListings: FirebaseListObservable<any[]>;

  constructor(private afDatabase: AngularFireDatabase) { }

  getListings() {
    this.myListings = this.afDatabase.list('/listings/listings') as FirebaseListObservable<Listing[]>;
    return this.myListings;
  }
}

interface Listing {
  $key?: string;
  title?: string;
  type?: string;
  image?: string;
  city?: string;
  owner?: string;
  bedrooms?: string;
}
