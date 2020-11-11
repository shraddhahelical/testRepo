var webPage = require('webpage');
var page = webPage.create();

setInterval(function () {
	console.log("Triggering*******************************************************");
page.open('http://192.168.2.51:7085/hi-ee/hi.html?dir=1463377807724/1472805277364&file=dabe0f49-2da0-48db-9772-6a51d2a5e322.efw&mode=open&j_username=hiadmin&j_password=hiadmin&refresh=true', function(status) {
  console.log('Status: ' + status);
  // Do other things here...
});
}, 30000);