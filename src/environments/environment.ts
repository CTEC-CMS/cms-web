// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

export  const   CMS_CONSTANTS = {
  CMS_USERNAME : 'cms-provider@cms.com',
  CMS_PASSWORD : 'Welcome!',
  ACCESS_KEY: 'PRODUCTION_ACCESS_KEY',
  SECRET_ACCESS_KEY: 'PRODUCTION_SECRET_ACCESS_KEY',
  REGION: 'us-east-2',
  TABLE_NAME: 'TABLE_FOR_CMS_PROVIDER_MATCHING_REQUEST',
  BUCKET_NAME: 'PRODCUCTION_BUCKET',
  REQUEST_URL: 'https://29zf7dfc23.execute-api.us-east-2.amazonaws.com/production/requests',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
