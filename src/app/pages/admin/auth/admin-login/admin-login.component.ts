import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
forget=false;
  constructor() { }

  ngOnInit(): void {
  }
forgetPass(){
this.forget=true;
}
}