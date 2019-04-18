import { Component, OnInit, Input } from "@angular/core";
import { Customer } from "./customer";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  constructor() {}

  customers: Customer[] = [];
  selectedCustomer: Customer;
  // city değerini üst component'ten alabilmek için;
  @Input() city: string;

  ngOnInit() {
    this.customers = [
      { id: 1, name: "Hamdi Çatal", age: 23 },
      { id: 2, name: "Burak Çatal", age: 20 },
      { id: 3, name: "Yusuf Çatal", age: 15 },
      { id: 4, name: "Ramazan Çatal", age: 48 }
    ];
  }

  // event binding için;
  selectCustomer(customer: Customer) {
    this.selectedCustomer = customer;
    //alert(customer.id + " - " + customer.name + " - " + customer.age);
  }
}
