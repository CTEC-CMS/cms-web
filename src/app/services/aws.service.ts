import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  TABLE_NAME = environment.TABLE_NAME;
  BUCKET_NAME = environment.BUCKET_NAME;
  AWS_CONFIG_UPDATE = {
      accessKeyId: environment.ACCESS_KEY,
      secretAccessKey: environment.SECRET_ACCESS_KEY,
      'region': environment.REGION
  };
  BUCKET = {
    params: {
      Bucket: environment.BUCKET_NAME
    }
  };

  constructor() {
    // console.log ( ' test ');
  }
}
