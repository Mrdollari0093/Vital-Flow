import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Mail,
  MapPin,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
];

const experience = [
  {
    date: "January 2024 – June 2024",
    title: "Sr. Machine Learning Engineer",
    subtitle: "Love For Data, Rawalpindi, Pakistan",
    points: [
      "Worked on Large Language Models (LLMs) for text summarization and information extraction, enhancing content comprehension.",
      "Implemented text classification models using HuggingFace transformers (BERT, RoBERTa) to analyze textual data, including sentiment analysis tasks.",
    ],
  },
  {
    date: "October 2022 – December 2023",
    title: "Machine Learning Engineer",
    subtitle: "Datacrypt, Remote, UAE",
    points: [
      "Developed intelligent chatbots using the RASA Framework, improving user interaction and feedback collection.",
      "Designed and maintained data automation pipelines, ensuring efficient data handling and processing.",
      "Deployed multiple machine learning applications on AWS, Azure, and GCP, ensuring scalability and reliability.",
    ],
  },
  {
    date: "April 2021 – May 2022",
    title: "Machine Learning Engineer",
    subtitle: "QLU.ai, Islamabad, Pakistan",
    points: [
      "Enhanced company's product with machine learning-based components, focusing on NLP for better user engagement.",
      "Trained and deployed NLP models for text classification and analysis, including sentiment analysis models.",
      "Conducted data engineering tasks on textual data to improve model performance.",
    ],
  },
];

const education = [
  {
    date: "Sep 2019 – 2023",
    title: "MS in Computer Science (18 years)",
    subtitle:
      "National University of Sciences and Technology (NUST), Islamabad, Pakistan",
    details: [
      "CGPA: 3.90",
      "Core Courses: Advanced Algorithms Analysis, Mathematical Methods for Computing, Theory of Computation, Operating Systems",
      "Elective Courses: Machine Learning, Deep Learning, Data Mining, Natural Language Processing (NLP)",
    ],
  },
  {
    date: "Oct 2015 – Mar 2018",
    title: "M.Sc in Computer Science (16 years)",
    subtitle: "University of Peshawar, Peshawar, Pakistan",
    details: [
      "Marks: 80.58%",
      "Courses: Data Structures, Algorithms, Databases, Networking, C++, E-Commerce, Digital Logic Design, Software Engineering, Compiler, Artificial Intelligence, Operating Systems",
    ],
  },
  {
    date: "Oct 2013 – August 2015",
    title: "Bachelor of Computer Science (14 years)",
    subtitle: "Bacha Khan University Charsadda, Charsadda, Pakistan",
    details: ["Courses: Computer Science, Mathematics-A, Physics"],
  },
];

const teaching = [
  {
    date: "March 3, 2025 – March 28, 2025",
    title: "Instructor – 4-Week Python Online Course",
    subtitle: "Python FREE Online Ramzan Course 2025, Remote, Worldwide",
    points: [
      "Delivered a 4-week online Python programming course from beginner to advanced level during the month of Ramzan.",
      "Covered foundational to advanced Python topics through live sessions, including real-time coding, assignments, and quizzes.",
      "Used Google Classroom, Google Meet, and Google Chat for content delivery and interaction with students.",
      "Provided all materials—slides, code examples, assignments, and quizzes—open-source on GitHub.",
      "GitHub Repository: github.com/ShaidaMuhammad/Python-Free-Ramzan-Course-2025",
    ],
  },
  {
    date: "Sept 2018 – March 2019",
    title: "Visiting Faculty – Computer Science",
    subtitle:
      "Government Shaheed Rizwan Sareer Higher Secondary School, Charsadda, Pakistan",
    points: [
      "Taught Computer Science to F.Sc students with a focus on both theory and practical programming.",
      "Conducted coding practice sessions in the computer lab to reinforce programming concepts.",
      "Assigned and evaluated assignments and quizzes to monitor student progress.",
      "Managed attendance records and maintained classroom discipline and engagement.",
    ],
  },
];

const skills = [
  {
    title: "Programming Languages & Frameworks",
    items: ["Python", "Java", "C++", "Flask", "Django", "FastAPI"],
  },
  {
    title: "Machine Learning Libraries",
    items: [
      "PyTorch",
      "Scikit-learn",
      "NLTK",
      "SciPy",
      "Numpy",
      "Pandas",
      "TensorFlow",
      "Keras",
      "HuggingFace",
    ],
  },
  {
    title: "Other Skills",
    items: ["Git", "GitHub", "GitLab", "SQL", "Linux"],
  },
];

const projects = [
  {
    title: "Voice-Based AI Assistant for Elderly",
    tech: ["Phi-3.5", "Open Source TTS/STT"],
    description:
      "Developed a voice-based AI assistant system designed to support elderly individuals by answering queries related to their health, medicines, and other relevant topics. This system utilized the Phi-3.5 model and integrated various open-source text-to-speech and speech-to-text models to create a comprehensive pipeline. The assistant functions similarly to Siri, providing voice-activated responses to help users manage their daily needs and inquiries.",
  },
  {
    title: "Document Summarization System",
    tech: ["Django", "PyTorch", "Meta LLAMA-2", "Quantized Model"],
    description:
      "Developed an advanced document summarization system using Meta LLAMA-2 integrated into a Django-based web app. This project, conducted in a secure environment with limited resources, involved summarizing documents of varying lengths and formats—from a few sentences to hundreds of pages. Leveraging a quantized Meta LLAMA-2 13B model and collaborating closely with Django and DevOps teams, I ensured efficient processing and accurate summaries tailored to specific formats and requirements.",
  },
  {
    title: "Domain Classification System",
    tech: ["PyTorch", "roBERTa", "Synthetic Data", "Pandas"],
    description:
      "Developed a domain classification system for a complex document dataset with nearly 100 domains. Overcame challenges of limited and noisy labeled data by generating synthetic data and fine-tuning roBERTa base models. Designed a hierarchical system with 16 parent models for initial broad domain classification and various child models for subdomain classification, achieving around 80% accuracy.",
  },
  {
    title: "Sentiment Analysis System",
    tech: ["PyTorch", "roBERTa", "Pandas"],
    description:
      "Developed a Sentiment Analysis model to classify paragraphs within documents into five categories: negative, extreme negative, neutral, positive, and extreme positive. This model provided detailed sentiment insights for document content, enhancing the ability to understand and interpret textual data effectively.",
  },
  {
    title: "Data Processing Pipeline System",
    tech: ["Python", "Numpy", "Pandas", "lxml"],
    description:
      "Designed and implemented a data processing pipeline system for the Azadea Group, including Azadea, Decathlon, Adidas, etc. The system handled over 10GB of XML files daily, generating multiple CSV and XML files. Faced with the challenge of limited hardware (8GB RAM on a Windows laptop), I utilized creative solutions to sequentially process data, avoiding memory overload.",
  },
  {
    title: "Message Health Checker",
    tech: ["PyTorch", "Transformers", "RoBERTa", "Numpy", "Pandas"],
    description:
      'Developed "Message Health Checker," a sophisticated roBERTa-based classification system for LinkedIn messages. This tool categorizes messages into 5 multi-label categories with 5 ranks each, assessing tone and effectiveness. It empowers users to craft highly personalized messages, boosting engagement by 10x and tracking campaign success with detailed conversion metrics.',
  },
  {
    title: "Message Assistant",
    tech: [
      "PyTorch",
      "Scikit-learn",
      "Transformers",
      "BERT",
      "RoBERTa",
      "Fasttext",
      "Numpy",
    ],
    description:
      "Developed a multiclass multilabel text classification model for job advertisement messages sent by recruiters on LinkedIn to job candidates. The classification determines the quality of the message and uses an AI-based text assistant. This project is a component of QLU.ai's primary product.",
  },
  {
    title: "Job Description Splitting into Sections",
    tech: ["Python", "NLTK"],
    description:
      "Created a hybrid approach algorithm to split job descriptions into logical sections. This component works as an assistant to improve the precision and recall of other components of QLU.ai's primary product.",
  },
  {
    title: "Job Description Sections Classification",
    tech: ["PyTorch", "HuggingFace", "Transformers"],
    description:
      "Trained transformer-based models such as BERT, RoBERTa, and XLNet to classify each section of a job description. This helper component increases the accuracy of other components of QLU.ai's primary product, thereby enhancing customer trust in the product.",
  },
  {
    title: "Text Summarization, Paraphrasing, and Grammar Correction",
    tech: ["HuggingFace", "PyTorch"],
    description:
      "Researched pre-trained models with good accuracy for paraphrasing, text summarization, and grammar correction. These models serve as helper components for QLU.ai's message generation feature.",
  },
  {
    title: "Conversational AI System (Chatbot)",
    tech: ["RASA Framework"],
    description:
      "Developed a conversational AI system to handle communication between recruiters and candidates on LinkedIn.",
  },
  {
    title: "Pokémon Image Classification",
    tech: ["PyTorch", "Numpy"],
    description:
      "Academic Project: Applied Feed-Forward Neural Network (FFNN) and Convolutional Neural Network (CNN) to classify Pokémon images into different categories.",
  },
  {
    title: "Names Generation",
    tech: ["PyTorch", "NLTK"],
    description:
      "Academic Project: Developed a text generation model based on RNN to generate names.",
  },
  {
    title: "Generating Meaningful Word Embeddings",
    tech: ["Python", "Numpy", "SciPy"],
    description:
      "Academic Project: Trained Skip-gram, CBoW, and SVD models on a custom dataset to generate meaningful word embeddings.",
  },
  {
    title: "Deployments on Cloud",
    tech: ["AWS", "Azure", "GCP", "EC2"],
    description:
      "Deployed various services on cloud hosting platforms like AWS, GCP, and Azure. Developed scalable data pipelines using AWS and Azure services. Utilized EC2 instances with external FTP, S3 connected to AWS Lambda for data processing, and Azure Virtual Machines with Azure Functions linked to Blob Storage for efficient data handling. Integrated GitHub Actions as a CI/CD pipeline to automate deployment and streamline workflows across both cloud environments.",
  },
];

const conferencePapers = [
  {
    title:
      "Enhanced Human Activity Recognition using Inertial Sensor Data from Smart Wearables: A Neural Network Approach with Residual Connections",
    href: "https://doi.org/10.1109/ICECT61618.2024.10581358",
    status: "Published",
  },
  {
    title:
      "Mukhtasir-Khail-Net: An Ultra Efficient Convolutional Neural Network for Sports Activity Recognition with Wearable Inertial Sensors",
    href: "https://doi.org/10.1109/ICoDT262145.2024.10740217",
    status: "Published",
  },
  {
    title:
      "Paying Attention to Human Activities: Recognizing Daily Activities with an Attention-based Neural Network and Inertial Sensors",
    href: "https://doi.org/10.1109/ICIC63915.2024.11116432",
    status: "Published",
  },
  {
    title:
      "Spak-Net: A Lightweight Convolutional Neural Network for Activity Recognition with Wearable Inertial Sensors",
    href: "https://doi.org/10.1109/ComTech65062.2025.11034469",
    status: "Published",
  },
  {
    title:
      "Machine Learning Approaches for Forecasting the Strength of Concrete Incorporating Fly Ash and Marble Slurry Waste",
    href: "#",
    status: "Accepted",
  },
];

const journalPapers = [
  {
    title:
      "Enhancing Recruiter Outreach: Predicting Job Ad Quality with Advanced Machine Learning and NLP Models",
    href: "https://doi.org/10.47852/bonviewAIA52024083",
    status: "Published",
  },
  {
    title:
      "From Steps to Sentiments: Cross-Domain Transfer Learning for Activity-Based Emotion Detection in Wearable IoT Systems",
    href: "https://doi.org/10.1109/JIOT.2026.3666469",
    status: "Published",
  },
];

const awards = [
  {
    title: "Stoori da Pakhtunkhwa (Stars of the Pukhtunkhwa) Scholarship",
    org: "BISE Peshawar",
    description:
      "Secured 15th position among the Top 20 students from Government Colleges in BISE Peshawar.",
    date: "January 2014",
  },
  {
    title: "Top 1% in GAT General Test",
    org: "National Testing Service",
    description:
      "GAT is taken by all graduated students in Pakistan. The GAT Test is a requirement for applying for a Master's Degree (MS) in Pakistan. Scored 83 out of 100 marks with a 99.62 percentile.",
    date: "January 2019",
  },
];

const certifications = [
  "Natural Language Processing Specialization on Coursera [L9XZX72XDF2A]",
  "Natural Language Processing with Classification and Vector Spaces [HV2BR2GHE7SU]",
  "Natural Language Processing with Probabilistic Models [9ZKN4QEUBSDC]",
  "Natural Language Processing with Sequence Models [Z84QTPRB9C6L]",
  "Natural Language Processing with Attention Models [7SYPZ5D8DPDN]",
  "Introduction to Large Language Models [LEKT5FXJHJ56]",
  "Generative AI with Large Language Models [RBXM49D5MZH4]",
  "Build Basic Generative Adversarial Networks (GANs) [Z7LPD7T6M3A4]",
  "Introduction to Self-Driving Cars [5AYN5M4FG8LW]",
  "What is Data Science? [XDT4LQRWLGNB]",
  "Python Essentials for MLOps [96WYAFV6J2WJ]",
  "AI For Everyone [46G53XPMEA6S]",
  "How Google does Machine Learning [G3HM7DJ4XG5Z]",
  "Artificial Intelligence on Microsoft Azure [2Q55W93P5JPL]",
  "Introduction to Deep Learning [UF89T3S2QVQG]",
  "Neural Networks and Deep Learning [LVB52JUQ9HU7]",
  "Supervised Machine Learning: Regression and Classification [Y7ECGZDYCVWY]",
  "Mathematics for Machine Learning: Linear Algebra [RYF7JRYNYMJS]",
];

function SectionTitle({ children }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-slate-800">{children}</h2>
      <div className="mx-auto mt-3 h-1 w-20 rounded bg-rose-600" />
    </div>
  );
}

function Timeline({ items, type = "points" }) {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute left-6 top-0 h-full w-0.5 bg-cyan-200 md:left-1/2 md:-translate-x-1/2" />
      <div className="space-y-8">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={`${item.title}-${index}`}
              className={`relative w-full md:flex ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="absolute left-6 top-6 h-4 w-4 -translate-x-1/2 rounded-full bg-rose-600 ring-4 ring-white md:left-1/2 md:-translate-x-1/2" />

              <div className="ml-14 w-[calc(100%-3.5rem)] md:ml-0 md:w-[calc(50%-2rem)]">
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <div className="mb-2 font-medium text-rose-600">{item.date}</div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-800">
                    {item.title}
                  </h3>
                  <div className="mb-4 italic text-sky-700">{item.subtitle}</div>

                  {type === "points" && item.points && (
                    <ul className="list-disc space-y-2 pl-5 text-slate-700">
                      {item.points.map((point, i) => (
                        <li key={i}>
                          {point.includes("github.com/ShaidaMuhammad/Python-Free-Ramzan-Course-2025") ? (
                            <>
                              GitHub Repository:{" "}
                              <a
                                className="text-rose-600 hover:text-rose-700"
                                href="https://github.com/ShaidaMuhammad/Python-Free-Ramzan-Course-2025"
                                target="_blank"
                                rel="noreferrer"
                              >
                                github.com/ShaidaMuhammad/Python-Free-Ramzan-Course-2025
                              </a>
                            </>
                          ) : (
                            point
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {type === "details" && item.details && (
                    <div className="space-y-2 text-slate-700">
                      {item.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, href) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      const top = target.offsetTop - 70;
      window.scrollTo({ top, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-5">
          <nav className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold text-rose-600">Shaida Muhammad</div>

            <ul className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="font-medium text-slate-800 transition hover:text-rose-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              className="md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="h-7 w-7 text-slate-800" />
              ) : (
                <Menu className="h-7 w-7 text-slate-800" />
              )}
            </button>
          </nav>
        </div>

        {menuOpen && (
          <div className="border-t bg-white md:hidden">
            <ul className="flex flex-col items-center gap-6 px-5 py-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-lg font-medium text-slate-800 transition hover:text-rose-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="bg-slate-800 px-5 pb-16 pt-32 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-4 text-5xl font-bold text-slate-900 sm:text-6xl">
            Shaida Muhammad
          </h1>
          <h2 className="mb-8 text-2xl font-normal text-cyan-200 sm:text-3xl">
            Machine Learning Engineer
          </h2>

          <div className="mb-8 flex flex-wrap justify-center gap-6 text-cyan-200">
            <a
              href="mailto:shaidasherpao@gmail.com"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Mail className="h-5 w-5" />
              shaidasherpao@gmail.com
            </a>

            <a
              href="#"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <MapPin className="h-5 w-5" />
              Islamabad, Pakistan
            </a>

            <a
              href="https://www.linkedin.com/in/shaidamuhammad"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
              Linkedin.com/in/shaidamuhammad
            </a>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="inline-block rounded-md bg-rose-600 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-rose-700"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>About Me</SectionTitle>
          <div className="mx-auto max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
            <p>
              I am a dedicated and analytical Machine Learning Engineer with
              extensive experience in developing and deploying NLP and
              classification models. My background includes hands-on work with
              sentiment analysis, text classification, and large language models
              (LLMs), such as Meta LLAMA-2 and Phi-3.5, all of which are
              crucial for understanding and analyzing data.
            </p>
            <p>
              I possess a strong foundation in data engineering and machine
              learning, demonstrated through various projects involving text
              summarization, classification, and conversational AI. My
              expertise in leveraging transformer-based models allows me to
              extract meaningful insights from complex data sets.
            </p>
            <p>
              I am committed to continuous learning and staying updated with the
              latest research in machine learning. I thrive in collaborative
              environments and am eager to contribute to projects that require
              technical proficiency and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>Work Experience</SectionTitle>
          <Timeline items={experience} type="points" />
        </div>
      </section>

      {/* Education */}
      <section id="education" className="bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>Education</SectionTitle>
          <Timeline items={education} type="details" />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div
                key={group.title}
                className="rounded-xl bg-white p-6 shadow-md"
              >
                <h3 className="mb-4 border-b-2 border-cyan-200 pb-2 text-xl font-semibold text-slate-800">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-cyan-100 px-4 py-2 text-sm text-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-slate-800">
                    {project.title}
                  </h3>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="leading-7 text-slate-700">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>Research Publications</SectionTitle>

          <h3 className="mb-4 text-2xl font-semibold text-slate-800">
            Conference Papers
          </h3>
          <div className="mb-10 space-y-5">
            {conferencePapers.map((paper) => (
              <div key={paper.title} className="rounded-xl bg-white p-6 shadow-md">
                <h4 className="flex flex-wrap items-center gap-3 text-lg font-medium text-slate-800">
                  <a
                    href={paper.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-800 transition hover:text-rose-600"
                  >
                    {paper.title}
                  </a>
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs text-slate-800">
                    {paper.status}
                  </span>
                </h4>
              </div>
            ))}
          </div>

          <h3 className="mb-4 text-2xl font-semibold text-slate-800">
            Journal Papers
          </h3>
          <div className="space-y-5">
            {journalPapers.map((paper) => (
              <div key={paper.title} className="rounded-xl bg-white p-6 shadow-md">
                <h4 className="flex flex-wrap items-center gap-3 text-lg font-medium text-slate-800">
                  <a
                    href={paper.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-800 transition hover:text-rose-600"
                  >
                    {paper.title}
                  </a>
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs text-slate-800">
                    {paper.status}
                  </span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section id="teaching" className="bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>Teaching Experience</SectionTitle>
          <Timeline items={teaching} type="points" />
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>Awards</SectionTitle>
          <div className="mx-auto max-w-4xl space-y-6">
            {awards.map((award) => (
              <div key={award.title} className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="mb-2 text-xl font-semibold text-slate-800">
                  {award.title}
                </h3>
                <div className="mb-2 text-sky-700">{award.org}</div>
                <p className="mb-2 text-slate-700">{award.description}</p>
                <p className="text-sm text-slate-500">{award.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle>Certifications</SectionTitle>
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-4 text-2xl font-semibold text-slate-800">
              Coursera Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert} className="rounded-xl bg-white p-5 shadow-md">
                  <p className="text-slate-700">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionTitle>Get In Touch</SectionTitle>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-lg leading-8 text-slate-700">
              I'm currently looking for new opportunities in machine learning
              and NLP. Whether you have a question or just want to say hi, I'll
              try my best to get back to you!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:shaidasherpao@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-rose-600 px-6 py-3 font-medium text-white transition hover:bg-rose-700"
              >
                <Mail className="h-5 w-5" />
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/shaidamuhammad"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-sky-700 px-6 py-3 font-medium text-white transition hover:bg-sky-800"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 px-5 py-8 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-6 flex flex-wrap justify-center gap-6">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
              className="text-cyan-200 transition hover:text-white"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={(e) => handleSmoothScroll(e, "#experience")}
              className="text-cyan-200 transition hover:text-white"
            >
              Experience
            </a>
            <a
              href="#education"
              onClick={(e) => handleSmoothScroll(e, "#education")}
              className="text-cyan-200 transition hover:text-white"
            >
              Education
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
              className="text-cyan-200 transition hover:text-white"
            >
              Projects
            </a>
            <a
              href="#publications"
              onClick={(e) => handleSmoothScroll(e, "#publications")}
              className="text-cyan-200 transition hover:text-white"
            >
              Publications
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="text-cyan-200 transition hover:text-white"
            >
              Contact
            </a>
          </div>

          <p className="text-sm text-cyan-200">
            © 2025 Shaida Muhammad. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-rose-600 text-white shadow-lg transition ${
          showTop
            ? "visible opacity-100"
            : "invisible opacity-0"
        } hover:bg-rose-700`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}