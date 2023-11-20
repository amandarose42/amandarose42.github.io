import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Amanda',
  lastName: 'Ortiz',
  initials: 'ARO', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Software Developer/Network Technician',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🇺🇸',
      text: 'based in the Staples, MN',
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
  bio: `Hello! I'm Amanda Ortiz. I studied Computer Science at Cal Poly Humboldt and graduated in December of 2020. Currently, I am working 
    as a Network Technician I at Wadena County Courthouse. My main goal is to pursue a career in Software Development. I have previous experience as
    a FullStack Developer, working at Biztech. I enjoy building applications and learning new things and technologies. I recently relocated from Arcata, CA to Staples, MN.`,
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: ['Javascript', 'Python', 'C++', 'Introductory Linux & Java', 'HTML/CSS', 'PHP'],
    frameworks: [
      'React','React Native',
      'NextJS',
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
      label: 'Language Learning, Currently learning Norwegian',
      emoji: '🌐',
    },
    {
      label: 'Reading Books, Currently reading ACOTAR Series (Book 3)',
      emoji: '📖',
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
    {
      label: 'Beach Walks',
      emoji: '🐋',
    },
    {
      label: 'Hiking',
      emoji: '🌲',
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
    },*/
    {
      title: 'Knowledge Base for Biztech',
      description: "Local machine setup on the office network that ran a website that consists of all necessary information for current and previous projects in the Development Department",
      image: 'n/a',
      noButtons: true
    },
    {
      title: 'Internal Arcata Ramada',
      description: "Basic React Site, hosted on Amplify, for Arcata Hotel Employees to have access to special rates, do not rent list, and a cleaning list. People on the do not rent list can be added, removed, and updated.",
      image: 'n/a',
      noButtons: true
    },/*
    {
      title: 'MapIt Humboldt: Bias Reporting',
      description:'The MapIt Humboldt Mobile App & Website allows members of the community to report and identify places that are welcoming and safe as well as places where people reported not feeling safe.',
       live: '', //https://www.mapithumboldt.org
      source: '', //https://github.com/Andy8647/dynrank
      image: './mapit-screenshots.png',
    },  */
    {
      title: 'Map IT Humboldt: Bias Reporting',
      description: "Included One Public Website, An Admin Site, and A Mobile Application. The Public Website was created using WordPress on LightSail and React for the forms. The Mobile app was created in React Native and added to both Google Play Store and Apple Store. Both the mobile application and the public website were created allow the community to view previous reported submissions and report their own submissions on bias and discrimination happening in Humboldt County. The Admin Site was created using React and hosted on Amplify, and is used for allowing admins of the group to view submissions from the public, and verify/deny those submissions by connecting with any local businesses involved.",
      image: 'n/a',
      noButtons: true,
      //image: './mapit-screenshots.png'
    },
    {
      title: 'North Fork Lumber Saw Data Collection',
      description: "Worked with a local mill to create an application that Saw Filers can use to track productivity of saws and discrepancies in saw maintenance. Included: A 'greasboard' that keeps track of saws that are actively being used, tracks their usage and maintenance, and allows to track which Saw Filer is currently active; an admin side that allows for reporting and CRUD on Saw Filers, Saws, and Common Variables; other forms that include information that the lumber mills use to track discrepancies in saw maintenance",
      image: 'n/a',
      noButtons: true
    },
    {
      title: 'SRMs OBOX',
      description: "A vanilla javascript project that created a publicly shared file structure system, similar to Window's File Explorer, to allow the SRM team to share important documents that are consistently updated, as well as customize the file structures to their personal needs. Created a bash script that users can double click on to update the file structure and upload new documents.",
      image: 'n/a',
      noButtons: true
    },
    {
      title: 'SRM Quicklinks',
      description: "Simple WordPress site hosted on the local network that consists of important links, documents, and contacts for all SRM Employees.",
      image: 'n/a',
      noButtons: true
    },
  ],
};
