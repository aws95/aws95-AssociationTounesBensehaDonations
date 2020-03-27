import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { FormBuilder , FormGroup, FormControl } from "@angular/forms";
import { DonationService } from './../../shared/services/donation.service';
import { AngularFireDatabase } from '@angular/fire/database';
import Swal from "sweetalert2";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  model: any;
  violation :any;
  donationForm: FormGroup;
  signForm: FormGroup;
  get: any;

  selected: string = '';

  constructor(
    private viewportScroller: ViewportScroller,
    private fb: FormBuilder,
    private http: HttpClient,
    private api: DonationService,
    public router: Router,
    private db: AngularFireDatabase
  ) {
  }

  ngOnInit(): void {
    this.signForm = this.fb.group({
      violation: new FormControl(),
      vadress: new FormControl(),
      vdesc: new FormControl(),
    });
    
    this.donationForm = this.fb.group({
      donation: new FormControl(),
      fullName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      adress: new FormControl(),
      desc: new FormControl(),
    })
  }

  onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  
    
  getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };


  submitDonation() {
    this.model = JSON.stringify({
       donationData: this.donationForm
     }, this.getCircularReplacer()); this.http
       .post("https://tba2020-a20dd.firebaseio.com/donations" + ".json", this.model)
       .subscribe(res => console.log(res));
     Swal.fire({
       title: "Merci pour votre Générosité",
     });
     this.router.navigate(["/home"]);
    console.log(this.donationForm.value);
  }
  submitSign() {
    this.violation = JSON.stringify({
       violationData: this.signForm
     }, this.getCircularReplacer()); this.http
       .post("https://tba2020-a20dd.firebaseio.com/violations" + ".json", this.violation)
       .subscribe(res => console.log(res));
     Swal.fire({
       title: "Merci pour votre Vigilance",
     });
     this.router.navigate(["/home"]);
    console.log(this.signForm.value);
  }

}
