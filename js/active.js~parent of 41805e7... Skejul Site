(function($) {
    'use strict';




    jQuery(document).ready(function (e) {

        if (e.fn.owlCarousel) {
            //StartUpOne Home slider
            e('.StartUpOne .homeSlider').owlCarousel({
                items: 1,
                dots: true,
                autoplay: true,
                autoplayTimeout: 8000,
                loop: true,
                smartSpeed: 1000,
                autoplayHoverPause: true
            });
        }

        if (e.fn.owlCarousel) {
            //StartUpOne Home slider
            e('.StartUpOne .homeSlider').owlCarousel({
                items: 1,
                dots: true,
                autoplay: true,
                autoplayTimeout: 8000,
                loop: true,
                smartSpeed: 1000,
                autoplayHoverPause: true
            });
        }

        if (e.fn.owlCarousel) {
            //CorporateOne Home slider
            var HslideOne = e('.CorporateOne .homeSlider');
            HslideOne.owlCarousel({
                items: 1,
                nav: true,
                autoplay: true,
                autoplayTimeout: 8000,
                loop: true,
                smartSpeed: 100,
                autoplayHoverPause: true
            });

            HslideOne.on('translated.owl.carousel', function () {
                e(this).find('.owl-item.active .singleHomeSlide  > *').addClass('slideInRight animated').css('opacity','1');
            });
            HslideOne.on('translate.owl.carousel', function () {
                e(this).find('.owl-item .singleHomeSlide > *').removeClass('slideInRight animated').css('opacity','0');
            });
        }

        if (e.fn.owlCarousel) {
            //CorporateFour Home slider

            var homeSliderFour = e('.CorporateFour .homeSlider');

            homeSliderFour.owlCarousel({
                items: 1,
                nav: true,
                autoplay: true,
                autoplayTimeout: 8000,
                loop: true,
                smartSpeed: 100,
                navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
                autoplayHoverPause: true
            });

            // singleSlide min-height

            var singleHomeSlideFour = e('.CorporateFour .homeSlider .singleHomeSlide');
            var sHslideFourHei = singleHomeSlideFour.height();
            singleHomeSlideFour.css('min-height', sHslideFourHei);


            homeSliderFour.on('translated.owl.carousel', function () {
                e(this).find('.owl-item.active .singleHomeSlide  > *').addClass('slideInRight animated').show();
            });
            homeSliderFour.on('translate.owl.carousel', function () {
                e(this).find('.owl-item .singleHomeSlide > *').removeClass('slideInRight animated').hide();
            });
        }



        if ($.fn.owlCarousel) {
            // CorporateFive slider

            e('.CorporateFive .itemBg').css("display", "none");


            var slider = e(".CorporateFive .homeSlider");
            slider.on('initialized.owl.carousel', function (x) {
                idx = x.item.index;
                e('.CorporateFive .owl-item').eq(idx).addClass('middle');
                e('.CorporateFive .owl-item').eq(idx + 1).addClass('next');
                e('.CorporateFive .owl-item').eq(idx - 1).addClass('prev');
                imgChange();
            });

            slider.owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                autoplayTimeout: 8000,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                autoplay: false,
                smartSpeed: 1000,
                autoplayHoverPause: true,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut'
            });
            var idx;
            slider.on('translated.owl.carousel', function (x) {
                idx = x.item.index;
                e('.CorporateFive .owl-item.middle').removeClass('middle');
                e('.CorporateFive .owl-item').eq(idx).addClass('middle');

                e('.CorporateFive .owl-item.next').removeClass('next');
                e('.CorporateFive .owl-item').eq(idx + 1).addClass('next');

                e('.CorporateFive .owl-item.prev').removeClass('prev');
                e('.CorporateFive .owl-item').eq(idx - 1).addClass('prev');
                imgChange();
            });

            slider.on('translated.owl.carousel', function () {
                e(this).find('.owl-item.active .singleHomeSlide  .slideContent> *').addClass('slideInRight animated').show();
            });
            slider.on('translate.owl.carousel', function () {
                e(this).find('.owl-item .singleHomeSlide .slideContent> *').removeClass('slideInRight animated').hide();
            });
            imgChange();
       }

       function imgChange() {
           var activeImg = e('.heroArea.CorporateFive .owl-item.middle img.itemBg').attr('src');
           var nextImg = e('.heroArea.CorporateFive .owl-item.next img.itemBg').attr('src');
           var prevImg = e('.heroArea.CorporateFive .owl-item.prev img.itemBg').attr('src');
           var owlPrev = e('.heroArea.CorporateFive .owl-nav div.owl-prev');
           var owlNext = e('.heroArea.CorporateFive .owl-nav div.owl-next');
           var homeSliderBg = e('.heroArea.CorporateFive .homeSlider .middle .singleHomeSlide');
           var homeSliderPrevBg = e('.heroArea.CorporateFive .homeSlider .prev .singleHomeSlide');
           var homeSliderNextBg = e('.heroArea.CorporateFive .homeSlider .next .singleHomeSlide');

           owlNext.css({
               backgroundImage: 'url(' + nextImg + ')',
               backgroundSize: 'cover',
               backgroundPosition: 'left center'
           });
           owlPrev.css({
               backgroundImage: 'url(' + prevImg + ')',
               backgroundSize: 'cover',
               backgroundPosition: 'left center'
           });
           homeSliderBg.css({
               backgroundImage: 'url(' + activeImg + ')',
               backgroundSize: 'cover',
               backgroundPosition: 'center'
           });
           homeSliderPrevBg.css({
               backgroundImage: 'url(' + prevImg + ')',
               backgroundSize: 'cover',
               backgroundPosition: 'center'
           });
           homeSliderNextBg.css({
               backgroundImage: 'url(' + nextImg + ')',
               backgroundSize: 'cover',
               backgroundPosition: 'center'
           });

       }

        if (e.fn.owlCarousel) {
            //CorporateSix Home slider
            var homeSliderSix = e('.CorporateSix .homeSlider');
            homeSliderSix.owlCarousel({
                items: 1,
                autoplay: true,
                autoplayTimeout: 7000,
                loop: true,
                smartSpeed: 1000,
                dots: true,
                autoplayHoverPause: true,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut'
            });

            homeSliderSix.on('translated.owl.carousel', function () {
                e(this).find('.owl-item.active .singleHomeSlide  .slideInner> *').addClass('slideInRight animated').show();
            });
            homeSliderSix.on('translate.owl.carousel', function () {
                e(this).find('.owl-item .singleHomeSlide .slideInner> *').removeClass('slideInRight animated').hide();
            });

        }

        // hero area 100% height
        var windowWidth = e(window).width();
        var heroHeight = e(window).height();
        e('.heroArea.CorporateSix').css('height', heroHeight);

        if (windowWidth < 768) {
            e('.searchSpan input').attr('value', '');
        }

        //home padding for StartUpOne
        var header1 = e('.StartUpOne header').height();
        var homeHeight1 = (heroHeight - header1);
        var homeArea1 = e('.StartUpOne .homeArea').height();
        var paddingHomeArea1 = (homeHeight1 - homeArea1) / 2;
        e('.StartUpOne .homeArea').css({
            paddingTop: paddingHomeArea1 -40 + 'px',
            paddingBottom: paddingHomeArea1 + 40 + 'px'
        });

        //home padding for StartUpOne

        var hH = e('.StartUpTwo header').height();

        var header2 = ( windowWidth < 768 ) ? (hH + 40) : (hH + 30);

        var homeHeight2 = (heroHeight - header2);
        var homeArea2 = e('.StartUpTwo .homeContent').height();
        var paddingHomeArea2 = (homeHeight2 - homeArea2) / 2;
        e('.StartUpTwo .homeArea').css({
            paddingTop: paddingHomeArea2 + 'px',
            paddingBottom: paddingHomeArea2 + 'px'
        });

        //home padding for FitnessOne
        var fH = e('.FitnessOne header').height();
        var header3 = ( windowWidth < 992 ) ? (fH + 25) : (fH + 65);
        var homeHeight3 = (heroHeight - header3);
        var homeArea3 = e('.FitnessOne .homeContent').height();
        var paddingHomeArea3 = (homeHeight3 - homeArea3) / 2;
        e('.FitnessOne .homeArea').css({
            paddingTop: paddingHomeArea3 + 'px',
            paddingBottom: paddingHomeArea3 + 'px'
        });

        //home padding for CorporateOne
        var header4 = e('.CorporateOne header').height() + 45;
        var homeHeight4 = (heroHeight - header4);
        var homeArea4 = e('.CorporateOne .homeSlider').height();
        var paddingHomeArea4 = (homeHeight4 - homeArea4) / 2;
        e('.CorporateOne .homeSlider').css({
            paddingTop: paddingHomeArea4 + 'px',
            paddingBottom: paddingHomeArea4 + 'px'
        });
        // home img height
        e('.CorporateOne .homeImg').css({
            height: heroHeight - 150 + 'px'
        });

        //home padding for CorporateTwo
        var header5 = e('.CorporateTwo header').height();
        var homeHeight5 = (heroHeight - header5);
        var homeArea5 = e('.CorporateTwo .homeArea').height();
        var paddingHomeArea5 = (homeHeight5 - homeArea5) / 2;
        e('.CorporateTwo .homeArea').css({
            paddingTop: paddingHomeArea5 + 'px',
            paddingBottom: paddingHomeArea5 + 'px'
        });

        //home padding for CorporateThree
        var header6 = e('.CorporateThree header').height() + 30;
        var homeHeight6 = (heroHeight - header6);
        var homeArea6 = e('.CorporateThree .homeArea').height();
        var paddingHomeArea6 = (homeHeight6 - homeArea6) / 2;
        e('.CorporateThree .homeArea').css({
            paddingTop: paddingHomeArea6 + 'px',
            paddingBottom: paddingHomeArea6 + 'px'
        });
        // home img height
        e('.CorporateThree .homeImg').css({
            height: heroHeight - 120 + 'px'
        });

        //home padding for CorporateFour
        var header7 = e('.CorporateFour header').height();
        var homeHeight7 = (heroHeight - header7);
        var homeArea7 = e('.CorporateFour .homeArea').height();
        var paddingHomeArea7 = (homeHeight7 - homeArea7) / 2;
        e('.CorporateFour .homeArea').css({
            paddingTop: paddingHomeArea7 + 'px',
            paddingBottom: paddingHomeArea7 + 'px'
        });

        //home padding for CorporateFive
        var header9 = e('.CorporateFive header').height();
        e('.CorporateFive .singleHomeSlide').css({
            'height': heroHeight,
            'padding-top': header9
        });



        e(' .searchBox form i').on('click', function () {
            e('.searchBox').removeClass('active');
        });


        // search box startUpOne
        e('.StartUpOne .searchIcon').on('click',function () {
            e('.StartUpOne .searchBox').toggleClass('active');
            e('.StartUpOne .navbar-collapse').removeClass('in');
        });

        e('.StartUpOne .navbar-toggle').on('click',function () {
            e('.StartUpOne .searchBox').removeClass('active');
        });

        // search box FitnessOne
        e('.FitnessOne .searchIcon').on('click',function () {
            e('.FitnessOne .searchBox').toggleClass('active');
            e('.FitnessOne .navbar-collapse').removeClass('in');
        });

        e('.FitnessOne .navbar-toggle').on('click',function () {
            e('.FitnessOne .searchBox').removeClass('active');
        });

        // search box CorporateOne
        e('.CorporateOne .searchIcon').on('click',function () {
            e('.CorporateOne .searchBox').toggleClass('active');
            e('.CorporateOne .navbar-collapse').removeClass('in');
        });

        e('.CorporateOne .navbar-toggle').on('click',function () {
            e('.CorporateOne .searchBox').removeClass('active');
        });

        // search box CorporateTwo
        e('.CorporateTwo .searchIcon').on('click',function () {
            e('.CorporateTwo .searchBox').toggleClass('active');
            e('.CorporateTwo .navbar-collapse').removeClass('in');
        });

        e('.CorporateTwo .navbar-toggle').on('click',function () {
            e('.CorporateTwo .searchBox').removeClass('active');
        });

        // search box CorporateThree
        e('.CorporateThree .searchIcon').on('click',function () {
            e('.CorporateThree .searchBox').toggleClass('active');
            e('.CorporateThree .navbar-collapse').removeClass('in');
        });

        e('.CorporateThree .navbar-toggle').on('click',function () {
            e('.CorporateThree .searchBox').removeClass('active');
        });

        // search box CorporateFour
        e('.CorporateFour .searchIcon').on('click',function () {
            e('.CorporateFour .searchBox').toggleClass('active');
            e('.CorporateFour .navbar-collapse').removeClass('in');
        });

        e('.CorporateFour .navbar-toggle').on('click',function () {
            e('.CorporateFour .searchBox').removeClass('active');
        });

        // search box CorporateFive
        e('.CorporateFive .searchIcon').on('click',function () {
            e('.CorporateFive .searchBox').toggleClass('active');
            e('.CorporateFive .navbar-collapse').removeClass('in');
        });

        e('.CorporateFive .navbar-toggle').on('click',function () {
            e('.CorporateFive .searchBox').removeClass('active');
        });

        // search box CorporateSix
        e('.CorporateSix .searchIcon').on('click',function () {
            e('.CorporateSix .searchBox').toggleClass('active');
            e('.CorporateSix .navbar-collapse').removeClass('in');
        });

        e('.CorporateSix .navbar-toggle').on('click',function () {
            e('.CorporateSix .searchBox').removeClass('active');
        });


        //***** ***** about page js ***** *****

        //    fitnessBtn

        var FitnessBtnOne = e('.FitnessOne .homeBtn a.viewClass');
        var FitnessBtnTwo = e('.FitnessOne .homeBtn a.learnMore');
        FitnessBtnTwo.hover(function () {
            FitnessBtnOne.addClass('active');
        });
        FitnessBtnTwo.mouseleave(function () {
            FitnessBtnOne.removeClass('active');
        });



        if (e.fn.circleProgress) {


            var fill = $('.single-about.Four').length ? "#f9bf3b" : "#f9bf3b";
            var emFill = $('.single-about.Four').length ? "#f7f7f7" : "#f7f7f7";

            if (windowWidth < 480) {
                e('.aboutArea.CorporateOne .skill').circleProgress({
                    size: 100,
                    thickness: 15,
                    fill: {
                        color: fill
                    },
                    emptyFill: emFill
                }).on('circle-animation-progress', function (event, progress, stepValue) {

                    e(this).find('strong').text(String(stepValue.toFixed(2) + '%').substr(2));
                });
            } else if (windowWidth < 992) {
                e('.aboutArea.CorporateOne .skill').circleProgress({
                    size: 120,
                    thickness: 15,
                    fill: {
                        color: fill
                    },
                    emptyFill: emFill
                }).on('circle-animation-progress', function (event, progress, stepValue) {

                    e(this).find('strong').text(String(stepValue.toFixed(2) + '%').substr(2));
                });
            } else {
                e('.aboutArea.CorporateOne .skill').circleProgress({
                    size: 170,
                    thickness: 20,
                    fill: {
                        color: fill
                    },
                    emptyFill: emFill
                }).on('circle-animation-progress', function (event, progress, stepValue) {

                    e(this).find('strong').text(String(stepValue.toFixed(2) + '%').substr(2));
                });
            }
        }

        if (e.fn.barfiller) {
            e('.aboutArea.CorporateTwo .skillOne').barfiller();
            e('.aboutArea.CorporateTwo .skillTwo').barfiller();
            e('.aboutArea.CorporateTwo .skillThree').barfiller();
            e('.aboutArea.CorporateTwo .skillFour').barfiller();
        }

        var singleBar3H = e('.aboutArea.CorporateOne .col-md-3:last-child .singleSkill').height();
        var singleBar = e('.aboutArea.CorporateOne .singleSkill');
        singleBar.height(singleBar3H);


        //	StartUpOne

        jQuery(window).load(function () {
            var aboutOuterOne = e('.aboutArea.StartUpOne .aboutOuter').height();

            e('.aboutArea.StartUpOne .about_bg div').css({
                height: aboutOuterOne + 'px'
            });

            var aboutImgOne = e('.aboutArea.StartUpOne .about_bg div img');
            var aboutImgOneHeight = aboutImgOne.height();
            var aboutImgOnePDNG = (aboutOuterOne - aboutImgOneHeight) / 2;

            aboutImgOne.css({
                paddingTop: aboutImgOnePDNG + 'px',
                paddingBottom: aboutImgOnePDNG + 'px'
            });
        });

        // aboutContent padding for CorporateTwo


        if (windowWidth < 480) {
            var aboutOuterTwo = e('.aboutArea.CorporateTwo .aboutOuter').height();
            console.log(aboutOuterTwo);
            e('.aboutArea.CorporateTwo .about_bg').css({
                height: aboutOuterTwo + 'px',
            });
        }


        //aboutContent Padding for CorporateTwo

        if (windowWidth >= 991) {
            var visionHeight = e('.aboutArea.CorporateTwo .vision').height();
            var aboutContentHeight = e('.aboutArea.CorporateTwo .aboutContent').height();
            var aboutContentPDNG2 = (visionHeight - aboutContentHeight) / 2;

            e('.aboutArea.CorporateTwo .aboutContent').css({
                paddingTop: aboutContentPDNG2 + 'px',
                paddingBottom: aboutContentPDNG2 + 'px'
            });
        }

        //aboutBar Height CorporateTwo


        var wrap = e('.aboutArea.CorporateTwo .skillWrep');
        wrap.find('.barHeadding').each(function () {
            var hei = e(this).height();
            e(this).siblings('.barfillerWrep').height(hei);
        });



        //aboutContent Padding for CorporateThree

        var aboutLeftBgHeight = e('.aboutArea.CorporateThree .aboutLeftBg').height();
        var aboutContentHeight2 = e('.aboutArea.CorporateThree .aboutContent').height();
        var aboutContentPDNG = (aboutLeftBgHeight - aboutContentHeight2) / 2;

        e('.aboutArea.CorporateThree .aboutContent').css({
            paddingTop: aboutContentPDNG + 'px',
            paddingBottom: aboutContentPDNG + 'px'
        });


        // ***** ***** Serveice page js ***** *****

        e('.serviceArea.CorporateFour .serviceCol:nth-child(2n)').addClass('col-md-offset-4 right');
        e('.serviceArea.CorporateFour .serviceCol:nth-child(2n + 1)').addClass('left');

        var serviceHead = e('.serviceArea.CorporateTwo .singleService .serviceHead');
        var serviceHeadHei = serviceHead.height();
        var serviceHeadwid = serviceHead.width();
        var serviceTxtHei = e('.serviceArea.CorporateTwo .singleService p').height();
        var serviceHei = (serviceHeadHei + serviceTxtHei) + 120;
        var singleService = e('.serviceArea.CorporateTwo .singleService');

        singleService.css({
            minHeight: serviceHei + 'px'
        });

		e('.serviceArea.CorporateTwo .col-md-4:nth-child(2) .singleService').addClass('active');
		singleService.hover(function(){
			singleService.removeClass('active');
			e(this).addClass('active');
		});


		// corporate five

		var singleService5 = e('.serviceArea.CorporateFive  .col-md-4 .singleService');
		e('.serviceArea.CorporateFive .col-md-4:nth-child(2) .singleService').addClass('active');
		singleService5.hover(function(){
			singleService5.removeClass('active');
			e(this).addClass('active');
		});
        //priceArea

        e('.serviceArea.CorporateSix .col-md-4:first-child .singleService').addClass('active');
        e('.serviceArea.CorporateSix .col-md-4 .singleService').hover(function () {
            e('.serviceArea.CorporateSix .col-md-4 .singleService').removeClass('active');
            e(this).addClass('active');
        });



        //  CorporateSix


        e('.serviceArea.CorporateSix .serviceCol:nth-child(2n)').addClass('col-md-offset-4 right');
        e('.serviceArea.CorporateSix .serviceCol:nth-child(2n + 1)').addClass('left');



        // Testimonial Area Js

        //StartUpOne

        if (e.fn.owlCarousel) {
            var tstSliderOne = e('.testimonialArea.StartUpOne .tstSlider');
            tstSliderOne.owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 8000,
                dots: true,
                autoplayHoverPause: true
            });
            var tstSlideHeight = tstSliderOne.height();
            tstSliderOne.css({
                minHeight: tstSlideHeight + 'px'
            });

            tstSliderOne.on('translated.owl.carousel', function () {
                e(this).find('.owl-item.active .singleTstSlide  > *').addClass('bounceInRight animated').css('opacity', 1);
                e(this).find('.owl-item.active .singleTstSlide  .slideImg').removeClass('slideInRight animated').addClass('zoomInLeft animated').css('opacity', 1);
            });
            tstSliderOne.on('translate.owl.carousel', function () {
                e(this).find('.owl-item .singleTstSlide > *').removeClass('bounceInRight animated').css('opacity', 0);
                e(this).find('.owl-item .singleTstSlide > *').removeClass('zoomInLeft animated').css('opacity', 0);
            });

        }


        //StartUpTwo
        function changeDotSlideClass() {
            var currentDotSlide = e('.testimonialArea.StartUpTwo .tstDotSlider .singleTstDot.slick-current');
            currentDotSlide.next('div').addClass('currentPlusOne');
            e('.currentPlusOne').next('div').addClass('CurrentPlusTwo');
            currentDotSlide.prev('div').addClass('CurrentMinusOne');
            e('.CurrentMinusOne').prev('div').addClass('CurrentMinusTwo');
        }
        if (e.fn.slick) {
            var tstSliderTwo = e('.testimonialArea.StartUpTwo .tstSlider');
            var tstDotSliderTwo = e('.testimonialArea.StartUpTwo .tstDotSlider');
            tstSliderTwo.slick({
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: '.testimonialArea.StartUpTwo .tstDotSlider'
            });
            tstDotSliderTwo.slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
                arrows: false,
                asNavFor: '.testimonialArea.StartUpTwo .tstSlider',
                centerPadding: false
            });

            tstDotSliderTwo.on('beforeChange', function (event) {
                e('.testimonialArea.StartUpTwo .tstDotSlider .singleTstDot').removeClass('currentPlusOne CurrentPlusTwo CurrentMinusOne CurrentMinusTwo');
            });
            tstDotSliderTwo.on('afterChange', function (event) {
                e('.testimonialArea.StartUpTwo .tstDotSlider .singleTstDot').removeClass('currentPlusOne CurrentPlusTwo CurrentMinusOne CurrentMinusTwo');
                changeDotSlideClass();
            });

            changeDotSlideClass();

        }

        //	CorporateOne

        if (e.fn.owlCarousel) {

            var tstSliderThree = e('.testimonialArea.CorporateOne .tstSlider');
            tstSliderThree.owlCarousel({
                items: 1,
                loop: true,
                dots: true,
                autoplayTimeout: 8000,
                autoplay: true,
                autoplayHoverPause: true
            });

            tstSliderThree.on('translated.owl.carousel', function () {
                e(this).find('.owl-item.active .singleTstSlide  .tstImg').addClass('zoomIn animated').css('opacity', 1);
                e(this).find('.owl-item.active .singleTstSlide .tstTxt > *').addClass('slideInRight animated').css('opacity', 1);
            });
            tstSliderThree.on('translate.owl.carousel', function () {
                e(this).find('.owl-item .singleTstSlide .tstImg').removeClass('zoomIn animated').css('opacity', 0);
                e(this).find('.owl-item .singleTstSlide .tstTxt > *').removeClass('slideInRight animated').css('opacity', 0);
            });

        }

        //    CorporateTwo

        if (e.fn.owlCarousel) {
            var tstSliderFour = e('.testimonialArea.CorporateTwo .tstSlider');
            tstSliderFour.owlCarousel({
                items: 1,
                nav: true,
                autoplayTimeout: 8000,
                autoplay: true,
                loop: true,
                navText: ['<i class="fa fa-angle-left"><i/>', '<i class="fa fa-angle-right"><i/>'],
                autoplayHoverPause: true
            });

            tstSliderFour.on('translated.owl.carousel', function () {
                e(this).find('.owl-item.active .singleTstSlide > *').addClass('slideInRight animated').css('opacity', 1);
            });
            tstSliderFour.on('translate.owl.carousel', function () {
                e(this).find('.owl-item .singleTstSlide > *').removeClass('slideInRight animated').css('opacity', 0);
            });
        }


        //    CorporateThree

        if (e.fn.owlCarousel) {
            var tstSliderFive = e('.testimonialArea.CorporateThree .tstSlider');
            tstSliderFive.owlCarousel({
                items: 1,
                nav: true,
                autoplay: true,
                autoplayTimeout: 8000,
                loop: true,
                navText: ['<i class="fa fa-angle-left"><i/>', '<i class="fa fa-angle-right"><i/>'],
                autoplayHoverPause: true
            });

            tstSliderFive.on('translated.owl.carousel', function () {
                e(this).find('.owl-item.active .singleTstSlide > *').addClass('slideInRight animated').css('opacity', 1);
                e(this).find('.owl-item.active .singleTstSlide .tstTxt').removeClass('slideInRight').addClass('zoomIn').css('opacity', 1);
            });
            tstSliderFive.on('translate.owl.carousel', function () {
                e(this).find('.owl-item .singleTstSlide > *').removeClass('slideInRight animated zoomIn').css('opacity', 0);
            });
        }

        //    CorporateFour

        if (e.fn.owlCarousel) {
            var tstSliderSix = e('.testimonialArea.CorporateFour .tstSlider');
            tstSliderSix.owlCarousel({
                items: 1,
                loop: true,
                dots: true,
                autoplayTimeout: 8000,
                autoplay: true,
                autoplayHoverPause: true
            });

            tstSliderSix.on('translated.owl.carousel', function () {
                e(this).find('.owl-item.active .singleTstSlide > *').addClass('slideInRight animated').css('opacity', 1);
                e(this).find('.owl-item.active .singleTstSlide .tstTop').removeClass('slideInRight animated').addClass('slideInDown animated').css('opacity', 1);
            });
            tstSliderSix.on('translate.owl.carousel', function () {
                e(this).find('.owl-item .singleTstSlide > *').removeClass('slideInRight animated').css('opacity', 0);
                e(this).find('.owl-item .singleTstSlide .tstTop').removeClass('slideInDown animated').css('opacity', 0);
            });
        }



        //    CorporateSeven

        if (e.fn.owlCarousel) {
            var tstSliderSeven = e('.testimonialArea.CorporateSeven .tstSlider');
            tstSliderSeven.owlCarousel({
                items: 1,
                loop: true,
                dots: true,
                autoplay: true,
                autoplayTimeout: 8000,
                autoplayHoverPause: true
            });

            tstSliderSeven.on('translate.owl.carousel', function () {
                e(this).find('.owl-item .singleTstSlide .tstTxt').removeClass('bounceInDown animated').css('opacity', 0);
                e(this).find('.owl-item .singleTstSlide .tstImg').removeClass('slideInLeft animated').css('opacity', 0);
                e(this).find('.owl-item .singleTstSlide .clientsDesc').removeClass('slideInRight animated').css('opacity', 0);
            });
            tstSliderSeven.on('translated.owl.carousel', function () {
                e(this).find('.owl-item.active .singleTstSlide .tstTxt').addClass('bounceInDown animated').css('opacity', 1);
                e(this).find('.owl-item.active .singleTstSlide .tstImg').addClass('slideInLeft animated').css('opacity', 1);
                e(this).find('.owl-item.active .singleTstSlide .clientsDesc').addClass('slideInRight animated').css('opacity', 1);
            });
        }



        if (e.fn.magnificPopup) {

            //		all magnific item

            e('.mfgItem a').magnificPopup({
                type: 'image',
                mainClass: 'mfp-with-zoom',
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function (openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        }




        if (e.fn.slick) {
            var portSliderSeven = e('.portfolioArea.CorporateFour .portfolioSlider');
            portSliderSeven.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                        }
                      ]
            });
        }





        jQuery(window).load(function () {

            var portfolioFiveImg = e('.portfolioArea.CorporateFive .portfolioItem .singleItem img').height();
            var portfolioFiveHover = e('.portfolioArea.CorporateFive .portfolioItem .singleItem .hoverContent');
            portfolioFiveHover.height(portfolioFiveImg);

            var portfolioSixImg = e('.portfolioArea.CorporateSix .portfolioItem .singleItem img').height();
            var portfolioSixHover = e('.portfolioArea.CorporateSix .portfolioItem .singleItem .hoverContent');


            if (windowWidth > 991 && windowWidth < 1200) {
                portfolioSixHover.height(portfolioSixImg);
                portfolioSixHover.width(portfolioSixImg);
            } else {
                portfolioSixHover.height(portfolioSixImg - 40);
                portfolioSixHover.width(portfolioSixImg - 40);
            }



            if (e.fn.masonry) {
                e('.portfolioArea.StartUpTwo .portfolioItem').masonry({
                    // options...
                    itemSelector: '.portfolioArea.StartUpTwo .singleItem',
                    columnWidth: 0
                });
            }


            e('.portfolioArea.StartUpOne .portfolioItem .singleItem img').each(function () {
                var portOneH = e(this).height() - 80;
                var portOnew = e(this).width() - 80;
                e(this).siblings('.hoverContent').css({
                    height: portOneH + 'px',
                    width: portOnew + 'px'
                });
            });

            // Active isotope in container
            if (e.fn.isotope) {

                // fitnessOne Isotope
                jQuery('.fitGalleryMenu li').on('click',function () {

                    var fitnessGellary = jQuery(".portfolioArea.FitnessOne .fitnessGellary");

                    jQuery(".fitGalleryMenu li").removeClass("active");
                    jQuery(this).addClass("active");

                    var selector = jQuery(this).attr('data-filter');
                    fitnessGellary.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });

                // CorporateTwo Isotope
                jQuery('.portfolioArea.CorporateTwo .portfolioMenu li').on('click',function () {

                    var portfolioItemFive = jQuery(".portfolioArea.CorporateTwo .portfolioItem");

                    jQuery(".portfolioArea.CorporateTwo .portfolioMenu li").removeClass("active");
                    jQuery(this).addClass("active");

                    var selector = jQuery(this).attr('data-filter');
                    portfolioItemFive.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });

                // CorporateThree Isotope
                jQuery('.portfolioArea.CorporateThree .portfolioMenu li').on('click',function () {

                    var portfolioItemSix = jQuery(".portfolioArea.CorporateThree .portfolioItem");

                    jQuery(".portfolioArea.CorporateThree .portfolioMenu li").removeClass("active");
                    jQuery(this).addClass("active");

                    var selector = jQuery(this).attr('data-filter');
                    portfolioItemSix.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    return false;
                });

                //			fitnessOne isotope
                var fitnessGellary = jQuery(".portfolioArea.FitnessOne .fitnessGellary");
                fitnessGellary.isotope({
                    itemSelector: '.singleItem',
                    layoutMode: 'masonry'
                });

                //			CorporateTwo isotope
                var portfolioItemFive = jQuery(".portfolioArea.CorporateTwo .portfolioItem");
                portfolioItemFive.isotope({
                    itemSelector: '.singleItem',
                    layoutMode: 'fitRows'
                });


                //			CorporateThree isotope
                var portfolioItemFive3 = jQuery(".portfolioArea.CorporateThree .portfolioItem");
                portfolioItemFive3.isotope({
                    itemSelector: '.singleItem',
                    layoutMode: 'masonry'
                });

            }

        });


        //    team area


        var singleMemberImgThree = e('.teamArea.FitnessOne .singleMember'),
            singleMemberImgThreeHvr = singleMemberImgThree.find('.hoverContent');


        var sMiH = singleMemberImgThree.height();
        var sMiW = singleMemberImgThree.width();
        var singleMemberImgThreeH =  (windowWidth > 991 && windowWidth < 1201) ? sMiH : sMiH - 30;
        var singleMemberImgThreeW =  (windowWidth > 991 && windowWidth < 1201) ? sMiW : sMiW - 30;


        singleMemberImgThreeHvr.css({
            height: singleMemberImgThreeH + 'px',
            width: singleMemberImgThreeW + 'px'
        });



        //    corporateOne slider

        if (e.fn.owlCarousel) {
            var teamSliderThree = e('.teamArea.CorporateOne .teamSlider');
            teamSliderThree.owlCarousel({
                items: 4,
                loop: true,
                margin: 10,
                smartSpeed: 100,
                autoplay: true,
                responsive: {
                    991: {
                        items: 4
                    },
                    767: {
                        items: 3
                    },
                    0: {
                        items: 1
                    }
                }

            });
        }

        //	corporate two team slider

        if (e.fn.owlCarousel) {
            var teamSliderFive = e('.teamArea.CorporateTwo .teamSlider');
            teamSliderFive.owlCarousel({
                items: 3,
                loop: true,
                margin: 30,
                nav: true,
                navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                smartSpeed: 800,
                autoplay: true,
                responsive: {
                    991: {
                        items: 3
                    },
                    767: {
                        items: 2,
                        margin: 20
                    },
                    0: {
                        items: 1,
                        margin: 0
                    }
                }
            });
        }

        //	corporate three team slider

        if (e.fn.owlCarousel) {
            var teamSliderSix = e('.teamArea.CorporateThree .teamSlider');
            teamSliderSix.owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                navText: ['<i class="zmdi zmdi-long-arrow-left"></i>', '<i class="zmdi zmdi-long-arrow-right"></i>'],
                autoplay: true,
                animateOut: 'fadeOut',
                autoplayTimeout: 10000,
                smartSpeed: 10,
                autoplayHoverPause: true
            });

            teamSliderSix.on('translate.owl.carousel', function () {
                e(this).find('.owl-item .singleTeamSlide span').removeClass('slideInLeft animated').css('opacity', 0);
                e(this).find('.owl-item .singleTeamSlide .clientTxt').removeClass('slideInLeft animated').css('opacity', 0);
                e(this).find('.owl-item .singleTeamSlide .socialIcon').removeClass('slideInUp animated').css('opacity', 0);
                e(this).find('.owl-item .singleTeamSlide .clientImg').removeClass('slideInRight animated').css('opacity', 0);
                e(this).find('.owl-item .singleTeamSlide .clientDesc').css('background', 'transparent');
            });
            teamSliderSix.on('translated.owl.carousel', function () {
                e(this).find('.owl-item.active .singleTeamSlide span').addClass('slideInLeft animated').css('opacity', 1);
                e(this).find('.owl-item.active .singleTeamSlide .clientTxt').addClass('slideInLeft animated').css('opacity', 1);
                e(this).find('.owl-item.active .singleTeamSlide .socialIcon').addClass('slideInUp animated').css('opacity', 1);
                e(this).find('.owl-item.active .singleTeamSlide .clientImg').addClass('slideInRight animated').css('opacity', 1);
                e(this).find('.owl-item.active .singleTeamSlide .clientDesc').css('background', '#f4f3f3');
            });
        }

        var teamImaSix = e('.teamArea.CorporateThree  .clientImg').height(),
            clientSlideSix = e('.teamArea.CorporateThree .singleTeamSlide'),
            clientDescHSix = e('.teamArea.CorporateThree .clientDesc').height();

        var cD = (teamImaSix - clientDescHSix);
        var clientDescPdngSix =  (windowWidth < 992) ? (cD - 80) :(cD - 140);

        if (windowWidth > 767) {
            clientSlideSix.css({
                paddingTop: clientDescPdngSix + 'px'
            });
        }

        if (windowWidth > 991) {
            e('.teamArea.CorporateThree .owl-prev').css({
                marginTop: (clientDescPdngSix / 2) - 18.5 + 'px'
            });
            e('.teamArea.CorporateThree .owl-next').css({
                marginTop: (clientDescPdngSix / 2) - 18.5 + 'px'
            });
        }

        if (e.fn.owlCarousel) {
            var teamSliderSeven = e('.teamArea.CorporateFour .teamSlider');
            teamSliderSeven.owlCarousel({
                items: 3,
                loop: true,
                margin: 30,
                smartSpeed: 700,
                autoplay: false,
                autoplayTimeout: 5000,
                dots: true,
                responsive: {
                    992: {
                        items: 3
                    },
                    767: {
                        items: 2
                    },
                    0: {
                        items: 1
                    }
                }
            });
        }

        if (e.fn.owlCarousel) {
            var teamSliderEight = e('.teamArea.CorporateFive .teamSlider');

            teamSliderEight.owlCarousel({
                items: 5,
                loop: true,
                margin: 5,
                smartSpeed: 700,
                autoplay: false,
                autoplayTimeout: 5000,
                nav: true,
                responsive: {
                    992: {
                        items: 5
                    },
                    767: {
                        items: 3
                    },
                    0: {
                        items: 1
                    }
                }
            });
        }

        if (e.fn.owlCarousel) {
            var teamSliderNine = e('.teamArea.CorporateSix .teamSlider');
            teamSliderNine.owlCarousel({
                items: 3,
                loop: true,
                margin: 30,
                smartSpeed: 700,
                autoplay: true,
                autoplayTimeout: 5000,
                nav: true,
                navText: ['', ''],
                responsive: {
                    992: {
                        items: 3
                    },
                    767: {
                        items: 2
                    },
                    0: {
                        items: 1
                    }
                }
            });
        }


        //priceArea

        e('.priceArea.FitnessOne .priceCol:nth-child(2) .singlePrice').addClass('active');
        e('.priceArea.FitnessOne .priceCol .singlePrice').on('click',function () {
            e('.priceArea.FitnessOne .priceCol .singlePrice').removeClass('active');
            e(this).addClass('active');
        });

        e('.priceArea.CorporateOne .priceCol:nth-child(2) .singlePrice').addClass('active');
        e('.priceArea.CorporateOne .priceCol .singlePrice').hover(function () {
            e('.priceArea.CorporateOne .priceCol .singlePrice').removeClass('active');
            e(this).addClass('active');
        });

        e('.priceArea.CorporateTwo .priceCol:nth-child(2) .singlePrice').addClass('active');
        e('.priceArea.CorporateTwo .priceCol .singlePrice').on('click',function () {
            e('.priceArea.CorporateTwo .priceCol .singlePrice').removeClass('active');
            e(this).addClass('active');
        });

        e('.priceArea.CorporateThree .priceCol:nth-child(2) .singlePrice').addClass('active');
//        e('.priceArea.CorporateThree .priceCol .singlePrice').on('click',function () {
//            e('.priceArea.CorporateThree .priceCol .singlePrice').removeClass('active');
//            e(this).addClass('active');
//        });



        e('.blogArea.FitnessOne .post .col-md-12:nth-child(even) .singlePost').addClass('right');
        e('.blogArea.FitnessOne .post .col-md-12:nth-child(odd) .singlePost').addClass('left');

        var singlePostThreeH = e('.blogArea.FitnessOne .post .singlePost .postImg').height();
        e('.blogArea.FitnessOne .post .singlePost .postContent').height(singlePostThreeH);

        e('.blogArea.CorporateFive .post .col-md-6:nth-child(even)').addClass('right');
        e('.blogArea.CorporateFive .post .col-md-6:nth-child(odd)').addClass('left');
        e('.blogArea.CorporateSix .post .col-md-6:nth-child(even)').addClass('right');
        e('.blogArea.CorporateSix .post .col-md-6:nth-child(odd)').addClass('left');

        e('.brandArea.One .brandSlider').owlCarousel({
            items: 5,
            margin: 70,
            loop: true,
            autoplay: true,
            smartSpeed: 700,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2,
                    margin: 20
                },
                480: {
                    items: 3,
                    margin: 15
                },
                768: {
                    items: 4,
                    margin: 40
                },
                992: {
                    items: 5,
                    margin: 70
                }
            }
        });

        e('.brandArea.Two .brandSlider').owlCarousel({
            items: 5,
            margin: 80,
            loop: true,
            autoplay: false,
            smartSpeed: 700,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2,
                    margin: 20
                },
                480: {
                    items: 3,
                    margin: 15
                },
                768: {
                    items: 4,
                    margin: 40
                },
                992: {
                    items: 5,
                    margin: 80
                }
            }
        });

        e('.brandArea.Four .brandSlider').owlCarousel({
            items: 6,
            margin: 80,
            loop: true,
            autoplay: true,
            smartSpeed: 700,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2,
                    margin: 20
                },
                480: {
                    items: 3,
                    margin: 15
                },
                768: {
                    items: 5,
                    margin: 40
                },
                992: {
                    items: 6,
                    margin: 70
                }
            }
        });

        e('.brandArea.Five .brandSlider').owlCarousel({
            items: 5,
            margin: 100,
            loop: true,
            autoplay: false,
            smartSpeed: 700,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 2,
                    margin: 30
                },
                480: {
                    items: 3,
                    margin: 15
                },
                768: {
                    items: 4,
                    margin: 60
                },
                992: {
                    items: 5,
                    margin: 100
                }
            }
        });

        if (e.fn.counterUp) {
//            e('.counter').counterUp();
        }


        $('.videoBtn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false
        });


        // search box SingleAbout
        e('.singleHead .searchIcon').on('click',function () {
            e('.singleHead .searchBox').toggleClass('active');
            e('.singleHead .navbar-collapse').removeClass('in');
        });

        e('.singleHead .navbar-toggle').on('click',function () {
            e('.singleHead .searchBox').removeClass('active');
        });

        e("a[href='#']").on('click',function (e) {
            e.preventDefault();
        });

        if ($('.sub-menu').length) {
            e('.sub-menu').closest('li').addClass('subPar');
        }

        if (windowWidth < 992) {
            e('.subPar > a').on('click',function () {
                e(this).closest('.subPar').toggleClass('active');
            });
        }


        if (e.fn.slick) {

            e('.teamSliderTen').slick({
                prevArrow: '<span class="teamNav prev">prev &nbsp; <i class="fa fa-long-arrow-left"></i></span>',
                nextArrow: '<span class="teamNav next"><i class="fa fa-long-arrow-right"></i> &nbsp; next</span>',
                asNavFor: '.teamSliderElaven',
                slidesToShow: 1,
                slidesToScroll: 1,
            });


            e('.teamSliderElaven').slick({
                slidesToShow: 5,
                asNavFor: '.teamSliderTen',
                slidesToScroll: 1,
                focusOnSelect: true,
                variableWidth: true,
                prevArrow: '',
                nextArrow: ''
            });

            //speaker page slider (speaker slider 2 & 3)

            $('.teamSliderTwelve').slick({
                prevArrow: '<span class="teamNav prev">prev &nbsp; <i class="fa fa-long-arrow-left"></i></span>',
                nextArrow: '<span class="teamNav next"><i class="fa fa-long-arrow-right"></i> &nbsp; next</span>',
                asNavFor: '.teamSliderThirteen',
                slidesToShow: 1,
                slidesToScroll: 1,
            });


            $('.teamSliderThirteen').slick({
                prevArrow: '',
                nextArrow: '',
                slidesToShow: 6,
                asNavFor: '.teamSliderTwelve',
                slidesToScroll: 1,
                focusOnSelect: true,
                variableWidth: true,
            });

            $('.teamSliderTwelve').on('beforeChange', function (event) {
                e('.teamSliderTwelve .singleTeamSlide .single_speaker_img').removeClass('animated slideInLeft').css('opacity', '0');
                e('.teamSliderTwelve .singleTeamSlide .teamContent').removeClass('animated slideInRight').css('opacity', '0');
            });
            $('.teamSliderTwelve').on('afterChange', function (event) {
                e('.teamSliderTwelve .singleTeamSlide.slick-current .single_speaker_img').addClass('animated slideInLeft').css('opacity', '1');
                e('.teamSliderTwelve .singleTeamSlide.slick-current .teamContent').addClass('animated slideInRight').css('opacity', '1');
            });
        }


        var opt = {
            foreColor: '#464646',
            backColor: '#e4e4e4',
            numType: 'absolute',
            horBarHeight: 4
        };
        if (e.fn.barIndicator) {
            e('.teamBar').barIndicator(opt);
        }


        $('.PortfolioSlide14').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<i class="fa fa-angle-left arrow-prev"></i>',
            nextArrow: '<i class="fa fa-angle-right arrow-next"></i>',
            asNavFor: '.portfolioDotSlide15'
        });

        $('.portfolioDotSlide15').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<i class="fa fa-angle-left arrow-prev"></i>',
            nextArrow: '<i class="fa fa-angle-right arrow-next"></i>',
            asNavFor: '.PortfolioSlide14',
            focusOnSelect: true,
            variableWidth: true,
        });


        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('.topScrl').fadeIn();
            } else {
                $('.topScrl').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.topScrl').on('click',function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        //Click event to scroll to top
        $('.angleBtn a').on('click',function () {
            var bodyHeight = e('body').height();
            $('html, body').animate({
                scrollTop: bodyHeight
            }, 800);
            return false;
        });



        if (e.fn.owlCarousel) {
            e('.portfolioSlide16').owlCarousel({
                items: 5,
                margin: 60,
                nav: true,
                navText: ['<i class="fa fa-angle-left arrow-prev"></i>', '<i class="fa fa-angle-right arrow-next"></i>'],
                loop: true,
                responsive: {
                    1200: {
                        items: 5,
                        margin: 60,
                    },
                    992: {
                        items: 5,
                        margin: 30,
                    },
                    768: {
                        items: 5,
                        margin: 30,
                        nav: true
                    },
                    0: {
                        items: 4,
                        margin: 0,
                        nav: false
                    }
                }
            });
        }

        var ps17w = e('.portfolioSlide16 .owl-item').width();
        e('.portfolioSlide16 .owl-item').height(ps17w);


        if (e.fn.owlCarousel) {
            e('.portfolioSlide17').owlCarousel({
                items: 5,
                nav: true,
                navText: ['<i class="fa fa-angle-left arrow-prev"></i>', '<i class="fa fa-angle-right arrow-next"></i>'],
                loop: true,
                responsive: {
                    480: {
                        items: 5,
                        nav: true
                    },
                    0: {
                        items: 3,
                        nav: false
                    }
                }
            });
        }

        var ps16w = e('.portfolioSlide17 .owl-item').width();
        e('.portfolioSlide17 .owl-item').height(ps16w);

        var pTxtSixH = e('.single-portfolio.Six .portfolioTxt').height();
        e('.single-portfolio.Six .portfolioDtcWrep').height(pTxtSixH);
		
		
        if(e.fn.typed){
            $(function(){
                $(".element").typed({
                    strings: ["Awesome", "Creative", "Professional", "Fastest"],
                    typeSpeed: 200,
                    loop: true,
                });
            });
        }
        
		//preloader
		
        $('.preloaderArea').fadeOut('slow', function () {
            $(this).remove();
        });
        
        
    });



})(jQuery);

$(".counter").counterUp({
    delay: 10,
    time: 1000
})

$(function() {
    $(".typed").typed({
        strings: [
            "meeting",
            "date night",
            "gig",
            "vacation",
            "appointment",
        ],
        typeSpeed: 100,
        backSpeed: 110,
        backDelay: 1000,
        removalDelay: 9000,
        loop: true
    })
})

// Stops video from loading on mobile
$(
    function() {
      var bgv = $('#bgvid');
  
      if (bgv.is(':visible')) {
        $('source', bgv).each(
          function() {
            var el = $(this);
            el.attr('src', el.data('src'));
          }
        );
  
        bgv[0].load();
      }
    }
  )