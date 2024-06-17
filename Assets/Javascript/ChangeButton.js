function navigation(page) {
    window.location.href = page;
}

function colorButton (){

    const buttons = {
        'index.html': document.querySelector('#buttonHome'),
        'pages/About.html': document.querySelector('#buttonAbout'),
        'pages/Book.html': document.querySelector('#buttonBook'),
        'pages/Menu.html': document.querySelector('#buttonMenu'),
        'pages/Contact.html': document.querySelector('#buttonContact'),
        'pages/Blog.html': document.querySelector('#buttonBlog'),
        'pages/The_details.html': document.querySelector('#buttonBlog')
    }

    const page = selectPag.split('/').pop();

    if(buttons[page]){
        buttons[page].cssText = 'backgroundColor: #DBDFD0; borderRadius: 35px; padding: 6px 14px'
    }
};

window.onload = colorButton;