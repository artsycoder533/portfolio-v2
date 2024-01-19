import shoes from "../../public/images/shoes.png";
import whatsNxt from "../../public/images/whats-nxt.png";
import productiv from "../../public/images/productiv.png";
import first from "../../public/images/1st-third.png";

export const projects = [
  {
    title: "If The Shoe Fits",
    tags: [
      "Next.js 14 App Router",
      "Shopify SDK",
      "Typescript",
      "GraphQL",
      "Tailwind",
      "Formspree",
    ],
    img: shoes,
    description:
      "An e-commerce store where shoe enthusiasts can shop for one of a kind sneakers and boots. Built with a custom front-end, products are queried from Shopify using Graphql.",
    technologies:
      "Next.js 14 App Router, Shopify SDK, Graphql, Typesript, Formspree, and Tailwind",
    siteURL: "https://iftheshoefits.vercel.app/",
    github: "https://github.com/artsycoder533/if-the-shoe-fits",
  },
  {
    title: "Whats Nxt",
    tags: [
      "Next.js 14 App Router",
      "Sanity",
      "Typescript",
      "GROQ",
      "Stripe API",
      "Tailwind",
      "Formspree",
    ],
    img: whatsNxt,
    description:
      "A custom e-commerce website built as a cheaper alternative to Shopify.  Products are queried from Sanity and payments and handled through Stripe.",
    siteURL: "https://www.whatsnxt.org/",
    github: "https://github.com/artsycoder533/whats-nxt",
  },
  {
    title: "1st & Third",
    tags: [
      "React",
      "React Router v6",
      "Context API",
      "Fake Store API",
      "Styled Components",
    ],
    img: first,
    description:
      "An E-Commerce website where the user can browse and filter products pulled from the Fake Store API based on category, price, and customer rating, sort products based on price and item name, and add/update products in the cart. The user is then able to checkout by filling in their contact information in the checkout form with added form validation. I utilized the Context API paired with reducers for global state management.",
    technologies:
      "Next.js 14 App Router, Shopify SDK, Graphql, Typesript, Formspree, and Tailwind",
    siteURL: "https://artsycoder533.github.io/1st-Third/",
    github: "https://github.com/artsycoder533/1st-Third",
  },
  {
    title: "Productiv",
    tags: [
      "Vanilla JavaScript",
      "Firebase Firestore",
      "Firebase Authentication",
      "Quotes API",
      "Webpack 5",
      "CSS/Sass",
      "Html",
    ],
    img: productiv,
    description:
      "A dashboard application that solves the problem of having to switch between multiple applications to maintain productivity. A user is able to add tasks organized by project type as well as date. To aid the user in keeping deadlines, tasks are automatically added to the inbox that are due the current day. Productiv also includes widgets such as a Pomodoro Timer and calculator.",
    siteURL: "https://artsycoder533.github.io/productiv/#",
    github: "https://github.com/artsycoder533/productiv",
  },
];
