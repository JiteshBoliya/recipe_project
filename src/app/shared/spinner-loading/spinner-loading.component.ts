import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-loading',
  template: '<div class="lds-facebook"><div></div><div></div><div></div></div>',
  styleUrls: ['./spinner-loading.component.css']
})
export class SpinnerLoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
