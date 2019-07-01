const kilterget = require('./kilterget')
let dataarray = kilterget.dataarray

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


var recentboxes = document.getElementById("recentchallenges");

for (var i = 0; i < 3; i++) {
    console.log("Got Here")
    recentboxes.insertAdjacentHTML('afterbegin', Mustache.render(boxtemplate, dataarray[i]))
}