const fs = require('fs')
const kilterget = require('./kilterget')
async function getDataArray() {
  return await kilterget.dataarray();
}
getDataArray().then(dataarray =>  {
// Templates Begin
var boxtemplate = `
<div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
    <div class="box charitybg" style="background-image: url({{thumbnail_url}})">
    <h4 class="title"><a href="{{page_url_name}}.html">{{name}}</a></h4>
    <p class="description">{{box_description}}</p>
    <div class="categorytag">
        <p>{{category_tag}}</p>
    </div>
    <div class="datetag">
        <p>{{start_date}} - {{end_date}}</p>
        </div>
    </div>
</div>`


// Template Ends

// Functionality Begins
var live_array = new Array();
var upcoming_array = new Array();
var past_array = new Array();


for (var i = 0; i < dataarray.length; i++) {
    if (dataarray[i].challenge_status === "Upcoming") {
        upcoming_array.push(dataarray[i]);
    }
    if (dataarray[i].challenge_status === "Live") {
        live_array.push(dataarray[i]);
    }
    if (dataarray[i].challenge_status === "Past") {
        past_array.push(dataarray[i]);
    }
}

var allupcoming = document.getElementById("allupcoming");
var alllive = document.getElementById("alllive");
var allpast = document.getElementById("allpast");

for (var i = 0; i < upcoming_array.length; i++) {
    allupcoming.insertAdjacentHTML('afterbegin', Mustache.render(boxtemplate, upcoming_array[i]))
}
for (var i = 0; i < live_array.length; i++) {
    alllive.insertAdjacentHTML('afterbegin', Mustache.render(boxtemplate, live_array[i]))
}
for (var i = 0; i < past_array.length; i++) {
    allpast.insertAdjacentHTML('afterbegin', Mustache.render(boxtemplate, past_array[i]))
}

console.log("Test")
// Recent Challenges thing
let endpoint = dataarray.length;
if (dataarray.length > 3) {
    endpoint = 3;
}

})