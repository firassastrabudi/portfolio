import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Firas Sastra",
  lastName: "Budi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Drone Engineer & Culinary Enthusiast",
  avatar: "/images/avatar.jpg",
  email: "firassastrabudi@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about traveling, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/firassastrabudi",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/firassastrabudi",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@firassastrabudi",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Advancing drone technology and savoring culinary artistry.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <p style={{ lineHeight: "1.7", margin: 0 }}>
      The gap between my world and theirs is clear {" "}
      <a
        href="https://akbarwicaksn.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "underline", fontWeight: 500 }}
      >
        "Drone's
      </a> are often used for expensive commercial purposes, things people like me may never experience. Meanwhile, in other parts of the world, drones support the economy, farming, transport, even war." Can drones help me dream big again? Could they one day bring me back to those fancy, exclusive restaurants?
  </p>
  ),
};


const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <p style={{ lineHeight: "1.7", margin: 0 }}>
        In my real life, {" "}
        <a
          href="https://akbarwicaksn.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", fontWeight: 500 }}
        >
          I
        </a> shifted careers from an automation engineer to roles I never imagined before. auditor, and data analyst. A 
        "second chance," as they call it in American education. But to be honest, i dont think
        this shift has been entirely positive. Science has so few admirers in this country.
        Long-Short story, i decided to become a lecturer, letting go of all the prestige, including the generous salary from my previous job.
        i still hope that one day, a drone might take me back to those fancy, exclusive restaurants i once enjoyed.
      </p>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Lion Group (Airlines Division)",
        timeframe: "2024 - 2025",
        role: "Auditor - Full Stack Data Analyst",
        achievements: [
          <>
            Audited end-to-end internal control processes to improve accuracy, efficiency, and drive continuous improvement. (First 4 months)
          </>,
          <>
            Developed multiple web-based systems using MongoDB, Golang, and Next.js — reducing a 2-day process to 30 minutes and optimizing other similar workflows. (Remaining period)
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Lion Air Group",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "ADR Group (Automotive Division)",
        timeframe: "2019 - 2024",
        role: "Automation Engineer",
        achievements: [
          <>
            Automated core processes across departments, reducing manual workload by 70%.
          </>,
          <>
            Contributed to workforce efficiency initiatives that led to a 60+ headcount reduction over 5 years.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universitas Trisakti",
        description: <>Master Of Engineering</>,
      },
      {
        name: "Purwadhika Digital Technology School",
        description: <>Data Analytics DALS04</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Web Development Stack",
        description: <>Proficient in utilizing MongoDB, Golang, and Next.js for building scalable, 
        high-performance web applications, specializing in creating efficient backend systems,
         RESTful APIs, and dynamic, server-rendered frontends to deliver seamless user experiences.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Full Stack Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "EDA Stack",
        description: <>Proficient in utilizing Excel, SQL, Python, Tableau, and Power BI for Exploratory Data Analysis (EDA),
        specializing in Uncovering Patterns, Analyzing Trends, And Delivering Actionable Insight through impactful visualizations to support.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Data Analysis Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "IoT Stack",
        description: <>Proficient in utilizing the MING stack (MQTT, InfluxDB, Node-RED, Grafana) for IoT solutions, specializing in creating
        efficient data pipelines, real-time monitoring systems, and interactive dashboard with exceptional speed and accuracy</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "IoT Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Electrical Engineering Stack",
        description: <>Proficient in utilizing EasyEDA for circuit design, PCB fabrication for creating reliable printed circuit boards, 
        and commissioning processes to ensure seamless deployment and testing of electronic systems, 
        specializing in delivering robust and efficient hardware solutions.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "IoT Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const music = {
  display: true,
  title: "Never Playing To Anybody",
  label: "Music",
  description: 'My "Never playing in front of anybody" Playlist',
  embedUrl: "https://open.spotify.com/embed/playlist/4hMdlf53ajrifAfhmfgrnf?utm_source=generator",
};


export { person, social, newsletter, home, about, blog, work, gallery, music };
