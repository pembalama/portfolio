import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Pemba Lama | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'This is my Portfolio site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Pemba Lama',
  subtitle: "I'm a Full Stack Web Developer.",
  cta: 'About',
  // cta projects: 'Projects',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Full Stack Web Developer with a strong foundation in web technologies and a 7+ years professional background in Accounting. I love learning new things, solving problems, and working with others to build exciting products. When I am not coding, I enjoy listening to podcasts, traveling, and, exploring great foods.',
  paragraphThree: 'SKILLS:',
  paragraphFour: 'HTML | CSS | JavaScript | React | Redux | NodeJS | Postgres | SQL | Git | Github',
  resume: 'https://drive.google.com/file/d/1M7SouxtHUHh92KjiVHFf5IgmG1K7IfjS/view?usp=sharing', // if no resume, the button will not show up 'https://www.resumemaker.online/es.php'
};
// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'MomoandBrooklyn.png',
    title: 'Momo & Brooklyn',
    info:
      'Ecommerce site for selling beautiful hand knitted beanies; this was my personal project at Dev Mountain which won best UI/UX and design. Users can register, login, add items to cart, & purchase items using Stripe.',
    info2:
      'Built with React, Redux, CSS/SCSS, Express, Node, Postgres, Bcrypt, Stripe, Nodemailer, and Figma.',
    url: 'http://momoandbrooklyn.com:5000/#/',
    repo: 'https://github.com/pembalama/fullstack-ecommerce-project', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'Blackbird.png',
    title: 'Blackbird Reviews',
    info:
      'Blackbird Reviews is a social platform for posting reviews about products; users can register, login, create posts, like & comment other posts.',
    info2:
      'Built with React, Redux, CSS/SCSS, Express, Node, Postgres, Bcrypt, Nodemailer, and Figma.',
    url: 'https://project-black-bird.herokuapp.com/#/',
    repo: 'https://github.com/Project-Black-Bird/black-bird-reviews', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's work together",
  info: 'I am available for freelance and contract work, feel free to contact me.',
  btn: 'pemba.t.lama@gmail.com',
  email: 'pemba.t.lama@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pembalama/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/pembalama',
    },
    {
      id: uuidv1(),
      name: 'codepen',
      url: 'https://codepen.io/pembalama',
    },
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/PembaTLama',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
