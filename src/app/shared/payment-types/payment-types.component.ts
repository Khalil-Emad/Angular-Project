import { Component, OnInit } from '@angular/core';
import { PaymentTypes } from 'src/app/models/payment-type.model';

@Component({
  selector: 'app-payment-types',
  templateUrl: './payment-types.component.html',
  styleUrls: ['./payment-types.component.sass']
})
export class PaymentTypesComponent implements OnInit {
  paymentTypes:PaymentTypes[];

  constructor() {
    this.paymentTypes=[
      {id:1,name:'Direct Bank Transfare'},
      {id:1,name:'Cheque Payment'},
      {id:1,name:'Paypal'},
      {id:1,name:'Visa'},
      {id:1,name:'Mastercard'},
      {id:1,name:'On Dilivery'},
    ]
  }

  ngOnInit(): void {
  }

}
