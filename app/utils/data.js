import shoes from "../../public/images/shoes.png";
import whatsNxt from "../../public/images/whats-nxt.png";
import productiv from "../../public/images/productiv.png";
import first from "../../public/images/1st-third.png";
import ten23 from "../../public/images/ten23.png";

export const projects = [
  {
    title: "If The Shoe Fits",
    tags: [
      "Next.js 14 App Router",
      "Shopify Storefront API",
      "Typescript",
      "GraphQL",
      "Tailwind",
      "Formspree",
    ],
    img: shoes,
    description:
      "A custom Shopify E-commerce storefront where shoe enthusiasts can shop for one of a kind sneakers and boots. Products are queried from the Shopify Storefront API using GraphQL.  Users are redirected tdo Shopify checkout when completing to complete a purchase.",
    siteURL: "https://iftheshoefits.vercel.app/",
    github: "https://github.com/artsycoder533/if-the-shoe-fits",
  },
  {
    title: "WHATS NXT",
    tags: [
      "Next.js 14 App Router",
      "Sanity",
      "Stripe",
      "Typescript",
      "GROQ",
      "Tailwind",
      "Formspree",
    ],
    img: whatsNxt,
    description:
      "A custom e-commerce website built as a cheaper alternative platforms like Shopify.  Products are queried using the GROQ query language from Sanity, payments are handled through Stripe, and contact form submissions are handled through Formspree.",
    siteURL: "https://www.whatsnxt.org/",
    github: "https://github.com/artsycoder533/whats-nxt",
  },
  {
    title: "Ten-23 Agency LLC",
    tags: [
      "Next.js 14 App Router",
      "Typescript",
      "Tailwind",
      "Formspree",
    ],
    img: ten23,
    description:
      "A custom website built for my Web Development Agency that showcases the websites I have created/revamped while freelancing for clients.  Potential clients can browse the services offered, learn about my prices and send a message that will be delivered directly to my inbox.",
    siteURL: "https://www.ten23.agency/",
    github: "https://github.com/artsycoder533/ten23",
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
    siteURL: "https://artsycoder533.github.io/1st-Third/",
    github: "https://github.com/artsycoder533/1st-Third",
  },
  // {
  //   title: "Productiv",
  //   tags: [
  //     "Vanilla JavaScript",
  //     "Firebase Firestore",
  //     "Firebase Authentication",
  //     "Quotes API",
  //     "Webpack 5",
  //     "CSS/Sass",
  //     "Html",
  //   ],
  //   img: productiv,
  //   description:
  //     "A dashboard application that solves the problem of having to switch between multiple applications to maintain productivity. A user is able to add tasks organized by project type as well as date. To aid the user in keeping deadlines, tasks are automatically added to the inbox that are due the current day. Productiv also includes widgets such as a Pomodoro Timer and calculator.",
  //   siteURL: "https://artsycoder533.github.io/productiv/#",
  //   github: "https://github.com/artsycoder533/productiv",
  // },
];
