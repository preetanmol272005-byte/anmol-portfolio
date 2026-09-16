/* =====================================================
   PROJECT DATA
===================================================== */

const projects = {

    /* =========================
       CAMPUSOS
    ========================= */

    campusos: {

        category: "MOBILE APP · CASE STUDY",

        title: "CampusOS",

        subtitle:
            "A unified digital experience designed to bring campus resources, events and student services into one simple platform.",

        role: "UI/UX Designer",

        type: "College + Company Project",

        year: "2026",

        tools: "Figma",

        hero: "images/campusos.png",

        screen1: "images/campusos.png",
        screen2: "images/campusos-screen2.png",
        screen3: "images/campusos-screen3.png",
        screen4: "images/campusos-screen4.png",
        screen5: "images/campusos-screen5.png",
        screen6: "images/campusos-screen6.png",

        overview:
            "CampusOS is a unified campus platform concept focused on making everyday student interactions simpler. The experience brings important campus resources, information and activities into one organized interface.",

        problemTitle:
            "Campus information can feel fragmented.",

        problem:
            "Students often need to move between different sources to find campus information, events and resources. The goal was to create a more connected and intuitive experience.",

        goal:
            "Create one clear digital space where students can quickly discover campus resources, stay updated and complete common tasks without unnecessary friction.",

        research: [
            {
                number: "01",
                title: "Information overload",
                text: "Important information should be organized into clear and understandable categories."
            },
            {
                number: "02",
                title: "Quick access",
                text: "Students should be able to reach frequently used resources with minimal interaction."
            },
            {
                number: "03",
                title: "Consistency",
                text: "A consistent design language helps the platform feel easier to understand and navigate."
            }
        ],

        reflection:
            "CampusOS taught me how important information architecture and hierarchy are when designing an experience with many different features.",

        next: "findash"
    },


    /* =========================
       FINDASH
    ========================= */

    findash: {

        category: "WEB APPLICATION · CASE STUDY",

        title: "Findash",

        subtitle:
            "A modern finance dashboard designed to help users understand spending, monitor finances and make better decisions.",

        role: "UI/UX Designer",

        type: "Web Application",

        year: "2026",

        tools: "Figma",

        hero: "images/findash.png",

        screen1: "images/findash.png",
        screen2: "images/findash-screen2.png",
        screen3: "images/findash-screen3.png",
        screen4: "images/findash-screen4.png",
        screen5: "images/findash-screen5.png",
        screen6: "images/findash-screen6.png",

        overview:
            "Findash is a finance dashboard concept that transforms complex financial information into a clear visual experience. The interface focuses on hierarchy, data visualization and easy navigation.",

        problemTitle:
            "Financial information can become overwhelming.",

        problem:
            "Users often see multiple numbers, charts and transactions at once. The challenge was to make financial information easier to scan and understand.",

        goal:
            "Design a focused financial dashboard that presents important information first while keeping deeper financial details easy to explore.",

        research: [
            {
                number: "01",
                title: "Clarity first",
                text: "Important financial information should be immediately visible without overwhelming the user."
            },
            {
                number: "02",
                title: "Visual hierarchy",
                text: "Size, spacing and contrast can guide users toward the most important information."
            },
            {
                number: "03",
                title: "Data visualization",
                text: "Charts should communicate financial patterns quickly rather than simply decorate the interface."
            }
        ],

        reflection:
            "Findash helped me understand how visual hierarchy and data visualization can work together to make complex information feel simple.",

        next: "shopping"
    },


    /* =========================
       SHOPPING APP
    ========================= */

    shopping: {

        category: "MOBILE APP · CASE STUDY",

        title: "Shopping App",

        subtitle:
            "A simple and seamless mobile shopping experience focused on discovery, personalization and effortless checkout.",

        role: "UI/UX Designer",

        type: "Mobile Application",

        year: "2026",

        tools: "Figma",

        hero: "images/shopping.png",

        screen1: "images/shopping.png",
        screen2: "images/shopping-screen2.png",
        screen3: "images/shopping-screen3.png",
        screen4: "images/shopping-screen4.png",
        screen5: "images/shopping-screen5.png",
        screen6: "images/shopping-screen6.png",

        overview:
            "The Shopping App concept explores a clean mobile commerce experience where users can discover products, explore categories and complete purchases with minimal friction.",

        problemTitle:
            "Shopping experiences can become cluttered.",

        problem:
            "Too many products, filters and promotional elements can make product discovery difficult. The design focuses on keeping the experience clean and easy to navigate.",

        goal:
            "Create a simple shopping journey that balances product discovery, useful information and a smooth purchasing experience.",

        research: [
            {
                number: "01",
                title: "Easy discovery",
                text: "Users should be able to browse products naturally without feeling overwhelmed."
            },
            {
                number: "02",
                title: "Product clarity",
                text: "Product imagery, pricing and key information should have a strong visual hierarchy."
            },
            {
                number: "03",
                title: "Simple checkout",
                text: "The final purchasing steps should feel predictable, focused and easy to complete."
            }
        ],

        reflection:
            "This project reinforced the importance of reducing unnecessary steps and keeping the shopping journey focused on the user's primary goal.",

        next: "campusos"
    }

};


/* =====================================================
   GET PROJECT FROM URL
===================================================== */

const params = new URLSearchParams(window.location.search);

let projectName = params.get("project");

if (!projects[projectName]) {

    projectName = "campusos";

}

const project = projects[projectName];


/* =====================================================
   HELPER
===================================================== */

function setText(id, value) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = value;
    }

}


/* =====================================================
   PROJECT CONTENT
===================================================== */

setText(
    "project-category",
    project.category
);

setText(
    "project-title",
    project.title
);

setText(
    "project-subtitle",
    project.subtitle
);

setText(
    "project-role",
    project.role
);

setText(
    "project-type",
    project.type
);

setText(
    "project-year",
    project.year
);

setText(
    "project-tools",
    project.tools
);

setText(
    "overview",
    project.overview
);

setText(
    "problem-title",
    project.problemTitle
);

setText(
    "problem",
    project.problem
);

setText(
    "goal",
    project.goal
);

setText(
    "reflection",
    project.reflection
);


/* =====================================================
   IMAGES
===================================================== */

function setImage(id, src) {

    const image = document.getElementById(id);

    if (!image) return;

    image.src = src;

    image.onerror = function () {

        this.parentElement.classList.add(
            "image-missing"
        );

        this.style.display = "none";

    };

}


setImage(
    "hero-image",
    project.hero
);

setImage(
    "screen-one",
    project.screen1
);

setImage(
    "screen-two",
    project.screen2
);

setImage(
    "screen-three",
    project.screen3
);

setImage(
    "screen-four",
    project.screen4
);

setImage(
    "screen-five",
    project.screen5
);

setImage(
    "screen-six",
    project.screen6
);

/* =====================================================
   RESEARCH CARDS
===================================================== */

const researchGrid =
    document.getElementById("research-grid");

researchGrid.innerHTML = "";

project.research.forEach(item => {

    const card =
        document.createElement("div");

    card.className =
        "research-card";

    card.innerHTML = `

        <span>${item.number}</span>

        <h3>${item.title}</h3>

        <p>${item.text}</p>

    `;

    researchGrid.appendChild(card);

});


/* =====================================================
   NEXT PROJECT
===================================================== */

const nextProject =
    projects[project.next];

if (nextProject) {

    setText(
        "next-project-category",
        nextProject.category
    );

    setText(
        "next-project-title",
        nextProject.title
    );

    document.getElementById(
        "next-project-link"
    ).href =
        `case-study.html?project=${project.next}`;

}


/* =====================================================
   PAGE TITLE
===================================================== */

document.title =
    `${project.title} — Case Study | Anmol`;


/* =====================================================
   CURSOR GLOW
===================================================== */

const cursorGlow =
    document.querySelector(".cursor-glow");

document.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

    }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   IMAGE PARALLAX
===================================================== */

const heroImage =
    document.querySelector(".hero-image-wrapper");

window.addEventListener(
    "scroll",
    () => {

        const scroll =
            window.scrollY;

        if (heroImage) {

            heroImage.style.transform =
                `translateY(${scroll * 0.025}px)`;

        }

    }
);