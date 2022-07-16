$(document).ready(function() {
    $('body').append(`
        <footer>
             <p title="回到頂部">Copyright <span>&copy</span> 2022 Steve Chan. All rights reserved</p>
        </footer>
    `);

    $('footer').on('click', function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
})