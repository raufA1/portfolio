/* Personal Portfolio Configuration File */

// Emoji package
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration
const illustration = {
  animated: true
};

// Greeting Section
const greeting = {
  username: "",Rauf Alizada
  title: "Hi all, I'm Your Name 👋",
  subTitle: emoji(
    "A passionate Developer 🚀 experienced in building AI-powered SaaS, ERP systems, and automation tools with React / Node.js / Supabase / Python / Bash."
  ),
  resumeLink: "", // CV link varsa əlavə et
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/raufA1",
  linkedin: "https://www.linkedin.com/in/alizadarauf",
  gmail: "youremail@gmail.com",
  facebook: "alizadarauf1@gmail.com",
  twitter: "",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Developer & AI Enthusiast",
  skills: [
    emoji("⚡ Multi-tenant ERP və SaaS platformalarının hazırlanması"),
    emoji("⚡ AI agent və CLI alətlərinin inkişafı"),
    emoji("⚡ Google Sheets / Puppeteer / Automation skriptləri"),
    emoji("⚡ React, Node.js, Supabase və Python əsaslı həllər")
  ],
  softwareSkills: [
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "bash", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "database", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Moscow Polytechnic University",
      logo: require("./assets/images/university.png"),
      subHeader: "Bachelor in Management",
      duration: "2012-2018",
      desc: "Background in Management, but my true passion led me to technology. I am a self-taught developer, learning programming and software engineering with the help of AI tools and continuous practice.
    }
  ]
};

// Big Projects
const bigProjects = {
  title: "Big Projects",
  subtitle: "AI və ERP əsaslı həllərim",
  projects: [
    {
      projectName: "LLM Family Pack",
      projectDesc: "Local LiteLLM proxy + CLI wrappers (Claude & Smart) with automatic masking.",
      footerLink: [{ name: "GitHub Repo", url: "https://github.com/yourusername/llm-family-pack" }]
    },
    {
      projectName: "Smart CLI",
      projectDesc: "AI-powered CLI assistant for coding, automation and project orchestration.",
      footerLink: [{ name: "GitHub Repo", url: "https://github.com/yourusername/smart-cli" }]
    }
  ],
  display: true
};

// Tech Stack proficiency bars
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "80%" },
    { Stack: "Backend", progressPercentage: "75%" },
    { Stack: "Programming", progressPercentage: "85%" }
  ]
};

// Export all configs
export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  techStack
};

