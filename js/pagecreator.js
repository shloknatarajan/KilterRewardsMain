var fs = require('fs')
const kilterget = require('./kilterget')
let dataarray = kilterget.dataarray

// Page Creation
let datapopulate = new Array(dataarray.length) 
for (let i = 0; i < dataarray.length; i++) {
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
    <link rel="icon" type="image/png" href="img/kilter/kiltericon_vXC_icon.ico" />
    <link href="img/apple-touch-icon.png" rel="apple-touch-icon">
  
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
                <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
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
                          <a href="#about" class="mt-5 causeintrobutton btn-get-started scrollto">Register</a>
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
                <h4>What ${dataarray[i].name} Is</h4>
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
                <p class="cta-text">$${dataarray[i].entry_fee} Entry Fee (%50 Goes to Charity Guaranteed!)</p>
              </div>
              <div class="col-lg-3 cta-btn-container text-center">
                <a class="cta-btn align-middle" href="#">Register</a>
              </div>
            </div>
          </div>
      </section><!-- #call-to-action -->
  
      <section id="causeinfo" class="clearfix text-center">
          <div class="container-fluid infocontainer">
            <div class="row">
              <div class="col-md-6 text-lg-left mt-5 whatteamsdo">
                ${dataarray[i].what_teams_do}
              </div>
              <div class="col-md-5 whiteinfoblock shadowbox payouts secondbox">
                  <h3>Donation Payouts</h4>
                  <h4>1st Place: ${dataarray[i].firstpercent}% of the Prize pool <br>(Current: $<span class="counter">${dataarray[i].firstpercent * dataarray[i].prize_pool / 100}</span>)</h4>
                  <h4>1st Place: ${dataarray[i].secondpercent}% of the Prize pool <br>(Current: $<span class="counter">${dataarray[i].secondpercent * dataarray[i].prize_pool / 100}</span>)</h4>
                  <h4>1st Place: ${dataarray[i].thirdpercent}% of the Prize pool <br>(Current: $<span class="counter">${dataarray[i].thirdpercent * dataarray[i].prize_pool / 100}</span>)</h4>
                  <br>
                  <p>Earn points for your team by completing daily fitness goals. If you're team finishes top 3, we donate a portion of the prize pool to your team's cause!</p>
              </div>
            </div>
            <div class="row text-center justify-content-center mt-5">
                <div class="col-md-6 text-center whatteamsdo">
                  ${dataarray[i].who_helping}
                </div>
            </div>
          </div>
  
      </section>
  
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
                          <p><i>noun</i> /kil-ter/ Proper or usual state or condition</p>
                          </div>
                          <div class="footer-newsletter">
                          <h4>Stay Updated</h4>
                          <p>Subscribe to Stay Updated on all things Kilter Rewards!</p>
                          <form action="" method="post">
                              <input type="email" name="email"><input type="submit"  value="Subscribe">
                          </form>
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="footer-links">
                          <h4>Useful Links</h4>
                          <ul>
                              <li><a href="index.html">Home</a></li>
                              <li><a href="#">About us</a></li>
                              <li><a href="#">Services</a></li>
                              <li><a href="termsandservices.html">Terms of service</a></li>
                              <li><a href="#">Privacy policy</a></li>
                          </ul>
                          </div>
                          <div class="footer-links">
                          <h4>Contact Us</h4>
                          <p>
                              Techwood Drive <br>
                              Atlanta, GA<br>
                              United States <br>
                              <strong>Phone:</strong> +1 5589 55488 55<br>
                              <strong>Email:</strong> seth@kilterrewards.com<br>
                          </p>
                          </div>
  
                          <div class="social-links">
                          <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                          <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                          <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                          <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                          </div>
  
                      </div>
  
                  </div>
  
                  </div>
  
                  <div class="col-lg-6">
  
                  <div class="form">
                      
                      <h4>Send us a message</h4>
                      <p>Eos ipsa est voluptates. Nostrum nam libero ipsa vero. Debitis quasi sit eaque numquam similique commodi harum aut temporibus.</p>
                      <form action="" method="post" role="form" class="contactForm">
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