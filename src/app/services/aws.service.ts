import { Injectable } from '@angular/core';
import { CMS_CONSTANTS } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  USER_NAME = CMS_CONSTANTS.CMS_USERNAME;
  PASSWORD = CMS_CONSTANTS.CMS_PASSWORD;
  DYNAMO_REQUEST_URL = CMS_CONSTANTS.REQUEST_URL;
  TABLE_NAME = CMS_CONSTANTS.TABLE_NAME;
  BUCKET_NAME = CMS_CONSTANTS.BUCKET_NAME;
  AWS_CONFIG_UPDATE = {
      accessKeyId: CMS_CONSTANTS.ACCESS_KEY,
      secretAccessKey: CMS_CONSTANTS.SECRET_ACCESS_KEY,
      'region': CMS_CONSTANTS.REGION
  };
  BUCKET = {
    params: {
      Bucket: CMS_CONSTANTS.BUCKET_NAME
    }
  };

  constructor(private http: HttpClient) {
    // console.log ( ' test ');
  }

  getFilesList() {
    return this.http.get(this.DYNAMO_REQUEST_URL);
  }
}
