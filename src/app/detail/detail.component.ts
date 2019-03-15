import { Component, OnInit } from '@angular/core';
import { DetailService } from '../services/detail.service';
import * as AWS from 'aws-sdk';
import { AwsService } from '../services/aws.service';
import { FileSystemCredentials } from 'aws-sdk';
import { fillProperties } from '@angular/core/src/util/property';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  files: any;
  sno = 1;
  outputFiles = [];
  constructor(private detailService: DetailService,
    private awsService: AwsService) { }

  ngOnInit() {
    this.files = this.detailService.filesDetails;
    this.detailService.filesDetails = undefined;
    AWS.config.update(this.awsService.AWS_CONFIG_UPDATE);
    const bucket = new AWS.S3(this.awsService.BUCKET);
    const that = this;
    const prefixText = this.files.reqId.split('REQ-').pop();
    const params = {
      Bucket: 'cms-provider-input-bucket',
      Prefix:  prefixText + '/success/'
    };
    console.log('files', this.files);
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
    const downloadBucketName = this.awsService.BUCKET_NAME + '/' + this.files.reqId + '/success/';
    const bucket = new AWS.S3({
      params: {
        Bucket: downloadBucketName
      }
    });
    console.log(downloadBucketName);
    const currentKey = key.split('/');
    const params = {
      Bucket: this.awsService.BUCKET_NAME + '/' + currentKey[0] + '/' + currentKey[1],
      Key: currentKey[2]
    };
    console.log('key', key);
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
}
