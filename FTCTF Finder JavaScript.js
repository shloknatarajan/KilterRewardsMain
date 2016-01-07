$(document).ready(function(){
	var test = $("<p>test</p>");
	$('.Missouri').append("<h3>6127 iBots</h3><p>Wildwood , MO</p><p>Bio: Hello! We are a private team based in Wildwood, Missouri. and is made up of thirteen members who are extremely passionate about science, technology, engineering, and math. This website was created by us as part of our community outreach program. Thanks for stopping by!</p><p>Available For: Shadowing, Mentoring</p><h4>Contact Information</h4><p>stlwizftc@gmail.com</p><p></p><p>Facebook: Ftc IBots</p>");
});

causeRepaintsOn = $("h1, h2, h3, p");

$(window).resize(function() {
  causeRepaintsOn.css("z-index", 1);
});