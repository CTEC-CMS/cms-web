## Provider Matching Service (PMS)
PMS is capable of receiving files of varied models (payment methodologies), identify participating providers, process and transform the files into a unified format which can then ingress into the legacy system.

## PMS Workflow
![PMS Worklfow](/images/PMS-Worlflow.png)

1) User uploads an object ( e.g provider_matching.csv file) to an S3 bucket (object-created event).

2) Amazon S3 detects the object-created event.

3) If the uploaded object is a CSV file, Amazon S3 invokes a Lambda function that is specified in the bucket notification configuration.

4) AWS Lambda executes the Lambda function 

5) Lambda function validates the data from CSV file and create output files in the "success" folder of the S3 bucket and moves the original file to "archive" folder.

6) If there is any validation error, the original CSV file is moved to "error" folder in the S3 bucket.

7) Logs from Lambda function is pushed to AWS Cloudwatch.

8) Transaction record is maintained in AWS DynamoDB.

## Code Pipeline
![Code Pipeline](/images/PMS-CodePipeline.png)

1) Developer commits the code to SCM –Git

2) Change in repository through a commit or pull request triggers CodeBuild. Pulls the source code from repository and Creates artifacts.

3) Push the artifact to AWS S3 bucket – with website hosting enabled

4) CodeDeploy – Pull the artifacts from S3 bucket and deploy to the hosting S3 Bucket.

## Tech/Services used
<b>Built with</b>
- [GitHub](https://github.com/)
- [AWS S3 Bucket](https://aws.amazon.com/s3/)
- [AWS Lamda](https://aws.amazon.com/lambda/)
- [AWS DynamoDB](https://aws.amazon.com/dynamodb/)
- [AWS CodeBuild](https://aws.amazon.com/codebuild/)
- [AWS CloudWatch](https://aws.amazon.com/cloudwatch/)
- [AWS CodePipeline](https://aws.amazon.com/codepipeline/)

## How to setup & place a provider input?
### Provider input bucket
1) Create an AWS S3 bucket to which provider will be placing the file input
2) Setup an user with write permission to S3 bucket
3) provide the secret key to provider

### Deploying the end user web application
1) Create an AWS S3 bucket & enable web hosting
2) checkout the project, modify environment.json with the provider input bucket name, region, user access (secret key)
3) deploy the web application into S3 bucket
4) user logs into the web app to track requests

#### Workflow
1) User Logs into PMS web application

![PMS Login](/images/CMS-Login.png)

2) User lands in a Dashboard with statistics

![PMS Dashboard](/images/CMS-ProviderMatching-Dashboard.png)

3) Clicking on the "My Request" tab shows the request status along with a history

![PMS Requests](/images/CMS-ProviderMatching-Requests.png)

4) User clicks on any of the request to see more details along with an option to download the file

![Detailed Request specific view](/images/CMS-ProviderMatching-RequestView.png)


## Features
1) High Performance
2) Enhanced Security
3) On-demand Scalability
