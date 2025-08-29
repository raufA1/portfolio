/* Bilingual Personal Portfolio config (developerFolio) — image-less, AZ+EN */

// İkon emojilər üçün
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/* ---------- Helper: Lang seçimi ---------- */
function getLang() {
  // Default EN; brauzer varsa localStorage və ya navigator.language yoxla
  try {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("lang");
      if (saved === "az" || saved === "en") return saved;
      const nav = (navigator.language || "").toLowerCase();
      if (nav.startsWith("az")) return "az";
    }
  } catch (_) {}
  return "en";
}
const L = getLang();

/* ---------- Dil blokları: EN & AZ ---------- */

// EN content
const EN = {
  greeting: {
    username: "Rauf Alizada",
    title: "Hi, I'm Rauf",
    subTitle: emoji(
      "Self-taught developer 🚀 building AI-powered CLI tools & local→cloud infra (LiteLLM proxy, smart wrappers, self-healing services)."
    ),
    // GitHub Pages → public/resume-en.pdf
    resumeLink: "https://raufa1.github.io/portfolio/resume-en.pdf",
    displayGreeting: true
  },
  socialMediaLinks: {
    github: "https://github.com/raufA1",
    linkedin: "",
    twitter: "",
    gmail: "",
    facebook: "",
    medium: "",
    stackoverflow: "",
    display: true
  },
  skillsSection: {
    title: "What I do",
    subTitle:
      "Full-stack & DevTools — clean CLIs, self-healing services, alias masking and local→cloud fallbacks.",
    skills: [
      emoji("⚙️ AI-powered developer tooling (CLI, automation)"),
      emoji("🤖 Model alias masking (e.g., “sonnet 4”) & smart fallbacks"),
      emoji("🔐 Secure key management (env + chmod 600), systemd units"),
      emoji("🧱 LiteLLM Proxy with OpenAI/Anthropic-compatible API")
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
  },
  educationInfo: {
    display: true,
    schools: [
      {
        schoolName: "Moscow Polytechnic University",
        // logo: require("./assets/images/university.png"), // intentionally no image
        subHeader: "Bachelor in Management",
        duration: "2012 - 2018",
        desc:
          "Formal education in Management. Software engineering learned self-directedly with AI assistance.",
        descBullets: []
      }
    ]
  },
  bigProjects: {
    title: "Featured Projects",
    subtitle: "Selected work I’m proud of",
    projects: [
      {
        image: "", // keep empty to avoid missing file build errors
        projectName: "LLM Family Pack",
        projectDesc:
          "LiteLLM proxy + CLI wrappers (Claude & Smart) with automatic “sonnet 4” masking, self-healing tools, and backup utility.",
        footerLink: [
          { name: "GitHub Repo", url: "https://github.com/raufA1/llm-family-pack" }
        ]
      },
      {
        image: "",
        projectName: "Smart CLI",
        projectDesc:
          "AI-assisted CLI for coding, terminal automation, and project orchestration.",
        footerLink: [
          { name: "GitHub Repo", url: "https://github.com/raufA1/smart-cli" }
        ]
      }
    ],
    display: true
  },
  techStack: {
    viewSkillBars: true,
    experience: [
      { Stack: "Frontend/Design", progressPercentage: "80%" },
      { Stack: "Backend", progressPercentage: "75%" },
      { Stack: "Programming", progressPercentage: "85%" }
    ]
  },
  workExperiences: {
    display: false,
    experience: []
  },
  resumeSection: {
    title: "Resume",
    subtitle: "Download my resume / CV",
    display: false // şablon bunu yoxlayır; real link greeting.resumeLink-dədir
  },
  openSource: { showGithubProfile: "true", display: true },
  achievementSection: { title: "Achievements", subtitle: "", achievementsCards: [], display: false },
  blogSection:       { title: "Blogs", subtitle: "", blogs: [], display: false },
  talkSection:       { title: "Talks", subtitle: "", talks: [], display: false },
  podcastSection:    { title: "Podcast", subtitle: "", podcast: [], display: false },
  contactInfo: {
    title: "Contact",
    subtitle: "Open to collaboration and OSS.",
    number: "",
    email_address: "",
    display: true
  },
  twitterDetails: { userName: "", display: false },
  isHireable: true
};

// AZ content
const AZ = {
  greeting: {
    username: "Rauf Əlizadə",
    title: "Salam, mən Rauf",
    subTitle: emoji(
      "Özünü-öyrədən developer 🚀 — AI-driven CLI alətləri, local→cloud infrastruktur (LiteLLM proxy, smart wrapper-lər, self-healing servis)."
    ),
    // GitHub Pages → public/resume-az.pdf
    resumeLink: "https://raufa1.github.io/portfolio/resume-az.pdf",
    displayGreeting: true
  },
  socialMediaLinks: {
    github: "https://github.com/raufA1",
    linkedin: "",
    twitter: "",
    gmail: "",
    facebook: "",
    medium: "",
    stackoverflow: "",
    display: true
  },
  skillsSection: {
    title: "Nə edirəm",
    subTitle:
      "Full-stack & DevTools — təmiz CLI-lər, özünü bərpa edən servislər, alias maskalama və local→cloud fallback.",
    skills: [
      emoji("⚙️ AI əsaslı developer alətləri (CLI, avtomatlaşdırma)"),
      emoji("🤖 Model alias maskalama (məs: “sonnet 4”) & smart fallback"),
      emoji("🔐 Təhlükəsiz açar idarəetməsi (env + chmod 600), systemd xidmətləri"),
      emoji("🧱 OpenAI/Anthropic-kompatibıl LiteLLM Proxy")
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
  },
  educationInfo: {
    display: true,
    schools: [
      {
        schoolName: "Moscow Polytechnic University",
        subHeader: "Menecment üzrə Bakalavr",
        duration: "2012 - 2018",
        desc:
          "Rəsmi təhsil Menecment. Proqramlaşdırmanı özüm və AI alətlərinin köməyi ilə öyrənmişəm.",
        descBullets: []
      }
    ]
  },
  bigProjects: {
    title: "Seçilmiş layihələr",
    subtitle: "Qürur duyduğum işlər",
    projects: [
      {
        image: "",
        projectName: "LLM Family Pack",
        projectDesc:
          "LiteLLM proxy + CLI wrapper-lər (Claude & Smart) — avtomatik “sonnet 4” maskalama, özünü bərpa, backup utilitisi.",
        footerLink: [
          { name: "GitHub Repo", url: "https://github.com/raufA1/llm-family-pack" }
        ]
      },
      {
        image: "",
        projectName: "Smart CLI",
        projectDesc:
          "Kodlama, terminal avtomatlaşdırma və orkestrasiya üçün AI-assistent CLI.",
        footerLink: [
          { name: "GitHub Repo", url: "https://github.com/raufA1/smart-cli" }
        ]
      }
    ],
    display: true
  },
  techStack: {
    viewSkillBars: true,
    experience: [
      { Stack: "Frontend/Dizayn", progressPercentage: "80%" },
      { Stack: "Backend", progressPercentage: "75%" },
      { Stack: "Proqramlaşdırma", progressPercentage: "85%" }
    ]
  },
  workExperiences: {
    display: false,
    experience: []
  },
  resumeSection: {
    title: "CV",
    subtitle: "CV-ni yüklə",
    display: false
  },
  openSource: { showGithubProfile: "true", display: true },
  achievementSection: { title: "Uğurlar", subtitle: "", achievementsCards: [], display: false },
  blogSection:       { title: "Bloq", subtitle: "", blogs: [], display: false },
  talkSection:       { title: "Çıxışlar", subtitle: "", talks: [], display: false },
  podcastSection:    { title: "Podkast", subtitle: "", podcast: [], display: false },
  contactInfo: {
    title: "Əlaqə",
    subtitle: "Açıq mənbə və əməkdaşlığa açığam.",
    number: "",
    email_address: "",
    display: true
  },
  twitterDetails: { userName: "", display: false },
  isHireable: true
};

/* ---------- Common (hər iki dildə ortaq) ---------- */
const splashScreen = { enabled: true, animation: splashAnimation, duration: 2000 };
const illustration = { animated: true };

/* ---------- Aktiv dili seç və eyni adlarla export et ---------- */
const D = L === "az" ? AZ : EN;

const greeting          = D.greeting;
const socialMediaLinks  = D.socialMediaLinks;
const skillsSection     = D.skillsSection;
const educationInfo     = D.educationInfo;
const bigProjects       = D.bigProjects;
const techStack         = D.techStack;
const workExperiences   = D.workExperiences;
const resumeSection     = D.resumeSection;
const openSource        = D.openSource;
const achievementSection= D.achievementSection;
const blogSection       = D.blogSection;
const talkSection       = D.talkSection;
const podcastSection    = D.podcastSection;
const contactInfo       = D.contactInfo;
const twitterDetails    = D.twitterDetails;
const isHireable        = D.isHireable;

/* ---------- Exports (şablonun gözlədiyi kimi) ---------- */
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

