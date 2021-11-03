'use strict';
var urlRequests =[];
exports.urlRequests;
// Function to count the http requests
exports.request_handled = function(req, res) {
  try {
    let url =req.body.url;
    let index = urlRequests.findIndex(element => element.url == url);
    if(index!=-1){
      urlRequests[index].times = urlRequests[index].times+1; 
    }else{
      urlRequests.push({times:1, url: url})
    }
    res.json({Response:"Success"})
  } catch (error) {
    console.error(error)
  }
};
// Function to sort the url requests
exports.top100 = function(req, res){
  try {
    // Sort the request and take the first 100 values
    urlRequests.sort(function(a,b){
      return b.times-a.times;
    }).slice(0,100)
    // Response 
    res.json({Response:urlRequests})
  } catch (error) {
    console.error(error)
  }
}
