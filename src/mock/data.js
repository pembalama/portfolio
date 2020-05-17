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
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/104M8unlxE_XaS6CgttiatN1ZjgRObbb7mrJhs3pGyE0/edit#', // if no resume, the button will not show up 'https://www.resumemaker.online/es.php'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.png',
    title: 'Momo & Brooklyn',
    info: '',
    info2: '',
    url: 'http://pembalama.com/#/',
    repo: 'https://github.com/pembalama/fullstack-ecommerce-project', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
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
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
