var fs = require('fs')
const kilterget = require('./kilterget')
let dataarray = kilterget.dataarray

// Register or leader board buttons
let registerorleaderboard = new Array()
for (let i = 0; i < dataarray.length; i++) {
  if (dataarray[i].challenge_status === "Upcoming") {
    registerorleaderboard[i] = "Register"
  } else {
    registerorleaderboard[i] = "View Leaderboard"
  }
}
// Sponsor Section



// Page Creation
let datapopulate = new Array(dataarray.length) 
for (let i = 0; i < dataarray.length; i++) {
  let sponsorInsertion = "<!-- No Sponsor Detected -->";
  if (dataarray[i].has_sponsor) {
    sponsorInsertion = `
    <!--Sponsors Section -->
          <section id="causeinfo" class="clearfix text-center">
              <div class="container-fluid infocontainer">
                <div class="row text-center justify-content-center">
                    <div class="col-md-6 text-center whatteamsdo">
                      <h4>Sponsors</h4>
                      <a href="${dataarray[i].sponsor_link}" class="scrollto"><img src="${dataarray[i].sponsor_link}" alt="Sponsor Logo" class="img-fluid"></a>
                      <p>${dataarray[i].sponsor_description}<p>
                    </div>
                </div>
              </div>
          </section>`
  }
  datapopulate[i] = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Kilter Rewards</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">
  
    <!-- Favicons -->
    <link rel="icon" type="image/png" href="img/kilter/favicon.png" />
  
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,500,600,700,700i|Montserrat:300,400,500,600,700" rel="stylesheet">
  
    <!-- Bootstrap CSS File -->
    <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  
    <!-- Libraries CSS Files -->
    <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/ionicons/css/ionicons.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">
  
    <!-- Main Stylesheet File -->
    <link href="css/style.css" rel="stylesheet">
  
  </head>
  
  <body>
      <!--==========================
    Header
    ============================-->
      <header id="header">
          <div id="topbar">
            <div class="container">
              <div class="social-links">
                <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
              </div>
            </div>
          </div>
      
          <div class="container">
      
            <div class="logo float-left">
              <!-- Uncomment below if you prefer to use an image logo -->
              <!-- <h1 class="text-light"><a href="#intro" class="scrollto"><span>Rapid</span></a></h1> -->
              <a href="#header" class="scrollto"><img src="img/kilter/kiltericontransparent.png" alt="" class="img-fluid"></a>
            </div>
      
            <nav class="main-nav float-right d-none d-lg-block">
              <ul>
                <li class="active cause-nav"><a href="index.html">Home</a></li>
                <li><a href="allchallenges.html">All Challenges</a></li>
                <li><a href="https://kilterstories.home.blog/">Stories</a></li>
                <li class="drop-down"><a href="">Login</a>
                  <ul>
                    <li><a href="kilterrewards.com/user/login.php">Users</a></li>
                    <li><a href="admin.kilterrewards.com">Administrators</a>
                  </ul>
                </li>
              </ul>
            </nav><!-- .main-nav -->
            
          </div>
      </header><!-- #header -->
  
      <!-- ==========================
      Cause Intro
    ============================-->
      <section id="causeintro" style="background-image:url(${dataarray[i].large_bg})" class="clearfix">
          <div class="lightoverlay causeheader text-center">
              <div class="causecontainer container-fluid">
                  <div class="row justify-content-center align-self-center text-center">
                      <div class="col-md-10 intro-info text-center">
                          <h2>${dataarray[i].name}</span></h2>
                          <hr class="challengebreak">
                        </div>
                  </div>
                  <div class="row justify-content-center align-self-center text-center">
                      <div class="col-md-11">
                          <p class="d-inline-block">${dataarray[i].start_date} - ${dataarray[i].end_date}</p>
                          <a href="#about" class="mt-5 causeintrobutton btn-get-started scrollto">${registerorleaderboard[i]}</a>
                      </div>
                  </div>
              </div>
          </div>
      </section> <!-- #intro --> 
  
      <!--==========================
      Challenge Information
    ============================-->
      <section id="causeinfo" class="clearfix text-center mt-5">
        <div class="container-fluid infocontainer mt-5">
          <div class="row">
            <div class="col-md-6 text-lg-left whatteamsdo">
                <h4>What the ${dataarray[i].name} Is</h4>
                <p>${dataarray[i].description}</p>
                <p>Start: ${dataarray[i].start_date} End: ${dataarray[i].end_date}</p>
                <div id="prizetickerarea">
                    <h3>Current Prize Pool: $<span class="poolnum counter">${dataarray[i].prize_pool}</span></h3>
                    <p>(<span class="counter teamnum">${dataarray[i].number_teams}</span> teams registered)</p>
                </div>
                <a href="${dataarray[i].flyer_link}" class="btn-get-started scrollto">See The Flyer</a>
              </div>
              <div class="col-md-5">
                  <img src="${dataarray[i].smaller_photo}" alt="" class="img-fluid">
              </div>
          </div>
        </div>
      </section>
  <!--==========================
        Call To Action Section
      ============================-->
      <section id="call-to-action" class="wow fadeInUp">
          <div class="container">
            <div class="row">
              <div class="col-lg-9 text-center text-lg-left">
                <h3 class="cta-title">Want to be a challenge team?</h3>
                <p class="cta-text">Don't wait. Helping others by helping yourself has never been a better reason to do something. Register now!</p>
              </div>
              <div class="col-lg-3 cta-btn-container text-center">
                <a class="cta-btn align-middle" href="#">${registerorleaderboard[i]}</a>
              </div>
            </div>
          </div>
      </section><!-- #call-to-action -->
  
      <section id="causeinfo" class="clearfix text-center">
          <div class="container-fluid infocontainer">
            <div class="row">
              <div class="col-md-6 text-lg-left mt-5 whatteamsdo">
                <h4>What Teams Do</h4>
                <p>Step 1: Register your team here</p>
                <p>Step 2: Choose a Cause to Compete For</p>
                <p>Step 3: Members join their teams on the Kilter Rewards App and track their daily fitness activities for points</p>
                <p>Step 4: At the end of the challenge, the teams with the most points get the prize pool donated to their charity/organization</p>            
                <a href="/img/PDFs/Scoring System - Kilter Rewards Cause Challenges.pdf" class="mb-5 causeintrobutton btn-get-started scrollto">See the Scoring System</a>
              </div>
              <div class="col-md-5 whiteinfoblock shadowbox payouts secondbox">
                  <h3>How to Win</h4>
                  ${dataarray[i].how_to_win}
              </div>
            </div>
            <div class="row text-center justify-content-center mt-5">
                <div class="col-md-6 text-center whatteamsdo">
                  <h4>Who You're Helping</h4>
                  <p><b>Your Charity:</b> Choose any cause your team wants to compete for (recommendation: get feedback from your team on a cause you can all get behind!)</p>
                  <p><b>Yourselves:</b> Build healthier habits for yourself and your teammates</p>
                  <p><b>Your Company:</b> If you participate as part of a company, you'll be building stronger peer-to-peer relationships and increase employee satisfaction. See our impact report <a href="#">here</a></p>
                  <img src="${dataarray[i].whopicture}" class="img-fluid">
                </div>
            </div>
          </div>
      </section>
      <!-- Sponsor Section Goes Here -->
      ${sponsorInsertion}
  
      <!--==========================
          Footer
      ============================-->
      <footer id="footer" class="section-bg">
      <div class="footer-top">
        <div class="container">

          <div class="row">

            <div class="col-lg-6">

              <div class="row">

                  <div class="col-sm-6">

                    <div class="footer-info">
                      <h3>Kilter</h3>
                      <p><i>noun</i> /kil-ter/ Proper or usual state or condition; order</p>
                    </div>

                    <div class="footer-newsletter">
                      <h4>Stay Updated</h4>
                      <p>Subscribe to Stay Updated on all things Kilter Rewards!</p>
                      <a href="https://kilterrewards.us14.list-manage.com/subscribe/post?u=46da8260014731cf9e4fa097e&amp;id=1bf5209ef9" class="btn-get-started scrollto">Subscribe</a>
                    </div>

                  </div>

                  <div class="col-sm-6">
                    <div class="footer-links">
                      <h4>Useful Links</h4>
                      <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="termsandservices.html">Terms of service</a></li>
                        <li><a href="/img/PDFs/privacy-policy.pdf">Privacy policy</a></li>
                        <li><a href="/img/PDFs/KilterEmployeeOptions.pdf">Employers</a></li>
                      </ul>
                    </div>

                    <div class="footer-links">
                      <h4>Contact Us</h4>
                      <p>
                        <strong>Email:</strong> friends@kilterrewards.com<br>
                      </p>
                    </div>

                    <div class="social-links">
                      <a href="https://www.facebook.com/kilterrewards/" class="facebook"><i class="fa fa-facebook"></i></a>
                      <a href="https://www.instagram.com/kilter_rewards/?hl=en" class="instagram"><i class="fa fa-instagram"></i></a>
                      <a href="https://www.linkedin.com/company/kilter-llc/" class="linkedin"><i class="fa fa-linkedin"></i></a>
                    </div>

                  </div>

              </div>

            </div>

            <div class="col-lg-6">
              <div class="form"> 
                <h4>Send us a message</h4>
                <p>Interested in working with us? Send a message below or directly to friends@kilterrewards.com</p>
                <form action="https://formspree.io/friends@kilterrewards.com" method="POST" role="form" class="contactForm">
                  <div class="form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div class="validation"></div>
                  </div>
                  <div class="form-group">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div class="validation"></div>
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div class="validation"></div>
                  </div>
                  <div class="form-group">
                    <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                    <div class="validation"></div>
                  </div>
                  <div id="sendmessage">Your message has been sent. Thank you!</div>
                  <div id="errormessage"></div>
                  <div class="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer><!-- #footer -->
  
      <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
      <!-- Uncomment below i you want to use a preloader -->
      <!-- <div id="preloader"></div> -->
  
      <!-- JavaScript Libraries -->
      <script src="lib/jquery/jquery.min.js"></script>
      <script src="lib/jquery/jquery-migrate.min.js"></script>
      <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="lib/easing/easing.min.js"></script>
      <script src="lib/mobile-nav/mobile-nav.js"></script>
      <script src="lib/wow/wow.min.js"></script>
      <script src="lib/waypoints/waypoints.min.js"></script>
      <script src="lib/counterup/counterup.min.js"></script>
      <script src="lib/owlcarousel/owl.carousel.min.js"></script>
      <script src="lib/isotope/isotope.pkgd.min.js"></script>
      <script src="lib/lightbox/js/lightbox.min.js"></script>
      <!-- Contact Form JavaScript File -->
      <script src="contactform/contactform.js"></script>
  
      <!-- Template Main Javascript File -->
      <script src="js/main.js"></script>
  
  </body>
  </html>
    `
}

let fileNames = new Array(dataarray.length)
for (var i = 0; i < dataarray.length; i++) {
    fileNames[i] = dataarray[i].page_url_name + ".html";
}

for (var i = 0; i < dataarray.length; i++) {
    fs.writeFile('../' + fileNames[i], datapopulate[i], (err) => {
        if (err) throw err;
        console.log('Page Created');
      });
}