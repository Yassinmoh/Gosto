import { Component } from '@angular/core';

@Component({
  selector: 'Gosto-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  topFooterData=[
    {
      img:'FAST_DELIVERY.png',
      title:'FAST DELIVERY',
      description:'With sites in 6 languages, we ship to over 200 countries & regions.'
    },
    {
      img:'SAFE_PAYMENT.png',
      title:'SAFE PAYMENT',
      description:'Money back up to 60 days, commitment to outstanding quality products.'
    },
    {
      img:'DAYS_RETURN.png',
      title:'60 DAYS RETURN',
      description:'Round-the-clock assistance for a smooth shopping experience.'
    },
    {
      img:'HELP_CENTER.png',
      title:'HELP CENTER',
      description:'Pay with the world’s most popular and secure payment methods.'
    }
  ]
}
