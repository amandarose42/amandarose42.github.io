import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Amanda',
  lastName: 'Ortiz',
  initials: 'ARO', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Software Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🇺🇸',
      text: 'based in the Arcata, CA',
    },
    {
      emoji: '💻',
      text: 'Pursuing Full Stack Development',
    },
    {
      emoji: '📧',
      text: 'amandaroseortiz42@gmail.com',
    },
  ],
  socials: [
    {
      link: 'https://aroseo.com/resume', // this should be https://yourname.com/resume.pdf once you've deployed
      icon: 'fa fa-file',
      label: 'resume',
    },
    {
      link: 'https://instagram.com/amanda.rose42/',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/amandarose42',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/amandaroseortiz/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/amanda_rose42',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
  ],
  bio: "Hello! I'm Amanda Ortiz! I studied Computer Science at Humboldt State University. Currently, I am working as an Operations Manager at the Ramada Inn Arcata, but my main goal is to pursue a career in Software Development. I have had previous experience as a Full Stack Developer. I enjoy building web applications and learning new technologies. I'm currently based in Arcata, California, but am planning to relocate to Minnesota, USA.",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: ['Javascript', 'Python', 'C++', 'Introductory Linux & Java', 'HTML/CSS', 'PHP'],
    frameworks: [
      'React','React Native',
      'Next',
      'Material UI',
      'Vue',
      'NodeJS'
    ],
    databases: ['MySQL', 'NoSQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'GraphQL'],
    cloudServices: ['AWS S3', 'AWS EC2', 'Google Analytics', 'Heroku'],
    tools: [
      'Visual Studio',
      'Git',
      'Postman',
      'AWS',
      'npm',
      'yarn'
    ],
  },
  hobbies: [
    {
      label: 'Language Learning',
      emoji: '🌐',
    },
    {
      label: 'Beach Walks',
      emoji: '🐋',
    },
    {
      label: 'Hiking',
      emoji: '🌲',
    },
    {
      label: 'Cooking',
      emoji: '🍳',
    },
    {
      label: 'Traveling',
      emoji: '✈️',
    },
    {
      label: 'Video Games',
      emoji: '🎮',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
   /*  {
      title: 'Lumber Data Tracking',
      description:'',
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: '', // this should be a link to the **repository** of the project, where the code is hosted.
      image: '',
    },
    {
      title: 'MapIt Humboldt: Bias Reporting',
      description:'The MapIt Humboldt Mobile App & Website allows members of the community to report and identify places that are welcoming and safe as well as places where people reported not feeling safe.',
      live: '', //https://www.mapithumboldt.org
      source: '', //https://github.com/Andy8647/dynrank
      image: './mapit-screenshots.png',
    }, */
  ],
};
