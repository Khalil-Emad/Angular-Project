import { Injectable } from '@angular/core';
import { PaymentTypes } from '../models/payment-type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {
  paymentTypes=[
    {id:1,name:'Direct Bank Transfare'},
    {id:1,name:'Cheque Payment'},
    {id:1,name:'Paypal'},
    {id:1,name:'Visa'},
    {id:1,name:'Mastercard'},
    {id:1,name:'On Dilivery'},
  ]
  constructor() { }
  getAllPaymentTypes():PaymentTypes[]{
    return [...this.paymentTypes]
  }

  getPaymentTypeById(id:number): PaymentTypes | undefined{
return this.paymentTypes.find((p)=>p.id===id)
  }

  save(){}
  update(){}
  delete(){}
}

