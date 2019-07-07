const request = require('request');
var dataarray = [
    {
        "page_url_name":"kilterspring2019",
        "challenge_status": "Upcoming",
        "registration_link":"google.com",
        "can_register":true,
        "large_bg":"https://images.unsplash.com/photo-1462717585237-7fafe19c5448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        "smaller_photo":"img/kilter/kilterrunning.jpg",
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
        "sponsor_logo":"https://techspective.net/wp-content/uploads/2018/03/google_logo.gif.CROP_.original-original.gif",
        "sponsor_link":"google.com",
        "number_teams":5,
        "flyer_link":"/img/PDFs/Kilter Rewards Fall Cause Challenge.pdf",
        "entry_fee":400,
        "how_to_win":"how to win information"
    },
    {
      "page_url_name":"kiltersummer2019",
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
      "has_sponsor":false,
      "sponsor_description":"sponsor information here",
      "sponsor_logo":"",
      "sponsor_link":"",
      "number_teams":5,
      "flyer_link":"/img/PDFs/Kilter Rewards Fall Cause Challenge.pdf",
      "entry_fee":400,
      "how_to_win":"how to win information"

    },
    {
      "page_url_name":"kilterfall2019",
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
      "has_sponsor":false,
      "sponsor_description":"sponsor information here",
      "sponsor_logo":"",
      "sponsor_link":"",
      "number_teams":5,
      "flyer_link":"/img/PDFs/Kilter Rewards Fall Cause Challenge.pdf",
      "entry_fee":400,
      "how_to_win":"how to win information"

    }
]

request('https://apienterprise.kilterrewards.com/challenges/get/teamChallenges', function(err, res, body) {  
    module.exports.apidata = body;
    // let temp = JSON.parse(body)
    // console.log(temp[1].name)
});

module.exports.dataarray = dataarray;

