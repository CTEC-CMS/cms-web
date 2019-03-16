import { Component, OnInit } from '@angular/core';
import { AwsService } from '../services/aws.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  password = '';
  loginForm: FormGroup;
  constructor(private awsService: AwsService, private fb: FormBuilder, private router: Router) {
    this.userName = this.awsService.USER_NAME;
    this.password = this.awsService.PASSWORD;

   }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({
      userName: this.userName,
      password: this.password
    });
  }

  login(formValue) {
    console.log(formValue);
    if(formValue.userName === this.userName && formValue.password === this.password) {
this.router.navigate(['/landing']);
    }
  }

}
