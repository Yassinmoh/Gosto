import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'Gosto-billing-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule, FormsModule],
  templateUrl: './billing-details.component.html',
  styleUrl: './billing-details.component.scss'
})
export class BillingDetailsComponent implements OnInit {

  _fb = inject(FormBuilder);

  billingForm!: FormGroup;
  newShippingForm!: FormGroup;
  activeIndex: number = -1;
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  selectedCity: any | undefined;


  ngOnInit(): void {
    this.initBillingForm()
  }

  initBillingForm() {
    this.billingForm = this._fb.group({
      firstName: [''],
      lastName: [''],
      companyName: [''],
      country: [''],
      streetAddress: this._fb.group({
        streetNumber: [''],
        streetName: [''],
      }),
      city: [''],
      postCode: [''],
      phone: [''],
      email: [''],
      orderNotes: ['']
    })
  }

  toggleTab() {
    this.activeIndex = this.activeIndex === 0 ? -1 : 0;
  }
}
