import pillow from '../assets/smartpillow.png';
import driver from '../assets/driverdrowsinessalert.png';
import todolist from '../assets/todolist.png';
import ems from '../assets/ems.png';
import flappybird from '../assets/flappybird.png';
const projectList = [
  {
    title: "Insomnia Prediction Using IoT-Integrated Smart Pillow",
    description: "This 6th semester mini project is an IoT and AI-based smart pillow system with sensors (LDR, MEMS, force, pulse, temperature, sound) to monitor sleep patterns. Data is stored in MongoDB, analyzed with ML (RFE + PCA) for insomnia prediction, and visualized in the Blynk app with real-time alerts.",
    image: pillow,
    video: "",
    link: "https://github.com/mageshit24/Insomnia-Prediction-Using-IoT-Integrated-Smart-Pillow.git"
  },
  {
    title: "Driver Drowsiness Alert",
    description: "The Driver Drowsiness Alert System is an AI and IoT-based safety solution that detects driver fatigue using OpenCV-based facial and eye movement analysis. The system continuously monitors the driver through an camera and identifies signs of drowsiness — such as prolonged eye closure or head drooping. When drowsiness is detected, it triggers an instant alarm inside the vehicle and sends real-time alerts to the vehicle owner or concerned authority to prevent accidents.",
    image: driver,
    video: "",
    link: "https://github.com/mageshit24/Driver-Drowsiness-Alert.git"
  },
  {
    title: "To-Do List using MERN stack",
    description: "Developed and deployed a responsive ToDo List web application using the MERN stack (MongoDB, Express.js, React, Node.js) to manage tasks efficiently. Implemented full CRUD (Create, Read, Update, Delete) operations with real-time updates and a clean, user-friendly interface. Backend API was deployed on Render, and the frontend was hosted on Netlify, enabling global accessibility. Focused on modular code structure, RESTful API integration, and responsive design for both desktop and mobile users.",
    image: todolist,  // Add image in src/assets
    video: "", // optional video link if any
    link: "https://todolist-web-mern-project.netlify.app/"
  },
  {
    title: "Employee Management System",
    description: "During my internship, I worked on designing, developing, and deploying a full-stack Employee Management System. A web application built using Spring Boot for the backend and a JavaScript-/HTML/CSS-based frontend. It allows administrators to manage employee information, including adding, updating, viewing, and deleting employee records. Also features modular architecture, and a responsive UI.",
    image: ems,
    video: "",
    link: "https://github.com/mageshit24/Employee-Management-System.git"
  },
  {
    title: "Flappy Bird Game",
    description: "Created this project as a hands-on exercise to strengthen my understanding of Java programming and object-oriented principles. Rebuilt the classic Flappy Bird game using Java, focusing on core concepts such as OOP, event handling, and modular code design. Implemented collision detection between the bird, pipes, and ground, as well as a custom game loop to control animations and gameplay flow.",
    image: flappybird,
    video: "",
    link: "https://github.com/mageshit24/FlappyBird.git"
  }
];

export default projectList;
