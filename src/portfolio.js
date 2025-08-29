/* Personal Portfolio Configuration (developerFolio) — IMAGE-LESS SAFE VERSION */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/* ========== Splash Screen ========== */
const splashScreen = { enabled: true, animation: splashAnimation, duration: 2000 };

/* ========== Illustration toggle ========== */
const illustration = { animated: true };

/* ========== Summary & Greeting ========== */
const greeting = {
  username: "Your Name",
  title: "Hi, I'm Your Name 👋",
  subTitle: emoji(
    "Self-taught Developer 🚀 building AI-powered SaaS/ERP and automation tools with React · Node.js · Python · Bash."
  ),
  resumeLink: "https://raufa1.github.io/portfolio/resume.pdf",
  displayGreeting: true
};

/* ========== Social Media ========== */
const socialMediaLinks = {
  github: "https://github.com/yourusername",
  linkedin: "",
  twitter: "",
  gmail: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

/* ========== Skills Section ========== */
const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack · AI · Automation — clean CLIs, self-healing services, local→cloud fallbacks.",
  skills: [
    emoji("⚙️ Multi-tenant ERP və SaaS platformaları"),
    emoji("🤖 AI agentlər və CLI alətləri"),
    emoji("🔁 Local → Cloud ağıllı fallback, alias masking"),
    emoji("🔐 Təhlükəsiz API açar idarəetməsi (env, chmod 600)")
  ],
  softwareSkills: [
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "bash", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "database", fontAwesomeClassname: "fas fa-database" }
  ],
  display: true
};

/* ========== Education Section (no image) ========== */
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Moscow Polytechnic University",
      // logo: require("./assets/images/university.png"), // IMAGE REMOVED
      subHeader: "Bachelor in Management",
      duration: "2012 - 2018",
      desc:
        "Management üzrə rəsmi təhsil. Proqramlaşdırmanı isə özüm və AI alətlərinin köməyi ilə öyrənmişəm.",
      descBullets: []
    }
  ]
};

/* ========== Big / Featured Projects (no images) ========== */
const bigProjects = {
  title: "Featured Projects",
  subtitle: "Selected work I’m proud of",
  projects: [
    {
      // image: require("./assets/images/project.svg"), // IMAGE REMOVED
      image: "",
      projectName: "LLM Family Pack",
      projectDesc:
        "Local LiteLLM proxy + CLI wrappers (Claude & Smart) with automatic 'sonnet 4' masking, self-healing tools, and backup utility.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/yourusername/llm-family-pack" }
      ]
    },
    {
      image: "",
      projectName: "Smart CLI",
      projectDesc:
        "AI-powered CLI assistant for coding, automation and project orchestration.",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/yourusername/smart-cli" }
      ]
    }
  ],
  display: true
};

/* ========== Tech Stack proficiency bars ========== */
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "80%" },
    { Stack: "Backend", progressPercentage: "75%" },
    { Stack: "Programming", progressPercentage: "85%" }
  ]
};

/* ========== Work Experience (optional) ========== */
const workExperiences = {
  display: false, // istəsən true edib doldur
  experience: []
};

/* ========== Resume Section (REQUIRED BY TEMPLATE) ========== */
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume / CV",
  // Şablon sadəcə obyektin varlığını yoxlayır; link istəsən greeting.resumeLink-də də göstərə bilərsən
  display: false
};

/* ========== Open Source (optional) ========== */
const openSource = { showGithubProfile: "true", display: true };

/* ========== Achievements / Blogs / Talks / Podcast (optional) ========== */
const achievementSection = { title: "Achievements", subtitle: "", achievementsCards: [], display: false };
const blogSection       = { title: "Blogs", subtitle: "", blogs: [], display: false };
const talkSection       = { title: "Talks", subtitle: "", talks: [], display: false };
const podcastSection    = { title: "Podcast", subtitle: "", podcast: [], display: false };

/* ========== Contact & Twitter (optional) ========== */
const contactInfo    = { title: "Contact", subtitle: "Open to collaboration and OSS.", number: "", email_address: "", display: true };
const twitterDetails = { userName: "", display: false };

/* ========== Hireable badge (some components import this) ========== */
const isHireable = true;

/* ========== Exports ========== */
export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  resumeSection,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  techStack,
  isHireable
};

