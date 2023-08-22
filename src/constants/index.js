import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    java,
    html,
    css,
    reactjs,
    python,
    tailwind,
    cloud,
    codechef,
    snsps,
    mdu,
    nodejs,
    mongodb,
    git,
    figma,
    c,
    cpp,
    xml,
    php,
    sql,
    mysql,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    // {
    //   id: "work",
    //   title: "Work",
    // },
    // {
    //   id: "contact",
    //   title: "Contact",
    // },
  ];

  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    
    // {
    //   name: "sql",
    //   icon: sql,
    // },
    // {
    //   name: "mysql",
    //   icon: mysql,
    // },
    
    // {
    //   name: "xml",
    //   icon: xml,
    // },
    
    {
      name: "c++",
      icon: cpp,
    },
    // {
    //   name: "c",
    //   icon: c,
    // },
    {
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    },
    
    // {
    //   name: "php",
    //   icon: php,
    // },
  ]

  const educations = [
    {
      title: "Class 10 ",
      course: "",
      school_name: "CBSE Board",
      icon: snsps,
      iconBg: "#FFF",
      date: "2018 - 2019",
      points: [
        "Scored 94.6% in Class 10th CBSE board examinations.",
        "Had 5 Core subjects with Financial Manangement as my 6th Subject.",
        "Represented my school in many Inter-School Events and won a great deal of competitions.",
      ],
    },
    {
      title: "Class 12 ",
      course: "(Non-Medical with Computer Science)",
      school_name: "CBSE Board",
      icon: snsps,
      iconBg: "#FFF",
      date: "2020 - 2021",
      points: [
        "Scored 95.6% in Class 12th Board examinations.",
        "Opted for Non-Medical with Computer Science in class 11th with Physical Education being my 6th Subject.",
        "Won many Science and Maths olympiads during this session.",
      ],
    },
    {
      title: "Bachelor of Technology",
      course: "(Computer Science Engineering)",
      school_name: "Maharshi Dayanand University",
      icon: mdu,
      iconBg: "#FFF",
      date: "2021 - 2025",
      points: [
        "A third year student of B.Tech (C.S.E.).",
        "Scored 9.13 SGPA in previous semester and total of 8.9 SGPA in all the semesters.",
        "Won the first position in UIET coding hackathon.",
      ],
    },
  ]
  const experiences = [
    {
      title: "Google Cloud Facilitator Program 2022",
      company_name: "Google Cloud",
      icon: cloud,
      iconBg: "#383E56",
      // date: "March 2020 - April 2021",
      points: [
        "I participated in Google Cloud facilitator Program 2022",
        "It was a great experience with a lot to learn about",
        "In this I was given a virtual environment where we completed our Qwiklabs",
        "Upon completion of the program, I was awarded with swags",
      ],
    },
    {
      title: "3 Star Coder",
      company_name: "CodeChef",
      icon: codechef,
      iconBg: "#E6DEDD",
      // date: "Jan 2021 - Feb 2022",
      points: [
        "I am a 3 star Coder on CodeChef",
        "I have solved more than 200 questions on CodeChef",
        "I have participated in many contest and I had 107th global rank in the last contest out of 5000 participants in my division",
        "I have a global rank of 19153 on CodeChef",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, educations, technologies, experiences, testimonials, projects };