$(document).ready(function() {

    let href = window.location.pathname;

    console.log(href);

    if(href.indexOf('/music.html') !== -1) {
        $('body').prepend(`
        <header id="header">
            <h1 class="logo"><a href="./index.html" title="回到主頁">Steve Chan</a></h1>
            <ul class="menu">
                <li><a href="./music.html" class="active">music</a></li>
                <li><a href="./media.html">media</a></li>
            </ul>
        </header>
        `);
    }else if (href.indexOf('/media.html')  !== -1) {
        $('body').prepend(`
        <header id="header">
            <h1 class="logo"><a href="./index.html" title="回到主頁">Steve Chan</a></h1>
            <ul class="menu">
                <li><a href="./music.html">music</a></li>
                <li><a href="./media.html" class="active">media</a></li>
            </ul>
        </header>
        `);
    }else if(href.indexOf('/index.html')  !== -1){
        $('body').prepend(`
        <header id="header">
            <h1 class="logo"><a href="./index.html" title="回到主頁">Steve Chan</a></h1>
            <ul class="menu">
                <li><a href="./music.html">music</a></li>
                <li><a href="./media.html">media</a></li>
            </ul>
        </header>
        `);
    }

    
})

