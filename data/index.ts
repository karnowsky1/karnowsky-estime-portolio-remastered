export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2", // TODO: make this section more responsive, might want to use flex instead, seems to break around 1024px -1263px width, might want to consider using line-clamp-2 I used this in the projects secrtion to clamp the paragraph to 2 lines, md:col-span-2 --> sman across 2 lines on larger devices 
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building innovative React and Swift Applications",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Full-Stack E-Commerce App",
    des: "Explore my eCommerce application, designed with a focus on intuitive user experience, modern design, and reliable functionality to enhance online shopping.",
    img: "/ECommerce_Project.png",
    iconLists: ["/re.svg", "/next.svg", "/materialui.svg", "/tail.svg", "/ts.svg", "/stripe.svg", "/prisma.svg", "/mongodb.svg", "/firebase1.svg", "/googlecloud.svg" ],
    link: "https://e-store-prod.vercel.app/",
  },
  {
    id: 2,
    title: "Inventory Management App",
    des: "Simplify stock tracking and optimize operations with a user-friendly and reliable system.",
    img: "/invetory_management_project_5.png",
    iconLists: ["/re.svg", "/next.svg", "/redux.svg", "/materialui.svg", "/tail.svg", "/ts.svg", "/nodejs.svg","/prisma.svg", "/postgres.svg", "/aws.svg"],
    link: "https://main.d1jd0ipv9onxpf.amplifyapp.com/dashboard",
  },
  {
    id: 3,
    title: "Finance Dashboard App",
    des: "Clear insights, real-time data visualization, and intuitive tools for managing financial performance efficiently.",
    img: "/finance_dashboard_project_2.png",
    iconLists: ["/re.svg", "/redux.svg", "/materialui.svg", "/tail.svg", "/ts.svg", "/mongodb.svg"],
    link: "https://finance-dashboard-lovat-seven.vercel.app/",
  },
  {
    id: 4,
    title: "New Applications Coming Soon!",
    des: "Focusing on expanding my skills and showcasing innovative solutions that demonstrate my passion for development",
    img: "/work_in_progress_4.png",
    iconLists: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/karnowsky1",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Software Engineer - STI Computer Services",
    desc: "Developed a healthcare portal Web API controller through Entity framework that allowed users to manage appointments, prescriptions, health records, referrals, and communication between doctors and patients using RESTful API",
    className: "md:col-span-3",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "JavaScript Tutor - Wyzant",
    desc: "Mentored up to 12 clients per week to lead them to boot camp completion and job acquisition including full stack concepts and deployment practices",
    className: "md:col-span-3", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Software Engineer Intern - GeekHive",
    desc: "Implemented WCAG 2.0 AA compliance on a high-volume CMS application while improving accessibility by 40% on the web and mobile app",
    className: "md:col-span-3", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Software Engineer Intern - EmployeeChannel",
    desc: "Delivered feature improvements for an internal product designed to increase communication efficiency between users at a given company via React and Sass",
    className: "md:col-span-3",
    thumbnail: "/exp4.svg",
  },
];

export const testimonials = [
  {
    quote:
      "It was a real pleasure working with Karnowsky. He did a great job putting my thoughts into writing. I look forward to working with him again.",
    name: "AJ",
    title: "",
  },
  {
    quote:
      "Helped learn methodology, and solved problems with code with ease, has lots of knowledge to help effectively and efficiently. Very polite and professional.",
    name: "Reed",
    title: "",
  },
  {
    quote:
      "Karnowsky was great, he helped me break down my assignment step by step and reminded me of the importance of research when I came across something I was stuck on. This advice really helps me to feel less overwhelmed when it comes to my homework assignments. His explanations are thorough, straightforward, and easy to understand. He was very kind and did not make me feel like I was asking “dumb” questions at all. Thanks again!",
    name: "Lily",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Our lesson was on JavaScript. What I like about his teaching method, is the way he breaks bigger problems down, and made sure I understood the small workings. Overall, a great tutor.",
    name: "Justin",
    title: "",
  },
  {
    quote:
      "Karnowsky helped me find answers to my questions and then further explained anything I had additional questions about. I prefer this approach to simply being given the answer. It helped me feel more confident to find my own answers in the future. He was very patient, responsive, flexible, knowledgeable, and adapted to my needs and previous experience. All in all it was a great experience.",
    name: "Olivia",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "employeeChannel",
    img: "/employeeChannelLogo.webp",
    nameImg: "/employeeChannelLogo.webp",
  },{
    id: 2,
    name: "STI Computer Services",
    img: "/STIComputerServices.png",
    nameImg: "/STIComputerServices.png",
  },
  {
    id: 3,
    name: "wyzant",
    img: "/wyzantLogo.png",
    nameImg: "/wyzantLogo.png",
  },
  {
    id: 4,
    name: "geehive",
    img: "/geekhive.jpeg",
    nameImg: "/geekhive.jpeg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/karnowsky1"
  },
  {
    id: 2,
    img: "/facebook.svg",
    url: "https://www.facebook.com/karnowsky.estime/"
  },
  {
    id: 3,
    img: "/link.svg",
    url:"https://www.linkedin.com/in/karnowsky-estime/"
  },
];