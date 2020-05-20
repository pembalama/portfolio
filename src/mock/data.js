import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Pemba Lama | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am',
  name: 'Pemba Lama',
  subtitle: 'Full Stack Developer',
  cta: 'About',
  // cta projects: 'Projects',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi, I am a Full Stack developer with a passion for web development.',
  paragraphTwo:
    'I am a highly driven, motivated programmer with 7 + years of experience working in the Accounting field, who wants to learn more about web development and build cool things to solve problems and better the lives of others.',
  paragraphThree:
    'Feel free to reach out to me; I am always eager to learn new technology and take on exciting new projects!',
  resume: 'https://docs.google.com/document/d/104M8unlxE_XaS6CgttiatN1ZjgRObbb7mrJhs3pGyE0/edit#', // if no resume, the button will not show up 'https://www.resumemaker.online/es.php'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.png',
    title: 'Momo & Brooklyn',
    info:
      'Ecommerce site built in two weeks; this was my personal project at Dev Mountain which won best UI/UX and design out of 6 projects.',
    info2:
      'Built with React, Redux, CSS/SCSS, Express, Node, Postgres, Bcrypt, Stripe, Nodemailer, and Figma.',
    url: 'http://momoandbrooklyn.com/#/',
    repo: 'https://github.com/pembalama/fullstack-ecommerce-project', // if no repo, the button will not show up
  },
  // {
  //   id: uuidv1(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
  // {
  //   id: uuidv1(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email: pemba.t.lama@gmail.com',
  email: 'pemba.t.lama@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: '',
    // },
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
      name: 'twitter',
      url: 'https://twitter.com/PembaTLama',
    },
    // {
    //   id: uuidv1(),
    //   name: 'envelope',
    //   url: 'pemba.t.lama@gmail.com',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
