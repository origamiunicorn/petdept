document.addEventListener('DOMContentLoaded', function () {

    const sidenavs = document.querySelectorAll('.sidenav')
    for (let i = 0; i < sidenavs.length; i++) {
        M.Sidenav.init(sidenavs[i]);
    }
    const dropdowns = document.querySelectorAll('.dropdown-trigger')
    for (let i = 0; i < dropdowns.length; i++) {
        M.Dropdown.init(dropdowns[i], { constrainWidth: false, coverTrigger: false });
    }
    const collapsibles = document.querySelectorAll('.collapsible')
    for (let i = 0; i < collapsibles.length; i++) {
        M.Collapsible.init(collapsibles[i]);
    }
    const modals = document.querySelectorAll('.modal')
    for (let i = 0; i < modals.length; i++) {
        M.Modal.init(modals[i]);
    }
    const parallax = document.querySelectorAll('.parallax')
    for (let i = 0; i < parallax.length; i++) {
        M.Parallax.init(parallax[i]);
    }
    const scrollspies = document.querySelectorAll('.scrollspy')
    for (let i = 0; i < scrollspies.length; i++) {
        M.ScrollSpy.init(scrollspies[i]);
    }
    const tooltips = document.querySelectorAll('.tooltipped')
    for (let i = 0; i < tooltips.length; i++) {
        M.Tooltip.init(tooltips[i]);
    }

    // Scroll To Top below

    const scrollUp = document.getElementById("scrollUp");

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollUp.style.display = "block";
        } else {
            scrollUp.style.display = "none";
        }
    };

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});

