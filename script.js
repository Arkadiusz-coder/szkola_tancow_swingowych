window.onscroll = function() {
    toggleNavbarPosition();
  }; 

const lowerNavbar = document.getElementById('nav_category');

const sticky = lowerNavbar.offsetTop;

function toggleNavbarPosition() {
    if (window.scrollY >=sticky) 
    {
        lowerNavbar.classList.add("sticky")
    }
    else
    {
        lowerNavbar.classList.remove("sticky");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize default settings
    const defaultLang = 'pl';
    const defaultSection = 'home';
    changeLanguage(defaultLang);
    showSection(defaultSection);
    
    // Load dark mode preference if set
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('darkmode');
    }
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

function changeLanguage(lang) {
    // Hide all language versions
    document.querySelectorAll('.content').forEach(function(content) {
        content.style.display = 'none';
    });
    document.querySelectorAll('.footer-content').forEach(function(content) {
        content.style.display = 'none';
    });

    // Show the selected language version
    document.querySelectorAll(`.${lang}`).forEach(function(content) {
        content.style.display = 'block';
    });

    // Save language preference
    localStorage.setItem('language', lang);
}

function toggleDarkMode() {
    document.body.classList.toggle('darkmode');
    // Save dark mode preference
    const isDarkModeEnabled = document.body.classList.contains('darkmode');
    localStorage.setItem('darkMode', isDarkModeEnabled ? 'enabled' : 'disabled');
}

function updateNavAndFooter() {
    const currentLang = localStorage.getItem('language') || 'pl';
    document.querySelectorAll('.nav_el').forEach(function(navItem, index) {
        navItem.textContent = currentLang === 'pl' ? ['Swing', 'Aktualności'][index] : ['Home', 'News'][index];
    });
    const footerText = currentLang === 'pl' ? 'Footer in Polish' : 'Footer in English';
    document.querySelector('footer').textContent = footerText;
}



/*
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(function(section) {
        section.style.display = 'none';
    });

    document.querySelectorAll('.nav_button a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();  // Prevent default action
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    showSection('home');
}


document.addEventListener('DOMContentLoaded', function() {
    // Function to switch language
    window.changeLanguage = function(lang) {
        if (lang === 'pl') {
            // Hide English content and show Polish content
            document.querySelectorAll('.lang_en').forEach(function(el) {
                el.style.display = 'none';
            });
            document.querySelectorAll('.lang_pl').forEach(function(el) {
                el.style.display = 'block';
            });
        } else if (lang === 'eng') {
            // Hide Polish content and show English content
            document.querySelectorAll('.lang_pl').forEach(function(el) {
                el.style.display = 'none';
            });
            document.querySelectorAll('.lang_en').forEach(function(el) {
                el.style.display = 'block';
            });
        }
    };

}); 

document.addEventListener('DOMContentLoaded', function() {
    // Object containing language data for translation
    const langData = {
        pl: {
            news: 'Aktualności',
            schedule: 'Harmonogram',
            registration: 'Zapisy',
            prices: 'Cennik',
            contact: 'Kontakt',
            terms: 'Regulamin',
            privacy: 'Polityka prywatności'
        },
        eng: {
            news: 'News',
            schedule: 'Schedule',
            registration: 'Registration',
            prices: 'Prices',
            contact: 'Contact',
            terms: 'Terms',
            privacy: 'Privacy policy'
        }
    };

    // Function to switch language
    window.changeLanguage = function(lang) {
        // Toggle visibility of language-specific content sections
        document.querySelectorAll('.lang_pl').forEach(function(el) {
            el.style.display = (lang === 'pl') ? 'block' : 'none';
        });
        document.querySelectorAll('.lang_en').forEach(function(el) {
            el.style.display = (lang === 'eng') ? 'block' : 'none';
        });

        // Check if the selected language is in langData
        if (langData[lang]) {
            // Update texts for navbar items and footer links
            const elementsToUpdate = [
                { id: '#news', property: 'news' },
                { id: '#schedule', property: 'schedule' },
                { id: '#registration', property: 'registration' },
                { id: '#prices', property: 'prices' },
                { id: '#contact', property: 'contact' },
                { id: '#terms', property: 'terms' },
                { id: '#privacy', property: 'privacy' }
            ];
            
            elementsToUpdate.forEach(function(element) {
                const el = document.querySelector(element.id + ' a');
                if (el) {
                    el.textContent = langData[lang][element.property];
                }
            });
        }
    };

    // Set initial language based on your preference
    changeLanguage('pl'); // or 'eng'
});


/*
function changeLanguage(lang)
{
    const langData = {
        pl: 
        {
           news: 'Aktualności',
           schedule: 'Harmonogram',
           registration: 'Zapisy',
           prices: 'Cennik',
           contact: 'Kontakt',
           terms: 'Regulamin',
           privacy: 'Polityka prywatności'
        },
        eng:
        {
           news: 'News',
           schedule: 'Schedule',
           registration: 'Registration',
           prices: 'Prices',
           contact: 'Contact',
           terms: 'Terms',
           privacy: 'Privacy policy'
        }
    };

    const labels = langData[lang];

    Object.keys(labels).forEach(key => 
        {
            const element = document.getElementById(key);
            element.querySelector('a').textContent = labels[key];
        });
    
    if (lang === "pl")
    {
        document.querySelectorAll('.pl').forEach(el => el.style.display = 'block');
        document.querySelectorAll('.eng').forEach(el => el.style.display = 'none'); 
    }    
    else if (lang === 'eng')
    {
        document.querySelectorAll('.pl').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.eng').forEach(el => el.style.display = 'block'); 
    }

    localStorage.setItem('preferredLanguage', lang);

}

if (setLanguage)
{
    changeLanguage(setLanguage);
}


document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    const bodyElement = document.body;
    const darkModeClass = 'darkmode';

    // Function to update the dark mode setting
    function updateDarkMode(isDarkMode) {
        if (isDarkMode) {
            bodyElement.classList.add(darkModeClass);
            localStorage.setItem('darkMode', 'enabled');
        } else {
            bodyElement.classList.remove(darkModeClass);
            localStorage.setItem('darkMode', 'disabled');
        }
    }

    // Function to load and apply the dark mode setting from Local Storage
    function loadAndApplyDarkMode() {
        const userPreference = localStorage.getItem('darkMode');
        const isDarkModeEnabled = (userPreference === 'enabled');
        updateDarkMode(isDarkModeEnabled);
    }

    // Event listener for the dark mode toggle
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            const isDarkModeEnabled = bodyElement.classList.contains(darkModeClass);
            updateDarkMode(!isDarkModeEnabled);
        });
    }

    // Load and apply the dark mode setting when the page loads
    loadAndApplyDarkMode();
});



/*
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

const enableDarkMode = () =>
{
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () =>
{
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled")
{
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled")
    {
        enableDarkMode();
    }
    else
    {
        disableDarkMode();
    }
});

/*
const initialDarkMode = localStorage.getItem("darkMode");
if (initialDarkMode === "enabled") {
    enableDarkMode();
}

//cookie
/*
// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to enable dark mode and set the cookie
function enableDarkMode() {
    document.body.classList.add("darkmode");
    setCookie("darkMode", "enabled", 30); // "darkMode" is the cookie name, "enabled" is the value, and 30 is the expiration in days
}
// Function to get the value of a cookie
function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

// Function to check if dark mode is enabled from the cookie
function checkDarkModeCookie() {
    const darkModeCookie = getCookie("darkMode");
    if (darkModeCookie === "enabled") {
        document.body.classList.add("darkmode");
    }
}

// Call this function on page load to check for the dark mode cookie
checkDarkModeCookie();    
*/
