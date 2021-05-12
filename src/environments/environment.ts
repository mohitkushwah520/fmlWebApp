// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  url: {
    category: 'http://35.154.86.71:7777/category',
    drinks: 'http://35.154.86.71:7777/getoutletdrinks?outletId=5',
    //new api
    baseUrl: 'http://35.154.86.71:7777/',
    user: 'http://35.154.86.71:7777/webuser',
    allCategories : 'http://35.154.86.71:7777/webcategories',
    getFavourite : 'http://35.154.86.71:7777/getwebfavourites',
    removeFavourite: 'http://35.154.86.71:7777/deletewebfavourite',
    putFavourite: 'http://35.154.86.71:7777/addwebfavourite',
    getProfile: 'http://35.154.86.71:7777/getprofile',
    editProfile: 'http://35.154.86.71:7777/editprofile',

    fmlServerApi: 'https://qle1yy2ydc.execute-api.ap-southeast-1.amazonaws.com/V1/mapped_restaurant_menus'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
