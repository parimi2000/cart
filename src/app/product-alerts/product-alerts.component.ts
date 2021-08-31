import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  // @Input()
  // productI !: Product;
  // @Output()
  // notifyme = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}