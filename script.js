document.addEventListener('DOMContentLoaded', function () {
    // ****** Nav
    // Mobile Nav
    var MobNav = $('.navbar-toggler');
    MobNav.on('click', function () {
        $('.navbar-toggler .btn-menu').toggleClass('d-none');
        $('.nav-mobile').toggleClass('nav-mobile-active');
    });

    var ClickMenu = $('.nav-mobile ul li');
    ClickMenu.on('click', function() {
        $('.navbar-toggler .btn-menu').toggleClass('d-none');
        $('.nav-mobile').toggleClass('nav-mobile-active');
    })

    // ****** Pour transition fluide vers les links


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            const targetSelector = this.getAttribute('href');
            const target = document.querySelector(targetSelector);
    
            if (!target) return;
    
            // ---- Marges en fonction du viewport
            let offset;
    
            if (window.innerWidth < 768) {
                offset = 108;          // < 768px
            } else if (window.innerWidth < 1220) {
                offset = 128;          // 768–1219px
            } else {
                offset = 160;          // ≥ 1220px
            }
    
            // ---- Position de scroll = position de l'élément - offset
            const targetTop = target.getBoundingClientRect().top + window.scrollY;
    
            window.scrollTo({
                top: targetTop - offset,
                behavior: 'smooth'
            });
        });
    });
});