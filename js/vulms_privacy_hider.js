console.log("Vulms Privacy Hider");

$('.h2').css({
    'color': '#fff',
    'background-color': '#000',
    "border": "2px solid #0cf",
    "border-radius": "5px",
    "padding": "5px 10px"
});
$('.h2').text('Follow the Track and Trend');

$('.m-topbar__nav-wrapper ul:first-child img').attr('src', 'https://github.com/imgul/vulms-enhancer-browser-extension/blob/main/img/avatar.png?raw=true');
$('.m-topbar__nav-wrapper ul:last-child img').attr('src', 'https://github.com/imgul/vulms-enhancer-browser-extension/blob/main/img/avatar.png?raw=true');

$('.m-brand__logo img:first-child').attr('src', 'https://github.com/imgul/vulms-enhancer-browser-extension/blob/main/img/blockchain-logo.png?raw=true');
$('.m-brand__logo img:first-child').css({
    'width': '150px',
    'margin-top': '12px'
})
$('.m-brand__logo img:last-child').css({
    'display': 'none'
})


$('.m-stack .m-brand:first-child').addClass('m-brand--skin-light')
$('.m-stack .m-brand:first-child').removeClass('m-brand--skin-dark')
$('#m_aside_left > ul').css({
    'display': 'none'
})
$('.m-aside-menu ul.m-menu__nav').css({
    'padding-bottom': '0px'
})
$('#m_ver_menu').addClass('m-aside-menu--skin-light m-aside-menu--submenu-skin-light')
$('#m_ver_menu').removeClass('m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark')

// $('#m_ver_menu .m-menu__item.m-menu__item--submenu.current').addClass('current-new')
// $('#m_ver_menu .m-menu__item.m-menu__item--submenu.current').removeClass('current')

// $('#m_ver_menu .m-menu__item.m-menu__item--submenu.current').css({
//     'background': 'rgba(255, 127, 0, 0.8)'
// })

$('.m-topbar .m-topbar__nav.m-nav > .m-nav__item > span.m-nav__link-text').html('VIRTUAL STAR <br>(0x8002fx960)')
$('.m-card-user.m-card-user--skin-dark .m-card-user__details .m-card-user__name').text('VIRTUAL STAR')
$('.m-card-user.m-card-user--skin-dark .m-card-user__details .m-card-user__email').text('Passionate Student')

$('img.m-widget19__img').attr('src', 'https://github.com/imgul/vulms-enhancer-browser-extension/blob/main/img/blockchain-b-logo.png?raw=true');