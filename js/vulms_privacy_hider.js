console.log("Vulms Privacy Hider");

$('.h2').css({
    'color': '#fff',
    'background-color': '#000',
    "border": "2px solid #0cf",
    "border-radius": "5px",
    "padding": "5px 10px"
});
$('.h2').text('Follow the Track and Trend');

$('.m-topbar__nav-wrapper ul:first-child img').attr('src', 'https://you.com/proxy?url=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.m07dEpAUZwRzOaicee1BqAHaHa%26w%3D690%26c%3D7%26pid%3DApi%26p%3D0');
$('.m-topbar__nav-wrapper ul:last-child img').attr('src', 'https://you.com/proxy?url=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.7E2C7ttSrb4d0ih1PYar0QHaHa%26w%3D690%26c%3D7%26pid%3DApi%26p%3D0');

$('.m-brand__logo img:first-child').attr('src', 'https://www.nicepng.com/png/detail/90-908050_right-click-to-free-download-this-logo-of.png');
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

$('.m-topbar .m-topbar__nav.m-nav > .m-nav__item > span.m-nav__link-text').html('BLOCKCHAIN GUY <br>(0x8002fx960)')
$('.m-card-user.m-card-user--skin-dark .m-card-user__details .m-card-user__name').text('BLOCKCHAIN GUY')
$('.m-card-user.m-card-user--skin-dark .m-card-user__details .m-card-user__email').text('Core Blockchain Dev')

$('img.m-widget19__img').attr('src', 'https://seeklogo.com/images/B/blockchain-logo-A0FE252BA6-seeklogo.com.png');