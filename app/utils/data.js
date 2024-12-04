import shoes from "../../public/images/shoes.png";
import whatsNxt from "../../public/images/whats-nxt.png";
import first from "../../public/images/1st-third.png";
import ten23 from "../../public/images/ten23.png";
import etchASketch from "../../public/images/etchASketch.png";
import letters from "../../public/images/letters.png";
import interactiveShapes from "../../public/images/interactiveShapes.png";
import words from "../../public/images/words.png";
import linkVault from '../../public/images/linkVault.png'
import qr from '../../public/images/qr.png'


export const projects = [
  
  {
    title: "If The Shoe Fits",
    tags: [
      "Next.js 14 App Router",
      "Shopify Storefront API",
      "TypeScript",
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
    title: "My Link Vault",
    tags: [
      "React",
      "Typescript",
      "IndexedDB",
      "Vitest",
      "React Testing Library",
      "Formspree",
      "Tailwind",
      "Chrome Extension"
    ],
    img: linkVault,
    description: "Link Vault is a Chrome extension that enables users to create a list of saved links, stored in IndexedDB. Users can categorize each link by tag and category, with the webpage's title and URL automatically fetched as link data. The link list can be filtered by tag and category. When a user clicks on a link in their list, they are navigated to the link's URL in a new page.",
    siteURL: 'https://my-link-vault.vercel.app/',
    github: 'https://github.com/artsycoder533/my-link-vault',
    extensionURL: 'https://chromewebstore.google.com/detail/my-link-vault/cgnjhdifiiiaepjipolnodmeccccoekk?utm_source=ext_app_menu',
  },
  {
    title: "Ten-23 Agency LLC",
    tags: [
      "Next.js 14 App Router",
      "On-Demand Revalidation",
      "Sanity",
      "Sanity Webhooks",
      "TypeScript",
      "Stripe",
      "Tailwind",
      "GROQ",
    ],
    img: ten23,
    description:
      "A custom website built for my Web Development Agency that showcases the websites I have created/revamped while freelancing for clients.  Potential clients can browse the services offered, learn about my prices and send a message that will be delivered directly to my inbox.",
    siteURL: "https://ten23.agency/",
  },
  
  {
    title: "WHATS NXT",
    tags: [
      "Next.js 14 App Router",
      "Sanity",
      "Stripe",
      "TypeScript",
      "GROQ",
      "Tailwind",
      "Formspree",
    ],
    img: whatsNxt,
    description:
      "A custom e-commerce website built as a cheaper alternative platforms like Shopify.  Products are queried using the GROQ query language from Sanity, payments are handled through Stripe, and contact form submissions are handled through Formspree.",
    siteURL: "https://whatsnxt.org/",
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
    siteURL: "https://artsycoder533.github.io/1st-Third/",
    github: "https://github.com/artsycoder533/1st-Third",
  },

];

export const justForFun = [
  {
    title: "Etch-A-Sketch (Desktop Only)",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript"
    ],
    img: etchASketch,
    siteURL: "https://artsycoder533.github.io/etch-a-sketch/",
    github: "https://github.com/artsycoder533/etch-a-sketch",
  },
  {
    title: "Letters",
    tags: [
      "p5.js",
      "JavaScript",
      "CSS"
    ],
    img: letters,
    siteURL: "https://artsycoder533.github.io/letters/",
    github: "https://github.com/artsycoder533/letters",
  },
  {
    title: "Interactive Shapes (Desktop Only)",
    tags: [
      "p5.js",
      "JavaScript",
      "CSS"
    ],
    img: interactiveShapes,
    siteURL: "https://artsycoder533.github.io/interactive-shapes/",
    github: "https://github.com/artsycoder533/interactive-shapes",
  },
  {
    title: "Words",
    tags: [
      "p5.js",
      "JavaScript",
      "CSS"
    ],
    img: words,
    siteURL: "https://artsycoder533.github.io/words/",
    github: "https://github.com/artsycoder533/words",
  },
  {
    title: "Static QR",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind"
    ],
    img: qr,
    siteURL: "https://freestaticqr.com",
    // github: "https://github.com/artsycoder533/words",
  },
]