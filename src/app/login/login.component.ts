import { Component, OnInit } from '@angular/core';
import { AwsService } from '../services/aws.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  password = '';
  constructor(private awsService: AwsService) {
    this.userName = awsService.USER_NAME;
    this.password = awsService.PASSWORD;

   }

  ngOnInit() {
  }

}
