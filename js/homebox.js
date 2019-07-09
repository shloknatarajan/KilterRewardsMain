
let dataarray = [
  {
   "id": 1,
   "name": "Kilter Rewards Test Challenge",
   "description": "\u003cdiv\u003e\nEnter a team of 20 employees in the Kilter Rewards Test Challenge to win AbSoLuTeLy NoThInG :DDD! How do they win? The team must finish with one of the five top wellness scores!\u003cbr\u003e\n\u003cbr\u003e\nTeam Size Limit: 20 Participants\u003cbr\u003e\nTeam Entry Fee: $400 ($250 goes to donation prize pool!)\u003cbr\u003e\n\u003cbr\u003e\nGRAND PRIZE: 50% of Donation Prize Pool\u003cbr\u003e \n2nd Place: 25% of Donation Prize Pool\u003cbr\u003e\n3rd Place: 12.5% of Donation Prize Pool\u003cbr\u003e\n4th Place: 7.5% of Donation Prize Pool\u003cbr\u003e\n5th Place: 5% of Donation Prize Pool\u003cbr\u003e\n\u003cbr\u003e\n\u003cb\u003e4/20\u003c/b\u003e Teams Registered\n\u003c/div\u003e\n\n",
   "start": "2019-07-15T04:00:00Z",
   "end": "2019-09-30T04:00:00Z",
   "start_date": "July 15, 2019",
   "end_date": "September 30, 2019",
   "challenge_status": "UPCOMING",
   "page_url_name": "/kiltertestchallenge",
   "box_description": "Come on down to the test challenge now!",
   "category_tag": "Corporate",
   "prize_pool": 10000,
   "entry_fee": 400,
   "number_teams": 0,
   "can_register": true,
   "flyer_link": "",
   "registration_link": "",
   "leaderboard_link": "challenges.kilterrewards.com",
   "large_bg": "https://s3.us-east-2.amazonaws.com/kilter-media-test/challenges/dancingninja.gif",
   "smaller_photo": "https://s3.us-east-2.amazonaws.com/kilter-media-test/challenges/dancingninja.gif",
   "thumbnail_url": "https://s3.us-east-2.amazonaws.com/kilter-media-test/challenges/dancingninja.gif",
   "has_sponsor": true,
   "sponsor_name": "Test Sponsor",
   "sponsor_description": "",
   "sponsor_logo": "https://s3.us-east-2.amazonaws.com/kilter-media-test/partners/dancingninja.gif",
   "sponsor_link": "",
   "what_teams_do": "",
   "who_helping": "",
   "who_helping_photo": "https://s3.us-east-2.amazonaws.com/kilter-media-test/challenges/dancingninja.gif"
  }
 ]
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

for (var i = 0; i < dataarray.length; i++) {
    recentboxes.insertAdjacentHTML('afterbegin', Mustache.render(boxtemplate, dataarray[i]))
}