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
