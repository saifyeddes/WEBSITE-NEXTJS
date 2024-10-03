import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  sass,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  linkedin,
  code_tag,
  company_icon,
  project2,
  project3,
  music_app,
  project5,
  facebook,
  java,
  project6,
  project8,
  material_ui,
  next,
  clerk,
  shadcn,
  joinMe,
  vue,
  angular,
  laravel,
  php,
  ubertaxi,
  pfe,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Js Developer",
    icon: web,
  },
  {
    title: "UI/ UX Designer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "Material UI",
    icon: material_ui,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "php",
    icon: php,
  },
];

const experiences = [
  {
    title: "2024",
    icon: company_icon,
    iconBg: "#383E56",
    date: "2024",
    points: ["Web Developer @PoemGroup"],
    workDescription: [
      "- Develop the mobile application: Flutter (Dart).",
      "- Design the back-end: Laravel (PHP).",
      "- Manage the data: PostgreSQL (SQL).",
      "- User interface design: Flutter (Dart), Vue.js (JavaScript).",
      "- Analyze and resolve technical issues: Flutter (Dart), Laravel (PHP), PostgreSQL (SQL).",
    ],
  },
  {
    title: "2023",
    icon: company_icon,
    iconBg: "#E6DEDD",
    date: "2023",
    points: ["Web Developer MERN Full-Stack @DpointGroup"],
    workDescription: [
      "- Develop web applications for Spanish clients: React.js (JavaScript).",
      "- Develop backend applications: Node.js (JavaScript)",
      "- Use Git for code management and versioning: Git.",
    ],
  },
  {
    title: "2022",
    icon: company_icon,
    iconBg: "#383E56",
    date: "2022",
    points: ["Web Developer Laravel | PHP @Designet"],
    workDescription: [
      "- Develop websites for local clients: Laravel (PHP).",
      "- Develop backend applications: JavaScript and PHP",
      "- Use Git for code management and versioning: Git.",
    ],
  },
];
import tekup from "../assets/images/tekup.jpeg";
import isims from "../assets/images/isims.jpg";

const testimonials = [
  {
    eduType: "University",
    universityName: "Private Higher School of Technology and Engineering TEKUP",
    field: "Software Engineering",
    name: "TEK-UP University",
    image: tekup,
    date: "2023 -- 2026",
    link: "https://tek-up.de/",
  },
  // {
  //   eduType: "University",
  //   universityName:
  //     "The Higher Institute of Computer Science and Multimedia of Sfax",
  //   field: "Computer Science And Multimedia",
  //   name: "ISIM SFAX",
  //   image: isims,
  //   date: "2020 -- 2022",
  //   link: "https://isimsf.rnu.tn/",
  // },
  {
    eduType: "Certification Degree's",
    courses: [
      "Full Stack JS Development - MERN Stack",
      "Full Stack Python,Django Framework",
      "UIUX with Figma and Adobe XD",
      "Android App Development : MobDevOps+ Android 13",
    ],
    name: ["Udemy Online Courses", "Google Career Certificates"],
    image: [
      "https://yt3.googleusercontent.com/8kmI-l1suZxgItpAe359N-jJCBct1PXe99e04kTit8XWE3D_pBnctd6pEiwwmapHbDMmC21E45Q=s900-c-k-c0x00ffffff-no-rj",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbteeizfpfpirXtKQUwFT0xaFUmUv7KNKwdA&s",
    ],
    link: [
      "https://www.udemy.com/home/my-courses/learning/",
      "https://grow.google/intl/ssa-fr/google-career-certificates/",
    ],
  },
  {
    eduType: "Volunteering Degree's",
    name: ["Tunisian Scout", "Cinema Club"],
    courses: [
      "Team Leader Tunisian Scout Association ",
      "Founder El Club Cinema Sfax",
    ],
    image: [
      "https://jamaity.org/wp-content/uploads/2015/08/logo_scouts_tunisiens.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTwaZcK3sjkx1td9XjSQ2YNg0vkXzrzgkvQ&s",
    ],
    link: [
      "https://www.facebook.com/scouts.korba",
      "https://www.facebook.com/cine.club.isims",
    ],
  },
];

const projects = [
  {
    name: "Full Stack Uber TAXI App with Vue JS",
    description:
      "Developed a mobile app using Vue.js and Laravel, integrating taxi booking, food delivery, real-time tracking, and secure payments.",
    tags: [
      {
        name: "vuejs",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "UI/UX",
        color: "pink-text-gradient",
      },
      {
        name: "Open Project",
        color: "white-text-gradient",
        url: "#",
        border:
          "font-sans font-semibold border-2 border-white rounded-lg hover:text-tertiary hover:bg-white",
      },
    ],
    image: ubertaxi,
    type: "web",
  },
  {
    name: " MERN Full Stack E-Commerce Web Application",
    description:
      "Developed web applications for Spanish clients using React JS for responsive frontends and Node.js for backends, ensuring performance, UX, and accessibility across devices.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "pink-text-gradient",
      },
      // {
      //   name: "MongoDB",
      //   color: "purple-text-gradient",
      // },
      {
        name: "Open Project",
        color: "white-text-gradient",
        url: "#",
        border:
          "font-sans font-semibold border-2 border-white rounded-lg hover:text-tertiary hover:bg-white",
      },
    ],
    image: pfe,
    type: "web",
  },

  {
    name: "Spotify 2.0 Clone Music App with React 18!",
    description:
      "Full Music App Clone ( Spotify 2.0 Clone ) With a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
      {
        name: "Open Project",
        color: "white-text-gradient",
        url: "https://lyricsmusicappclone.netlify.app/",
        border:
          "font-sans font-semibold border-2 border-white rounded-lg hover:text-tertiary hover:bg-white",
      },
    ],
    image: music_app,
    type: "web",
  },
  // {
  //   name: "Food Delivery App",
  //   description:
  //     "This project is designed for the finale project in the UX Design Certification in GO MY CODE Center.",
  //   tags: [
  //     {
  //       name: "ux design",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "ui design",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "adobe xd",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: project3,
  //   source_code_link:
  //     "https://www.behance.net/gallery/133351579/Food-Delivery-App",
  //   type: "design",
  // },
  {
    name: "Workout Application",
    description:
      "This project is designed for the Coursera UX Design Professional Certificate",
    tags: [
      {
        name: "ux design",
        color: "blue-text-gradient",
      },
      {
        name: "ui design",
        color: "green-text-gradient",
      },
      {
        name: "adobe xd",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link:
      "https://www.behance.net/gallery/144026457/Workout-Application",
    type: "design",
  },
  {
    name: "Real-time Visual Detection: Java with OpenCV",
    description:
      "Explore computer vision and image processing with our project,It showcases advanced real-time visual analysis techniques through four key applications: Face Detection, Eyes Detection, Edge Detection, and Watermarking.",
    tags: [
      {
        name: "Java21",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "ComputerVision",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/GhaouiOssema/OPEN_CV_USING_JAVA",
    type: "web",
  },
  {
    name: "Reclamation web app using voice",
    description:
      "Revolutionizing reclamation forms with a web app that allows users to submit and interact with reclamation information using voice recordings",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "purple-text-gradient",
      },
    ],
    image: project8,
    source_code_link: "https://github.com/GhaouiOssema/PFA",
    type: "web",
  },
];

const socialMediaIcons = [
  {
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
    ],
    Icons: [github, linkedin, code_tag, facebook],
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialMediaIcons,
};
