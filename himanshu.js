document.addEventListener('DOMContentLoaded', function () {
    const typewriterText = 'Video Editor';
    let i = 0;
    let isDeleting = false;
    const speed = 100;
    const delay = 1000;

    function typeWriter() {
        const display = document.getElementById('typewriter');

        if (isDeleting) {
            display.innerHTML = typewriterText.substring(0, i--);
            if (i < 0) {
                isDeleting = false;
                setTimeout(typeWriter, delay);
                return;
            }
        } else {
            display.innerHTML = typewriterText.substring(0, i++);
            if (i > typewriterText.length) {
                isDeleting = true;
                setTimeout(typeWriter, delay);
                return;
            }
        }

        setTimeout(typeWriter, speed);
    }

    typeWriter();


    let menuIcon = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menuIcon.onclick = () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    };

    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 100);

        sections.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    document
                        .querySelector("header nav a[href*=" + id + "]")
                        .classList.add("active");
                });
            }
        });

        navLinks.forEach((link) => {
            link.onclick = () => {
                menuIcon.classList.remove("bx-x");
                navbar.classList.remove("active");
            };
        });
    };
});
const videoPlayers = document.querySelectorAll('.video-player');

videoPlayers.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play();
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset to the beginning when mouse leaves
    });
});