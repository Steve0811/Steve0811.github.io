

$(document).ready(function() {

    let y;
    let contentBoxes = document.querySelectorAll('.contentBox .content .box');
    let contentBoxY= [];

    $(contentBoxes).each((index, value) => {
        contentBoxY.push(value.offsetTop);
    })

    // console.log(contentBoxY);

    let moreBoxTitle = document.querySelectorAll('.contentBox .moreBoxTitle');
    let moreBox = document.querySelectorAll('.contentBox .moreBox');


    let serviceBoxTitle = document.querySelectorAll('.contentBox .serviceBoxTitle');
    let serviceBox = document.querySelectorAll('.contentBox .serviceBox');
    
    let contact_contact = document.querySelectorAll('.contactBox .contact');
    let contact_title = document.querySelectorAll('.contactBox .title');

    

    


    $(window).on('scroll', function() {
            y = scrollY + window.innerHeight;

            $('header').toggleClass('black', y > 110 + window.innerHeight);
        
            for(let i = 0; i < contentBoxes.length; i++) {
                $(contentBoxes[i]).toggleClass('fade_in', y > contentBoxY[i]);
            }

            
            $(moreBoxTitle).toggleClass('fade_in', y > $(moreBoxTitle).offset().top - 100);
            $(moreBox).toggleClass('fade_in', y > $(moreBoxTitle).offset().top - 100);


            $(serviceBoxTitle).toggleClass('fade_in', y > $(serviceBoxTitle).offset().top - 100);
            $(serviceBox).toggleClass('fade_in', y > $(serviceBoxTitle).offset().top - 100);

            $(contact_contact).toggleClass('fade_in', y > $(contact_contact).offset().top - 100);
            $(contact_title).toggleClass('fade_in', y > $(contact_contact).offset().top - 100);


    })

    //////////

    $('.playBtn').on('click', function() {
        let banner = $('.banner');
        window.scrollTo({
            top: banner.outerHeight() - 50,
            behavior: "smooth"
        })
    })

    
})