import { Component, OnInit } from '@angular/core';
import { DetailService } from '../services/detail.service';
import * as AWS from 'aws-sdk';
import { AwsService } from '../services/aws.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  files: any;
  sno = 1;
  outputFiles = [];
  errorMessages = [];
  status = '';
  constructor(private detailService: DetailService,
    private awsService: AwsService,
    private router: Router) {
    this.files = this.detailService.filesDetails;
    this.detailService.filesDetails = undefined;
    if (this.files === undefined) {
      this.router.navigate(['/myResponse']);
    } else {
      if (this.files.status !== 'success') {
        this.status = 'error';
        this.getColumnDetails(this.files.statusMessage);
      } else {
        this.status = 'success';
        this.getSuccessFiles();
      }
    }
  }

  ngOnInit() {
  }

  getSuccessFiles() {
    AWS.config.update(this.awsService.AWS_CONFIG_UPDATE);
    const bucket = new AWS.S3(this.awsService.BUCKET);
    const that = this;
    const prefixText = this.files.storageBucketName.split('/');
    const params = {
      Bucket: this.awsService.BUCKET_NAME,
      Prefix: prefixText[1]
    };
    bucket.listObjects(params, function (err, data) {
      if (err) {
        throw err;
      }
      that.outputFiles = data.Contents;
      for (let i = 0; i < that.outputFiles.length; i++) {
        const fileKey = that.outputFiles[i].Key.split('success/').pop();
        that.outputFiles[i].outputFile = fileKey;
      }
    });
  }

  downloadFile(key) {
    const downloadBucketName = this.awsService.BUCKET_NAME + '/' +
      this.files.reqId + '/' +
      this.status + '/';
    const bucket = new AWS.S3({
      params: {
        Bucket: downloadBucketName
      }
    });
    const currentKey = key.split('/');
    const params = {
      Bucket: this.awsService.BUCKET_NAME + '/' + currentKey[0] + '/' + currentKey[1],
      Key: currentKey[2]
    };
    bucket.getSignedUrl('getObject', params, function (err, url) {
      if (url) {
        const element = document.createElement('a');
        element.setAttribute('href', url);
        element.setAttribute('target', '_blank');
        document.body.appendChild(element);
        element.click();
      }
    });
  }

  downloadInputFile(key) {
    const bucket = new AWS.S3({
      params: {
        Bucket: this.awsService.BUCKET_NAME
      }
    });
    const params = {
      Bucket: this.awsService.BUCKET_NAME,
      Key: this.files.uploadFileName
    };
    bucket.getSignedUrl('getObject', params, function (err, url) {
      if (err) {
        console.log('err', err);
      }
      if (url) {
        console.log(url);
        const element = document.createElement('a');
        element.setAttribute('href', url);
        element.setAttribute('target', '_blank');
        document.body.appendChild(element);
        element.click();
      }
    });
  }

  getColumnDetails(statusMessages) {
    for (let i = 0; i < statusMessages.length; i++) {
      const columnName = statusMessages[i].columnName;
      statusMessages[i].columnValues = statusMessages[i][columnName];
      this.errorMessages.push(statusMessages[i]);
    }
  }
}
