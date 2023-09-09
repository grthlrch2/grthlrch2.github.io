// Email encryption -----------------------------------------------------------------
/* Email obfuscator script 2.1 by Tim Williams, University of Arizona
   Random encryption key feature coded by Andrew Moulden
   This code is freeware provided these four comment lines remain intact
   A wizard to generate this code is at http://www.jottings.com/obfuscator/ */
coded = "AKj5@kpPLR7Pp.FR"
key = "NFJvx0KLozjCOhZpaHqlsieY5m28SRM9IDE76APXT3gB14wcUbudntQWfykVGr"
shift=coded.length
encryptEmail=""
for (i=0; i<coded.length; i++) {
if (key.indexOf(coded.charAt(i))==-1) {
    ltr = coded.charAt(i)
    encryptEmail += (ltr)
}
else {     
    ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
    encryptEmail += (key.charAt(ltr))
}
}

// Link nofollow -----------------------------------------------------------------
const anchorElements = document.querySelectorAll('a');
anchorElements.forEach(anchor => {
    anchor.setAttribute('rel', 'nofollow');
});


// Links -----------------------------------------------------------------

var home = "https://www.grethler.ch/index.html"
var about = "https://www.grethler.ch/about/index.html"
var certs = "https://www.grethler.ch/certifications/index.html"
var blog = "https://blog.grethler.ch/"
var projects = "https://projects.grethler.ch/"

// Navbar -----------------------------------------------------------------
var headerContent = `
<div class="u-clearfix u-sheet u-sheet-1">
    <nav class="u-align-left u-menu u-menu-hamburger u-offcanvas u-menu-1 u-enable-responsive" data-responsive-from="XL">
    <div class="menu-collapse">
        <a class="u-button-style u-nav-link" href="#" style="padding: 4px 0px; font-size: calc(1em + 8px);">
        <svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 302 302" style=""><use xlink:href="#svg-5c50"></use></svg>
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="svg-5c50" x="0px" y="0px" viewBox="0 0 302 302" style="enable-background:new 0 0 302 302;" xml:space="preserve" class="u-svg-content"><g><rect y="36" width="302" height="30"></rect><rect y="236" width="302" height="30"></rect><rect y="136" width="302" height="30"></rect>
    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
    </a>
    </div>
    <div class="u-custom-menu u-nav-container">
        <ul class="u-nav u-unstyled u-nav-1">
        </li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base active" href="${home}" style="padding: 10px 20px;">Home</a>
        </li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base active" href="${blog}" style="padding: 10px 20px;">Blog</a>
        </li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base active" href="${projects}" style="padding: 10px 20px;">Projects</a>
        </li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base active" href="${certs}" style="padding: 10px 20px;">Certifications</a>
        </li><li class="u-nav-item"><a class="u-button-style u-nav-link" href=mailto:${encryptEmail}>Contact</a><noscript>Sorry, you need Javascript on to email me.</noscript>
        </li><li>------------------------
        </li><li class="u-nav-item"><a class="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base active" href="${about}" style="padding: 10px 20px;">About</a>
        </li></ul>
    </div>
    <div class="u-custom-menu u-nav-container-collapse">
        <div class="u-align-center u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
            <div class="u-inner-container-layout u-sidenav-overflow">
                <div class="u-menu-close"></div>
                <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                </li><li class="u-nav-item"><a class="u-button-style u-nav-link active" href="${home}">Home</a>   
                </li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="${blog}">Blog</a>           
                </li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="${projects}">Projects</a>    
                </li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="${certs}">Certifications</a>
                </li><li class="u-nav-item"><a class="u-button-style u-nav-link" href=mailto:${encryptEmail}>Contact</a><noscript>Sorry, you need Javascript on to email me.</noscript>
                </li><li>------------------------
                </li><li class="u-nav-item"><a class="u-button-style u-nav-link active" href="${about}">About</a>
                </li></ul>
            </div>
        </div>
        <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
    </div>
    <style class="offcanvas-style">            .u-offcanvas .u-sidenav { flex-basis: 250px !important; }            .u-offcanvas:not(.u-menu-open-right) .u-sidenav { margin-left: -250px; }            .u-offcanvas.u-menu-open-right .u-sidenav { margin-right: -250px; }            @keyframes menu-shift-left    { from { left: 0;        } to { left: 250px;  } }            @keyframes menu-unshift-left  { from { left: 250px;  } to { left: 0;        } }            @keyframes menu-shift-right   { from { right: 0;       } to { right: 250px; } }            @keyframes menu-unshift-right { from { right: 250px; } to { right: 0;       } }            </style></nav>
</div>
`;


document.addEventListener("DOMContentLoaded", function () {
    var headerElement = document.getElementById("sec-bdfa");
    headerElement.innerHTML = headerContent;
});
