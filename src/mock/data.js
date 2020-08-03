import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Pemba Lama | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'This is my Portfolio site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am',
  name: 'Pemba Lama',
  subtitle: 'Full Stack Web Developer',
  cta: 'About',
  // cta projects: 'Projects',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Hi, I am a Full Stack Web Developer. I love learning new things, solving problems, and working with others to build exciting products. When I am not coding, I enjoy listening to podcasts, traveling, and exploring great foods.',
  //  paragraphTwo:
  //    'When I am not coding, I enjoy listening to podcasts, traveling, and exploring great foods.',
  paragraphThree: 'SKILLS:',
  paragraphFour: 'HTML | CSS | Javascript | React | Redux | NodeJS | Postgres | SQL | Git + Github',
  resume: 'https://drive.google.com/file/d/1q5xtK4kakC1MyF6L2On8gcTzmK0_rJkE/view?usp=sharing', // if no resume, the button will not show up 'https://www.resumemaker.online/es.php'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'MomoandBrooklyn.png',
    title: 'Momo & Brooklyn',
    info:
      'Ecommerce site built in two weeks; this was my personal project at Dev Mountain which won best UI/UX and design out of 6 projects.',
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
      'Blackbird Reviews is a social platform where users can create reviews about products that they have enjoyed. Users can also like and comment other reviews.',
    info2:
      'Built with React, Redux, CSS/SCSS, Express, Node, Postgres, Bcrypt, Nodemailer, and Figma.',
    url: 'https://project-black-bird.herokuapp.com/#/',
    repo: 'https://github.com/Project-Black-Bird/black-bird-reviews', // if no repo, the button will not show up
  },
  //  {
  //    id: uuidv1(),
  //    img: 'project.jpg',
  //    title: '',
  //    info: '',
  //    info2: '',
  //    url: '',
  //    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  //  },
];

// CONTACT DATA
export const contactData = {
  cta:
    'I am available for freelance and contract work, feel free to reach out to me for any inquiries.',
  btn: 'pemba.t.lama@gmail.com',
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
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: 'https://twitter.com/PembaTLama',
    // },
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
