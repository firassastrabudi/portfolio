import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Firas Sastra",
  lastName: "Budi",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Drone Technologist & Culinary Explorer",
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
    link: "https://github.com/once-ui-system/nextjs-starter",
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
  headline: <>Crafting unmanned skies and savoring hidden culinary gems.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
      <>
        I'm Firas, a persona of{" "}
        <a
          href="https://akbarwicaksn.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", fontWeight: 500 }}
        >
          Akbarwicaksn
        </a>
        - a Lecturer at{" "}
        <Logo
          icon="/trademarks/wordmark-dark.svg"
          style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
        />, where I focus on developing unmanned aerial systems. Outside of work, I explore side projects and seek out hidden culinary gems with thoughtfully crafted dishes.
      </>

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
      <>
        Firas is a persona of{" "}
        <a
          href="https://akbarwicaksn.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", fontWeight: 500 }}
        >
          Akbarwicaksn
        </a>
        , a Lecturer specializing in drone development and control systems. Outside his passion for unmanned aerial systems, Firas is a culinary explorer — often seeking out hidden gems and refined eateries that serve exceptional and thoughtfully crafted dishes.
      </>
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
        title: "EDA Stack",
        description: <>Proficient in utilizing Excel, SQL, Python, Tableau, and Power BI for Exploratory Data Analysis (EDA),
        specializing in Uncovering Patterns, Analyzing Trends, And Delivering Actionable Insight through impactful visualizations to support.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
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
            alt: "Project image",
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
