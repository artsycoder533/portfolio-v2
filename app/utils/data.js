import omni from "../../public/images/omni.png";
import vohps from "../../public/images/vohps.jpg";
import atlas from "../../public/images/atlas.png";
import renewed from "../../public/images/renewed.png";
import shoes from "../../public/images/shoes.png";
import whatsNxt from "../../public/images/whats-nxt.png"


export const projects = [
    {
        title: "Whats Nxt", 
        tags: ["Freelance", "Sanity", "Stripe"],
        img: whatsNxt,
        description: "A custom e-commerce website built as a cheaper alternative to Shopify.  Products are queried from Sanity and payments and handled through Stripe.",
        technologies: "Next.js 14 App Router, Sanity, Groq, Stripe, Formspree, Typesript, and Tailwind",
        siteURL: "https://www.whatsnxt.org/",
        github: "https://github.com/artsycoder533/whats-nxt",
    },
    {
        title: "If The Shoe Fits", 
        tags: ["Shopify"],
        img: shoes,
        description: "An e-commerce store where shoe enthusiasts can shop for one of a kind sneakers and boots. Built with a custom front-end, products are queried from Shopify using Graphql.",
        technologies: "Next.js 14 App Router, Shopify, Graphql, Typesript, Formspree, and Tailwind",
        siteURL: "https://iftheshoefits.vercel.app/",
        github: "https://github.com/artsycoder533/if-the-shoe-fits",
    },
    {
        title: "ReNEWed Psychological and Consultation Services", 
        tags: ["Freelance", "Re-Brand"],
        img: renewed,
        description: "A multi-page static website for a mental health agency out of Suprise, AZ. They wanted to leave the Wix Platform, so I built a rebrand of their original website from scratch.",
        technologies: "Next.js 13.3 Pages Router, Netlify Forms and Tailwind",
        siteURL: "https://renewedpsychological.com/",
        github: "https://github.com/artsycoder533/renewed",
    },
    {
        title: "Omni Addiction & Mental Health Services", 
        tags: ["Freelance"],
        img: omni,
        description: "A single page static website for a local mental health agency out of Lawrenceville, VA. They needed a website to attract new clients as well as provide a way for them to schedule appointments online.",
        technologies: "Next.js 13.1 Pages Router, Tailwind, Framer Motion, Netlify Forms and React Calendly",
        siteURL: "https://omniamh.com/",
        github: "https://github.com/artsycoder533/omni",
    },
    
    {
        title: "Visions of Hope Psychological Services", 
        tags: ["Freelance", "Re-Brand"],
        img: vohps,
        description: "A single page static website for a local mental health agency out of Lawrenceville, VA. They needed a website to attract new clients as well as provide a way for them to schedule appointments online.",
        technologies: "Next.js 12.3, Styled Components, and Netlify Forms",
        siteURL: "https://visionsofhope-va.com/",
        github: "https://github.com/artsycoder533/vohps-next",
    },
    {
        title: "Atlaw Behaviorial Health + Wellness", 
        tags: ["Freelance"],
        img: atlas,
        description: "A single page static website for a local mental health agency out of Lawrenceville, VA. They needed a website to attract new clients as well as provide a way for them to schedule appointments online.",
        technologies: "HTMl, CSS, Vanilla Javascript and Netflify Forms",
        siteURL: "https://atlasbhw.com/",
        github: "https://github.com/artsycoder533/atlas-",
    }
]