import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';
import { Router } from '@angular/router';
import { DetailService } from '../services/detail.service';
import { AwsService } from '../services/aws.service';
@Component({
  selector: 'app-my-response',
  templateUrl: './my-response.component.html',
  styleUrls: ['./my-response.component.css']
})
export class MyResponseComponent implements OnInit {

  downloadFile = [];
  selectedFiles: any;
  selectedTarget: any;
  p = 1;

  constructor(private router: Router,
              private awsService: AwsService,
              private detailService: DetailService) {
    }

  ngOnInit() {
    this.getFiles();
  }

  getFiles() {
    this.awsService.getFilesList().subscribe((data: any) => {
      const fileList = JSON.parse(data.body);
      this.downloadFile = fileList.Items;
    });
  }

  viewDetails(files: any) {
    this.detailService.filesDetails = files;
    this.router.navigate(['/detail']);
  }

  uploadFile(event) {
    const that = this;
    AWS.config.update(this.awsService.AWS_CONFIG_UPDATE);

    const bucket = new AWS.S3(this.awsService.BUCKET);

    const file = event.target.files[0];
    if (file) {
      const objKey = file.name;
      const params = {
        Key: objKey,
        ContentType: file.type,
        Body: file,
        Bucket: that.awsService.BUCKET_NAME,
        ACL: 'public-read'
      };
      bucket.putObject(params, function (err, data) {
        if (err) {
          console.log('File Upload Failed: ' + err);
        } else {
          console.log('File Upload Success');
          that.downloadFile = [];
          that.getFiles();
        }
      });
    } else {
      console.log('Nothing to upload.');
    }
  }
}
