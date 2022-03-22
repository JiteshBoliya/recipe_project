import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-msg',
  templateUrl: './alert-msg.component.html',
  styleUrls: ['./alert-msg.component.css']
})
export class AlertMsgComponent implements OnInit {
  @Input() massage: string;
  @Output() close = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  onClose(): void {
    this.close.emit();
  }
  

}
