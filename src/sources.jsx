import client1 from "./../public/assets/client-1.jpeg";
import client2 from "./../public/assets/client-2.jpeg";
import client3 from "./../public/assets/client-3.jpeg";
import client4 from "./../public/assets/client-4.jpeg";
import client5 from "./../public/assets/client-5.jpeg";
import { IoMdAnalytics} from "react-icons/io";
import { IoCallOutline ,IoLocationOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent,MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import { FaInstagram, FaXTwitter, FaYoutube,FaLaptopCode} from "react-icons/fa6";
import { FaFacebookSquare,FaPaintBrush } from "react-icons/fa";
import { TfiWrite } from 'react-icons/tfi'
import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import { SiPython } from 'react-icons/si';
import {SiExpress} from "react-icons/si";
import { SiAppwrite } from 'react-icons/si';


export const tabs = [
    {name:"About Me",id:'about'},
    {name:"Skill",id:'skill'},
    {name:"Services",id:'services'},
    {name:"Projects",id:'projects'},
    {name:"Testimonials",id:'testimonials'},
]

export const whyChooseMe = [
  {
    title:"Well Rounded Experience",
    icon:<GrUserExpert/>,
    link:"",
  },
  {
    title:"Comprehensive Market Analysis",
    icon:<IoMdAnalytics/>,
    link:"",
  },
  {
    title:"Dedicated Client Support",
    icon:<MdOutlineSupportAgent/>,
    link:"",
  },
  {
    title:"Experience in Startup Development",
    icon:<RiExchange2Fill/>,
    link:"",
  },
]
export const services = [
  {
    name:"UI/UX Design",
    icon:<FaPaintBrush/>,
    description:`Proficient in creating user personas, journey maps, wireframes, and prototypes 
    to ensure a seamless user experience, with a focus on usability and accessibility. Skilled in 
    using Figma for collaborative design, prototyping, and creating interactive design systems. 
    Experienced in conducting user research, usability testing, and maintaining comprehensive design 
    systems to ensure consistency and efficiency across projects.`,
  },
  {
    name:"Web Development",
    icon:<FaLaptopCode/>,
    description:`Creating responsive and visually appealing designs with a utility-first CSS framework 
    and using Vite for fast front-end development. Leveraging Tanstack for state management and data 
    fetching, and developing scalable server-side applications with Node.js and Express.js. Experienced 
    with NoSQL databases, CI/CD pipelines, Docker, and cloud services for seamless deployment and scaling.`,
  },
  {
    name:"Mobile App Development",
    icon:<TfiWrite/>,
    description:`Building robust and feature-rich iOS and Android applications with a focus on 
    performance and user experience in both Android Studio and Xcode. Developing cross-platform 
    applications with React Native for a consistent look and feel on both Android and iOS with 
    Flutter or React Native. `,
  },
  {
    name:"PCB Design",
    icon:<TfiWrite/>,
    description:`Proficient in designing complex PCB layouts with a focus on signal integrity and 
    manufacturability using CAD tools like Flux.AI, Altium Designer, and Eagle. Skilled in programming 
    microcontrollers (e.g., Arduino, STM32, ESP32) and developing efficient firmware for embedded 
    systems, including secure boot. Experienced in analyzing and designing analog and digital circuits, 
    utilizing simulation tools and test equipment to validate and optimize circuit designs.`,
  },
  {
    name:"Game Development",
    icon:<FaPaintBrush/>,
    description:`Proficient in developing 2D and 3D games using Unity for optimized performance and 
    stunning visuals, and Unreal Engine for high-fidelity games with realistic characters through 
    MetaHumans. Skilled in using Godot for flexible, open-source game development and Pygame for 
    creating engaging 2D games with simple mechanics. Experienced in creating interactive and 
    responsive games using JavaScript and WebGL for broad accessibility.`,
  },
  {
    name:"LLM Developemnt/ Data Analytics",
    icon:<FaLaptopCode/>,
    description:`Proficient in developing and fine-tuning large language models for specific tasks and 
    high-quality outputs, with expertise in natural language processing (NLP) for text analysis and 
    generation. Skilled in designing machine learning algorithms, working with neural networks, CNNs, 
    RNNs, and transformers, and creating intuitive visualizations for data-driven insights. Experienced 
    in developing predictive models, handling large datasets, and implementing scalable big data solutions 
    using Hadoop and Spark.`,
  },
  {
    name:"VR/AR",
    icon:<FaLaptopCode/>,
    description:`Proficient in developing immersive VR applications for the Apple Vision Pro and creating 
    interactive experiences for the Meta Quest 3, utilizing Unity and Unreal Engine for high-quality graphics 
    and interactions. Skilled in developing augmented reality applications for the XReal Air 2 Ultra using 
    ARKit and ARCore to integrate real-world and digital elements. Experienced in combining VR and AR for mixed 
    reality applications, creating detailed 3D models, animations, and responsive environments that react to 
    user input in real-time.`,
  },
  {
    name:"System Administration",
    icon:<TfiWrite/>,
    description:`Proficient in administering various Linux/Unix distributions, ensuring stable and efficient 
    operations. Expertise in Bash, ZSH, and PowerShell for automating tasks and streamlining processes. Skilled 
    in identifying and mitigating cybersecurity threats to protect sensitive data and systems. Proficient in 
    using Security Onion for network security monitoring and incident response. Implementing security-focused 
    solutions with QubesOS for enhanced protection.`,
  },
  {
    name:"Robotics",
    icon:<FaPaintBrush/>,
    description:`Proficient in implementing RTOS for deterministic timing and precise control in robotic applications, 
    ensuring responsive and reliable performance. Expertise in using ROS for creating modular, scalable robotic applications, 
    and integrating various sensors and actuators, as well as for simulation and testing. Skilled in leveraging 
    CUDA for parallel processing and GPU acceleration to enhance the computational efficiency of complex robotic 
    algorithms.`,
  },
]


export const skills = [
  {
      title:"UI/UX",
      data:[
          {
              skill:"Figma",
              level:"Experienced",
          },
          {
              skill:"Canva",
              level:"Intermediate",
          },
      ]
  },
  {
      title:"Frontend Development",
      data:[
          {
              skill:"HTML",
              level:"Experienced",
          },
          {
              skill:"CSS",
              level:"Experienced",
          },
          {
              skill:"JavaScript",
              level:"Experienced",
          },
          {
              skill:"Tailwind",
              level:"Intermediate",
          },
          {
              skill:"Bootstrap",
              level:"Experienced",
          },
          {
              skill:"React",
              level:"Experienced",
          },
          {
              skill:"React Native",
              level:"Experienced",
          },
      ]
  },
  {
      title:"Backend Development",
      data:[
          {
              skill:"Node JS",
              level:"Experienced",
          },
          {
              skill:"MongoDB",
              level:"Intermediate",
          },
          {
              skill:"Ruby on Rails",
              level:"Experienced",
          },
          {
              skill:"Python",
              level:"Intermediate",
          },
          {
              skill:"MySQL",
              level:"Experienced",
          },
          {
            skill:"Appwrite",
            level:"Experienced",
        },
      ]
  },
]


export const projects = [
  {
    id: 1,
    title: 'Hellzone: 2D Action RPG',
    image: '../src/assets/Hellone.png',
    category: "Game Development",
    description: `A Top Down Action RPG Game`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "Python",
        icon: <SiPython />,
        iconColor: "skyblue",
      },
    ],
    video: '../public/assets/videos/Hellzone.mp4' // Add the video field here
  },
  {
    id:2,
    title: 'Synapse: Social Media App',
    image: '../src/assets/Synapse.png',
    category:"Web",
    description:`A Social Media App mixing the best features fo Reddit and Twitter. 
    Connect to other users with your own VR headset and see your friends as holograms 
    in your real world location`,
    demoLink: "https://google.com/",
    stack:[
      {
        name:"ReactJs",
        icon: <DiReact/>,
        iconColor:"skyblue",
      },
      {
        name:"NodeJs",
        icon: <FaNodeJs/>,
        iconColor:"green",
      },
      {
        name:"ExpressJs",
        icon: <SiExpress/>,
      },
      {
        name:"Appwrite",
        icon: <SiAppwrite/>,
        iconColor:"limegreen",
      },
    ],
    video: '../public/assets/videos/Synapse.mp4'
  },
]

export const clients = [
  {
    image:client1,
    name:'Samuel Eze',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
           veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
           exercitation ullamco laboris`
  },
  {
    image:client2,
    name:'Richael Linda',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:client3,
    name:'Gloria Chiwendu',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
           veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
           exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`
  },
  {
    image:client4,
    name:'Precious Stone',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },
  {
    image:client5,
    name:'Ndubisi John',
    review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
  },

];

export const contactOptions = [
  {
    title:"Email",
    value:"mradinuba@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    title:"Phone Number",
    value:"+2348149121918",
    icon:<IoCallOutline/>,
  },
  {
    title:"Address",
    value:"Gwarinpa, Abuja, Nigeria",
    icon:<IoLocationOutline/>,
  },
]

export const socialHandles = [
    {
      name:"Instagram",
      icon:<FaInstagram />,
      link:"",
    },
    {
      name:"Facebook",
      icon:<FaFacebookSquare/>,
      link:"",
    },
    {
      name:"Twitter",
      icon:<FaXTwitter/>,
      link:"",
    },
    {
      name:"Youtube",
      icon:<FaYoutube/>,
      link:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
    },
];

export const footer = [
  {
    title:"Explore",
    routes:[
      {name:"About Me",id:'about'},
      {name:"Skill",id:'skill'},
    ]
  },
  {
      title:"Trusted",
      routes:[
        {name:"Services",id:'services'},
        {name:"Projects",id:'projects'},
        {name:"Testimonials",id:'testimonials'},
      ]
    },
  {
      title:"Others",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
]

    