import { Injectable } from '@angular/core';
import { Donation } from '../donation';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})

export class DonationService {
    donationsRef: AngularFireList<any>;
    donationRef: AngularFireObject<any>;

    constructor(private db: AngularFireDatabase) { }

    /* Create book */
    AddDonation(donation: Donation) {
        this.donationsRef.push({
            donation: donation.donation,
            fullName: donation.fullName,
            email: donation.email,
            phone: parseInt(donation.phone),
            adress: donation.adress,
            desc: donation.desc
        })
    }

}