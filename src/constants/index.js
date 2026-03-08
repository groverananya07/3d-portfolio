// 1. WE DIRECTLY IMPORT THE IMAGES HERE (Bypasses all browser caching!)
import iiitdLogo from './IIITD.jpg';
import visionLogo from './VisionIAS.png';
import nicLogo from './NIC.png';


const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "About", link: "#about" }, // Changed from Testimonials
];

const words = [
  { text: "Ideas", imgPath: "./images/ideas.svg" },
  { text: "Concepts", imgPath: "./images/concepts.svg" },
  { text: "Designs", imgPath: "./images/designs.svg" },
  { text: "Code", imgPath: "./images/code.svg" },
  { text: "Ideas", imgPath: "./images/ideas.svg" },
  { text: "Concepts", imgPath: "./images/concepts.svg" },
  { text: "Designs", imgPath: "./images/designs.svg" },
  { text: "Code", imgPath: "./images/code.svg" },
];

const counterItems = [
  { value: 200, suffix: "+", label: "Problems Solved" },
  { value: 5, suffix: "+", label: "Hackathons Attended" },
  { value: 15, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Technologies Mastered" },
];

const logoIconsList = [
  { name: 'Vision IAS' },
  { name: 'IIIT-Delhi' },
  { name: 'NIC' },
];

const abilities = [
  {
    imgPath: "https://img.icons8.com/fluency/96/source-code.png", 
    title: "Algorithmic Problem Solving",
    desc: "Leveraging C++ and advanced data structures to write optimized, efficient code for complex logic challenges.",
  },
  {
    imgPath: "https://img.icons8.com/fluency/96/monitor.png",
    title: "Full-Stack Web Development", 
    desc: "Building engaging, high-performance user interfaces and robust full-stack applications using React, Node.js, and modern web tools.",
  },
  {
    imgPath: "https://img.icons8.com/fluency/96/brain.png",
    title: "Research & Adaptability",
    desc: "Applying an analytical mindset to rapidly learn new tech stacks and dive deep into technical architecture.",
  },
];

const techStackImgs = [
  { name: "React Developer", imgPath: "./images/logos/react.png" },
  { name: "Python Developer", imgPath: "./images/logos/python.svg" },
  { name: "Backend Developer", imgPath: "./images/logos/node.png" },
  { name: "Interactive Developer", imgPath: "./images/logos/three.png" },
  { name: "Project Manager", imgPath: "./images/logos/git.svg" },
];

const techStackIcons = [
  { name: "React Developer", modelPath: "./models/react_logo-transformed.glb", scale: 1, rotation: [0, 0, 0] },
  { name: "Python Developer", modelPath: "./models/python-transformed.glb", scale: 0.8, rotation: [0, 0, 0] },
  { name: "Backend Developer", modelPath: "./models/node-transformed.glb", scale: 5, rotation: [0, -Math.PI / 2, 0] },
  { name: "Interactive Developer", modelPath: "./models/three.js-transformed.glb", scale: 0.05, rotation: [0, 0, 0] },
  { name: "Project Manager", modelPath: "./models/git-svg-transformed.glb", scale: 0.05, rotation: [0, -Math.PI / 4, 0] },
];

const expCards = [
  {
    review: "Conducted deep algorithmic research on the Connected Vertex Cover problem, exploring network design applications and developing efficient solutions using discrete mathematics.",
    company: "IIIT-Delhi",
    title: "Research Intern",
    date: "June 2025 - August 2025",
    // 2. We use the imported variables here instead of string paths!
    imgPath: iiitdLogo, 
    logoPath: iiitdLogo,
    responsibilities: [
      "Researched the NP-hard Connected Vertex Cover (CVC) problem and its applications in network design.",
      "Studied complexity and approximation strategies across chordal, planar, bipartite, and r-uniform hypergraphs.",
      "Developed efficient algorithms using DSA and discrete mathematics.",
    ],
  },
  {
    review: "Engineered an AI-powered chatbot using modern NLP and ML tools, significantly reducing manual response loads and improving query accuracy with custom GPT integrations.",
    company: "Vision IAS",
    title: "AI Developer Intern",
    date: "May 2024 - August 2024",
    imgPath: visionLogo,
    logoPath: visionLogo,
    responsibilities: [
      "Developed an AI-powered chatbot using NLP and ML, automating responses to 80% of student queries.",
      "Integrated OpenAI GPT with custom datasets to improve response accuracy.",
      "Used Python libraries (NLTK, spaCy, TensorFlow) for preprocessing, intent recognition, and response generation.",
    ],
  },
  {
    review: "Contributed to large-scale data analysis and client reporting for the e-Hospital project, optimizing data clarity and documentation workflows.",
    company: "NIC",
    title: "Data Analyst Summer Intern",
    date: "May 2023 - August 2023",
    imgPath: nicLogo,
    logoPath: nicLogo,
    responsibilities: [
      "Analysed data using Excel and SQL for client reporting.",
      "Contributed to the e-Hospital project across patient care, lab services, HR, and medical records.",
      "Created proposals and reports using MS Office, enhancing clarity by 30%.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "./images/logo1.png" },
  { name: "logo2", imgPath: "./images/logo2.png" },
  { name: "logo3", imgPath: "./images/logo3.png" },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review: "I can’t say enough good things about Ananya. She was able to take our complex project requirements and turn them into a seamless, functional website. Her problem-solving abilities are outstanding.",
    imgPath: "./images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review: "Working with Ananya was a fantastic experience. She transformed our outdated website into a modern, user-friendly platform. Her attention to detail and commitment to quality are unmatched. Highly recommend her for any web dev projects.",
    imgPath: "./images/client3.png",
  },
];

const socialImgs = [
  { name: "insta", imgPath: "./images/insta.png",link: "https://www.instagram.com/ananya_grover07/" },
  { name: "linkedin", imgPath: "./images/linkedin.png",link: "https://www.linkedin.com/in/ananya-grover07"},
  { name: "gmail",imgPath: "./images/gmail.png",link: "mailto:groverananya189@gmail.com"}
];
const aboutMe = [
  {
    title: "Education",
    description:
      "B.Tech in Mechanical Engineering from Netaji Subhash University of Technology (NSUT).\nStrong foundation in mathematics, algorithms, and analytical thinking.",
  },
  {
    title: "Research",
    description:
      "Research Intern at IIIT-Delhi working on NP-hard Connected Vertex Cover problems.\nExplored approximation strategies and algorithmic design.",
  },
  {
    title: "Technical Skills",
    description:
      "Proficient in C++, Python, SQL.\nStrong in Data Structures, Algorithms, and Full Stack Development.",
  },
  {
    title: "Professional Focus",
    description:
      "Interested in Algorithms, AI Systems, and scalable backend architecture.\nPassionate about solving complex real-world problems.",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  aboutMe,
  navLinks,
};