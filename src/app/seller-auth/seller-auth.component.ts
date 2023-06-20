import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp, Login } from './SignUp';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller: SellerService) { }
  ngOnInit(): void {
    this.seller.reloadSeller();
  }

   isShowLogin = false;
   errMsg: string = '';

  signUp(data: SignUp): void {
    this.seller.userSignUp(data);
  }

  showLogin() {
    this.isShowLogin = true;
  }
  showSignUp() {
    this.isShowLogin = false;
  }

  login(data: Login) {
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) => {
      if(isError) {
        this.errMsg = "Email or password is incorrect";
      }
    })
  }
}
