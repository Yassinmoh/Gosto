import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';


@Component({
  selector: 'Gosto-billing-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule, FormsModule, AccordionModule],
  templateUrl: './billing-details.component.html',
  styleUrl: './billing-details.component.scss'
})
export class BillingDetailsComponent implements OnInit {

  @Output() billingFormUpdated = new EventEmitter<FormGroup>();
  @Output() shippingFormUpdated = new EventEmitter<FormGroup>();
  @Output() toggleShippingFormAccordion = new EventEmitter<boolean>();


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
    this.handleBillingFormchanges()
    this.handleShippingFormchanges()
  }

  initBillingForm() {
    this.billingForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: [''],
      country: [''],
      streetAddress: this._fb.group({
        streetNumber: ['', Validators.required],
        streetName: ['', Validators.required],
      }),
      city: [''],
      postCode: [''],
      phone: ['', Validators.required],
      email: ['', Validators.required],
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
    this.toggleShippingFormAccordion.emit(this.isChecked)
  }

  updateShippingAddress(event: Event) {
    event.preventDefault()
  }

  handleBillingFormchanges() {
    this.billingForm.valueChanges.subscribe(() => {
      this.billingFormUpdated.emit(this.billingForm)
    })
  }

  handleShippingFormchanges() {
    this.newShippingForm.valueChanges.subscribe(() => {
      this.shippingFormUpdated.emit(this.newShippingForm)
    })
  }

}
