const request = require('request');

var dataarray = [
    {
        "page_url_name":"kilterspring2019",
        "challenge_status": "Upcoming",
        "can_register":true,
        "large_bg":"https://images.unsplash.com/photo-1462717585237-7fafe19c5448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        "smaller_photo":"img/kilter/kilterrunning.jpg",
        "name": "Kilter Rewards Springer Challenge 2",
        "thumbnail_url": "https://images.unsplash.com/photo-1462717585237-7fafe19c5448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        "category_tag": "Corporate",
        "start_date": "June 15, 2019",
        "end_date": "July 15, 2019",
        "id": 3,
        "name": "Kilter Rewards Summer Cause Challenge",
        "box_description":"Join us for the kilter rewards summer challenge",
        "description": "Enter a team of 15-20 employees from your company to earn a piece of a $10,000 donation prize pool for your favorite cause! Teams can be anywhere from 15 to 50 people",
        "start": "2019-06-15T05:00:00Z",
        "end": "2019-07-31T23:59:59Z",
        "prize_pool":10000,
        "what_teams_do":`
          <h4>What Teams Do</h4>
          <p>Step 1: Register your team here</p>
          <p>Step 2: Choose a Cause to Compete For</p>
          <p>Step 3: Members join their teams on the Kilter Rewards App and track their daily fitness activities for points</p>
          <p>Step 4: At the end of the challenge, the teams with the most points get the prize pool donated to their charity/organization</p>            
          <a href="/img/PDFs/Scoring System - Kilter Rewards Cause Challenges.pdf" class="mb-5 causeintrobutton btn-get-started scrollto">See the Scoring System</a>
        `,
        "who_helping":`
          <h4>Who You're Helping</h4>
          <p><b>Your Charity:</b> Choose any cause your team wants to compete for (recommendation: get feedback from your team on a cause you can all get behind!)</p>
          <p><b>Yourselves:</b> Build healthier habits for yourself and your teammates</p>
          <p><b>Your Company:</b> If you participate as part of a company, you'll be building stronger peer-to-peer relationships and increase employee satisfaction. See our impact report <a href="#">here</a></p>
        `,
        "has_sponsor":true,
        "sponsor_description":"sponsor information here",
        "sponsor_logo":"",
        "sponsor_link":"",
        "number_teams":5,
        "flyer_link":"/img/PDFs/Kilter Rewards Fall Cause Challenge.pdf",
        "entry_fee":400,
        "firstpercent":50,
        "secondpercent":20,
        "thirdpercent":10
    },
    {
      "page_url_name":"kiltersummer2019",
      "challenge_status": "Live",
      "can_register":true,
      "large_bg":"https://images.unsplash.com/photo-1462717585237-7fafe19c5448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
      "smaller_photo":"img/kilter/kilterrunning.jpg",
      "name": "Kilter Rewards Springer Challenge 2",
      "thumbnail_url": "https://images.unsplash.com/photo-1462717585237-7fafe19c5448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
      "category_tag": "Corporate",
      "start_date": "June 15, 2019",
      "end_date": "July 15, 2019",
      "id": 3,
      "name": "Kilter Rewards Summer Cause Challenge",
      "box_description":"Join us for the kilter rewards summer challenge",
      "description": "<div>\nJoin us for the Kilter Rewards Summer Cause Challenge!</br>\n<br>\n<b>Start Date:</b> June 15, 2019<br>\n<b>End Date:</b> July 31, 2019<br>\n<b>Team Sizes:</b> 15-50<br>\n<b>Entry Fee:</b> $400<br><i>($200 goes to donation prize pool)</i><br>\n<br>\n$2800 Donation Prize Pool<br>\n<b>GRAND PRIZE:</b> $1400<br> \n2nd Place: $700<br>\n3rd Place: $350<br>\n4th Place: $210<br>\n5th Place: $140<br>  \n<br>\n<b>14/20</b> Teams Registered\n</div>",
      "start": "2019-06-15T05:00:00Z",
      "end": "2019-07-31T23:59:59Z",
      "prize_pool":10000,
      "what_teams_do":`
        <h4>What Teams Do</h4>
        <p>Step 1: Register your team here</p>
        <p>Step 2: Choose a Cause to Compete For</p>
        <p>Step 3: Members join their teams on the Kilter Rewards App and track their daily fitness activities for points</p>
        <p>Step 4: At the end of the challenge, the teams with the most points get the prize pool donated to their charity/organization</p>            
        <a href="/img/PDFs/Scoring System - Kilter Rewards Cause Challenges.pdf" class="mb-5 causeintrobutton btn-get-started scrollto">See the Scoring System</a>
      `,
      "who_helping":`
        <h4>Who You're Helping</h4>
        <p><b>Your Charity:</b> Choose any cause your team wants to compete for (recommendation: get feedback from your team on a cause you can all get behind!)</p>
        <p><b>Yourselves:</b> Build healthier habits for yourself and your teammates</p>
        <p><b>Your Company:</b> If you participate as part of a company, you'll be building stronger peer-to-peer relationships and increase employee satisfaction. See our impact report <a href="#">here</a></p>
      `,
      "has_sponsor":true,
      "sponsor_description":"sponsor information here",
      "sponsor_logo":"",
      "sponsor_link":"",
      "number_teams":5,
      "flyer_link":"/img/PDFs/Kilter Rewards Fall Cause Challenge.pdf",
      "entry_fee":400,
      "firstpercent":50,
      "secondpercent":20,
      "thirdpercent":10
    },
    {
      "page_url_name":"kilterfall2019",
      "challenge_status": "Past",
      "can_register":true,
      "large_bg":"https://images.unsplash.com/photo-1462717585237-7fafe19c5448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
      "smaller_photo":"img/kilter/kilterrunning.jpg",
      "name": "Kilter Rewards Springer Challenge 2",
      "thumbnail_url": "https://images.unsplash.com/photo-1462717585237-7fafe19c5448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
      "category_tag": "Corporate",
      "start_date": "June 15, 2019",
      "end_date": "July 15, 2019",
      "id": 3,
      "name": "Kilter Rewards Summer Cause Challenge",
      "box_description":"Join us for the kilter rewards summer challenge",
      "description": "<div>\nJoin us for the Kilter Rewards Summer Cause Challenge!</br>\n<br>\n<b>Start Date:</b> June 15, 2019<br>\n<b>End Date:</b> July 31, 2019<br>\n<b>Team Sizes:</b> 15-50<br>\n<b>Entry Fee:</b> $400<br><i>($200 goes to donation prize pool)</i><br>\n<br>\n$2800 Donation Prize Pool<br>\n<b>GRAND PRIZE:</b> $1400<br> \n2nd Place: $700<br>\n3rd Place: $350<br>\n4th Place: $210<br>\n5th Place: $140<br>  \n<br>\n<b>14/20</b> Teams Registered\n</div>",
      "start": "2019-06-15T05:00:00Z",
      "end": "2019-07-31T23:59:59Z",
      "prize_pool":10000,
      "what_teams_do":`
        <h4>What Teams Do</h4>
        <p>Step 1: Register your team here</p>
        <p>Step 2: Choose a Cause to Compete For</p>
        <p>Step 3: Members join their teams on the Kilter Rewards App and track their daily fitness activities for points</p>
        <p>Step 4: At the end of the challenge, the teams with the most points get the prize pool donated to their charity/organization</p>            
        <a href="/img/PDFs/Scoring System - Kilter Rewards Cause Challenges.pdf" class="mb-5 causeintrobutton btn-get-started scrollto">See the Scoring System</a>
      `,
      "who_helping":`
        <h4>Who You're Helping</h4>
        <p><b>Your Charity:</b> Choose any cause your team wants to compete for (recommendation: get feedback from your team on a cause you can all get behind!)</p>
        <p><b>Yourselves:</b> Build healthier habits for yourself and your teammates</p>
        <p><b>Your Company:</b> If you participate as part of a company, you'll be building stronger peer-to-peer relationships and increase employee satisfaction. See our impact report <a href="#">here</a></p>
      `,
      "has_sponsor":true,
      "sponsor_description":"sponsor information here",
      "sponsor_logo":"",
      "sponsor_link":"",
      "number_teams":5,
      "flyer_link":"/img/PDFs/Kilter Rewards Fall Cause Challenge.pdf",
      "entry_fee":400,
      "firstpercent":50,
      "secondpercent":20,
      "thirdpercent":10
    }
]

request('https://apienterprise.kilterrewards.com/challenges/get/teamChallenges', function(err, res, body) {  
    module.exports.apidata = body;
});

module.exports.dataarray = dataarray;

