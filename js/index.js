

$(document).ready(function() {

    let y;
    let contentBoxes = document.querySelectorAll('.contentBox .content .box');
    let contentBoxY= [];

    $(contentBoxes).each((index, value) => {
        contentBoxY.push(value.offsetTop);
    })

    // console.log(contentBoxY);
    
    let contact_contact = document.querySelectorAll('.contactBox .contact');
    let contact_title = document.querySelectorAll('.contactBox .title');

    

    


    $(window).on('scroll', function() {
            y = scrollY + window.innerHeight;

            $('header').toggleClass('black', y > 110 + window.innerHeight);
        
            for(let i = 0; i < contentBoxes.length; i++) {
                $(contentBoxes[i]).toggleClass('fade_in', y > contentBoxY[i]);
            }

            $(contact_contact).toggleClass('fade_in', y > $(contact_contact).offset().top - 100);
            $(contact_title).toggleClass('fade_in', y > $(contact_contact).offset().top - 100);


    })

    
})