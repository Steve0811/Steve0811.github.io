$(document).ready(function() {
    $('body').append(`
        <footer>
             <p>Copyright <span>&copy</span> 2022 Steve Chan. All rights reserved</p>
        </footer>
    `);

    $('footer').on('click', function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
})