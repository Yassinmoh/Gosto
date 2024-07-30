import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';


@Component({
  selector: 'Gosto-billing-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule, FormsModule,AccordionModule],
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
  isChecked = false;

  ngOnInit(): void {
    this.initBillingForm()
    this.initShippingAddressForm()
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

  initShippingAddressForm() {
    this.newShippingForm = this._fb.group({
      country: [''],
      state: [''],
      city: [''],
      postcode: [''],
    })
  }

  toggleTab() {
    this.activeIndex = this.activeIndex === 0 ? -1 : 0;
  }

  toggleAccordion(event: any) {
    this.isChecked = event.target.checked;
  }

  updateShippingAddress(event:Event){
    event.preventDefault()
  }

}
