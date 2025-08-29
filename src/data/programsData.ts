import { Program } from './programSchema';

export const programsData: Program[] = [
  {
    id: "diploma-it-001",
    slug: "diploma-information-technology",
    title: "Diploma in Information Technology",
    level: "Diploma",
    shortSummary: "Comprehensive IT program covering fundamentals, cybersecurity, and digital marketing for career entry in technology fields.",
    longDescription: `
      <p>This program provides students with foundational and practical knowledge in IT systems, software, cybersecurity, and digital marketing.</p>
      <p>It is ideal for beginners or those seeking to enhance their skills for career entry in technology or related fields.</p>
      <p>The course blends theory and hands-on learning to prepare students for both higher education pathways and industry demands.</p>
    `,
    modules: [
      {
        title: "Introduction to IT and Data Information",
        description: "Overview of Information Technology concepts, understanding data types, storage, and usage in modern systems, introduction to digital transformation in industries"
      },
      {
        title: "Operating Systems and Applications",
        description: "Basics of operating systems (Windows, Linux), application software types and uses, file management and system utilities"
      },
      {
        title: "Internet and Email",
        description: "Internet fundamentals and web navigation, email communication, etiquette, and management tools, online safety and responsible usage"
      },
      {
        title: "Cyber Security",
        description: "Cyber threats and security challenges, introduction to encryption and password management, safe browsing, data privacy, and protection measures"
      },
      {
        title: "Computer Hardware",
        description: "Identifying components of a computer system, hardware assembly and maintenance basics, troubleshooting common hardware problems"
      },
      {
        title: "Software Fundamentals",
        description: "Software types: system, application, and utility programs, installing and updating software, basics of software troubleshooting"
      },
      {
        title: "Network Systems and Working with Data",
        description: "Basics of computer networking, data transfer and sharing between systems, cloud computing and collaborative tools"
      },
      {
        title: "Social Media and Digital Marketing",
        description: "Introduction to social media platforms, basics of digital marketing strategies and content creation, leveraging analytics for engagement and growth"
      }
    ],
    learningOutcomes: [
      "Understand the fundamentals of IT and computer systems",
      "Gain practical skills in using operating systems, software, and hardware",
      "Develop knowledge of cybersecurity and safe digital practices",
      "Learn basic networking and data handling techniques",
      "Acquire introductory skills in social media management and digital marketing"
    ],
    careerPaths: [
      "IT Support Assistant",
      "Junior Network Technician", 
      "Computer Hardware Technician",
      "Digital Marketing Assistant",
      "Administrative Assistant (IT-enabled roles)"
    ],
    duration: "12 months",
    fees: {
      total: 185000,
      currency: "LKR",
      installments: {
        count: 12,
        amount: 15417
      }
    },
    entryRequirements: [
      "Age limit: Above 16+",
      "Pass EDEXCEL or G.C.E O/L with 6 Credits",
      "Any other qualification approved by the Academic Administration of Amazon Campus"
    ],
    images: [
      "/src/assets/computer-lab.jpg",
      "/src/assets/science-lab.jpg"
    ],
    documents: [
      "/documents/diploma-it-brochure.pdf"
    ],
    accreditation: [
      {
        body: "University Grants Commission (UGC) Sri Lanka",
        type: "Recognition",
        certification: "UGC Recognized"
      },
      {
        body: "World Higher Education Database (WHED)",
        type: "Listing"
      }
    ],
    contacts: [
      {
        type: "admissions",
        email: "info@amazoncollege.lk",
        phone: "+94 114-386-126"
      }
    ],
    featured: true,
    category: "Information Technology"
  },
  {
    id: "diploma-teacher-training-001",
    slug: "diploma-teacher-training",
    title: "Diploma in Teacher Training",
    level: "Diploma",
    shortSummary: "Comprehensive teacher training program covering early childhood, primary education, and special needs teaching methodologies.",
    longDescription: `
      <p>Our Diploma in Teacher Training program prepares educators for various teaching environments and age groups.</p>
      <p>The program covers modern teaching methodologies, classroom management, and educational psychology.</p>
      <p>Specializations include Montessori & Early Childhood, Primary Education, and Special Child Education.</p>
    `,
    modules: [
      {
        title: "Educational Psychology",
        description: "Understanding child development, learning theories, and psychological aspects of education"
      },
      {
        title: "Teaching Methodologies", 
        description: "Modern teaching techniques, lesson planning, and curriculum development"
      },
      {
        title: "Classroom Management",
        description: "Effective classroom control, student engagement, and behavioral management strategies"
      },
      {
        title: "Early Childhood Development",
        description: "Specialized training for teaching young children, play-based learning, and developmental milestones"
      },
      {
        title: "Special Education",
        description: "Teaching children with special needs, inclusive education practices, and adaptive teaching methods"
      },
      {
        title: "Assessment and Evaluation",
        description: "Student assessment techniques, evaluation methods, and progress tracking"
      }
    ],
    learningOutcomes: [
      "Develop effective teaching methodologies for different age groups",
      "Understand child psychology and development stages",
      "Master classroom management and student engagement techniques",
      "Learn specialized approaches for early childhood and special education",
      "Acquire skills in curriculum development and lesson planning",
      "Understand assessment and evaluation processes"
    ],
    careerPaths: [
      "Primary School Teacher",
      "Early Childhood Educator",
      "Special Education Teacher",
      "Montessori Teacher",
      "Private Tutor",
      "Educational Coordinator"
    ],
    duration: "18 months",
    fees: {
      total: 210000,
      currency: "LKR",
      installments: {
        count: 18,
        amount: 11667
      }
    },
    entryRequirements: [
      "G.C.E A/L with 2 passes or equivalent",
      "G.C.E O/L with 6 credits including English and Mathematics",
      "Passion for teaching and working with children"
    ],
    images: [
      "/src/assets/teacher-training.jpg",
      "/src/assets/kids-program.jpg"
    ],
    documents: [
      "/documents/diploma-teacher-training-brochure.pdf"
    ],
    accreditation: [
      {
        body: "University Grants Commission (UGC) Sri Lanka",
        type: "Recognition"
      },
      {
        body: "Ministry of Education Sri Lanka",
        type: "Approval"
      }
    ],
    contacts: [
      {
        type: "academic",
        email: "info@amazoncollege.lk",
        phone: "+94 114-386-126"
      }
    ],
    featured: true,
    category: "Education"
  },
  {
    id: "hnd-business-management-001",
    slug: "hnd-business-management",
    title: "HND in Business Management",
    level: "HND",
    shortSummary: "UK-affiliated Higher National Diploma in Business Management covering all aspects of modern business operations and leadership.",
    longDescription: `
      <p>Our HND in Business Management is a UK-affiliated program that provides comprehensive training in business operations, management principles, and leadership skills.</p>
      <p>The program is designed to prepare students for management roles in various industries and provides a pathway to degree completion.</p>
      <p>Students gain practical experience through case studies, projects, and industry exposure.</p>
    `,
    modules: [
      {
        title: "Business Environment",
        description: "Understanding business contexts, economic factors, and organizational structures"
      },
      {
        title: "Marketing Essentials",
        description: "Marketing principles, consumer behavior, market research, and promotional strategies"
      },
      {
        title: "Managing People and Organizations",
        description: "Human resource management, organizational behavior, and leadership development"
      },
      {
        title: "Management Accounting",
        description: "Financial planning, budgeting, cost analysis, and management reporting"
      },
      {
        title: "Business Operations",
        description: "Operations management, supply chain, quality management, and process improvement"
      },
      {
        title: "Strategic Management",
        description: "Strategic planning, competitive analysis, and business development"
      }
    ],
    learningOutcomes: [
      "Understand fundamental business principles and operations",
      "Develop management and leadership capabilities",
      "Master financial analysis and accounting principles",
      "Learn marketing strategies and customer relationship management",
      "Acquire project management and operational skills",
      "Understand strategic planning and business development"
    ],
    careerPaths: [
      "Business Manager",
      "Operations Supervisor",
      "Marketing Coordinator", 
      "HR Assistant Manager",
      "Project Coordinator",
      "Business Analyst"
    ],
    duration: "24 months",
    fees: {
      total: 380000,
      currency: "LKR",
      installments: {
        count: 24,
        amount: 15833
      }
    },
    entryRequirements: [
      "G.C.E A/L with 3 passes or equivalent",
      "Relevant diploma with good grades",
      "English proficiency (written and spoken)"
    ],
    images: [
      "/src/assets/business-class.jpg",
      "/src/assets/student-lounge.jpg"
    ],
    documents: [
      "/documents/hnd-business-management-brochure.pdf"
    ],
    accreditation: [
      {
        body: "UK Awarding Body",
        type: "Affiliation",
        certification: "Pearson BTEC HND"
      },
      {
        body: "University Grants Commission (UGC) Sri Lanka",
        type: "Recognition"
      }
    ],
    contacts: [
      {
        type: "admissions",
        email: "info@amazoncollege.lk",
        phone: "+94 114-386-126"
      }
    ],
    featured: true,
    category: "Business Management"
  },
  {
    id: "ba-english-001",
    slug: "ba-english",
    title: "Bachelor of Arts in English",
    level: "Degree",
    shortSummary: "Comprehensive degree program in English literature, linguistics, and communication skills for career advancement in education and media.",
    longDescription: `
      <p>The Bachelor of Arts in English program offers a comprehensive study of English literature, linguistics, and communication skills.</p>
      <p>Students explore classical and contemporary literature while developing critical thinking and analytical writing abilities.</p>
      <p>The program prepares graduates for careers in education, media, publishing, and corporate communication.</p>
    `,
    modules: [
      {
        title: "English Literature Survey",
        description: "Overview of English literature from medieval to contemporary periods"
      },
      {
        title: "Linguistics and Language Structure",
        description: "Study of language systems, phonetics, syntax, and semantics"
      },
      {
        title: "Creative Writing",
        description: "Development of creative writing skills in various genres and styles"
      },
      {
        title: "Critical Theory and Analysis",
        description: "Literary criticism, theoretical approaches, and analytical methodologies"
      },
      {
        title: "Communication Skills",
        description: "Advanced written and oral communication, presentation skills"
      },
      {
        title: "Research Methodology",
        description: "Academic research methods, citation, and scholarly writing"
      }
    ],
    learningOutcomes: [
      "Demonstrate deep understanding of English literature and literary traditions",
      "Develop advanced written and oral communication skills",
      "Apply critical thinking and analytical skills to texts and contexts",
      "Conduct independent research in literary and linguistic topics",
      "Create original written works in various genres",
      "Understand language structure and linguistic principles"
    ],
    careerPaths: [
      "English Teacher/Lecturer",
      "Content Writer/Editor",
      "Journalist/Reporter",
      "Publishing Professional",
      "Communications Specialist",
      "Research Assistant"
    ],
    duration: "36 months",
    fees: {
      total: 720000,
      currency: "LKR",
      installments: {
        count: 36,
        amount: 20000
      }
    },
    entryRequirements: [
      "G.C.E A/L with 3 passes including English",
      "Minimum grade C in English at A/L",
      "Interview and aptitude test"
    ],
    images: [
      "/src/assets/language-class.jpg",
      "/src/assets/library-study.jpg"
    ],
    documents: [
      "/documents/ba-english-brochure.pdf"
    ],
    accreditation: [
      {
        body: "University Grants Commission (UGC) Sri Lanka",
        type: "Recognition",
        certification: "UGC Recognized Degree"
      },
      {
        body: "World Higher Education Database (WHED)",
        type: "Listing"
      }
    ],
    contacts: [
      {
        type: "academic",
        email: "info@amazoncollege.lk", 
        phone: "+94 114-386-126"
      }
    ],
    category: "English Language"
  },
  {
    id: "msc-psychology-001",
    slug: "msc-psychology",
    title: "Master of Science in Psychology",
    level: "Masters",
    shortSummary: "Advanced psychology program focusing on research, clinical practice, and specialized areas of psychological study.",
    longDescription: `
      <p>The Master of Science in Psychology program offers advanced study in psychological theory, research methods, and practical applications.</p>
      <p>Students can specialize in areas such as clinical psychology, educational psychology, or organizational psychology.</p>
      <p>The program emphasizes both theoretical knowledge and practical skills preparation for professional practice or doctoral studies.</p>
    `,
    modules: [
      {
        title: "Advanced Research Methods",
        description: "Quantitative and qualitative research methodologies, statistical analysis, and experimental design"
      },
      {
        title: "Cognitive Psychology",
        description: "Advanced study of cognitive processes, memory, perception, and learning"
      },
      {
        title: "Clinical Assessment and Intervention",
        description: "Psychological assessment techniques, therapeutic interventions, and case management"
      },
      {
        title: "Developmental Psychology",
        description: "Human development across lifespan, developmental disorders, and intervention strategies"
      },
      {
        title: "Social and Organizational Psychology",
        description: "Group dynamics, workplace psychology, and organizational behavior"
      },
      {
        title: "Thesis Research Project",
        description: "Independent research project under supervision, leading to thesis submission"
      }
    ],
    learningOutcomes: [
      "Conduct advanced psychological research using appropriate methodologies",
      "Apply psychological theories to real-world problems and contexts",
      "Demonstrate competency in psychological assessment and intervention",
      "Understand ethical principles and professional standards in psychology",
      "Develop specialization in chosen area of psychology",
      "Prepare for doctoral studies or professional practice"
    ],
    careerPaths: [
      "Clinical Psychologist",
      "Counseling Psychologist",
      "Research Psychologist",
      "Educational Psychologist",
      "Organizational Consultant",
      "Academic Researcher"
    ],
    duration: "24 months",
    fees: {
      total: 850000,
      currency: "LKR",
      installments: {
        count: 24,
        amount: 35417
      }
    },
    entryRequirements: [
      "Bachelor's degree in Psychology or related field with minimum Second Class",
      "Relevant work experience in psychology or related field preferred",
      "Research proposal and interview",
      "English proficiency certification"
    ],
    images: [
      "/src/assets/library-study.jpg",
      "/src/assets/campus-exterior.jpg"
    ],
    documents: [
      "/documents/msc-psychology-brochure.pdf"
    ],
    accreditation: [
      {
        body: "University Grants Commission (UGC) Sri Lanka",
        type: "Recognition",
        certification: "UGC Recognized Masters"
      },
      {
        body: "Sri Lanka Psychological Association",
        type: "Professional Recognition"
      }
    ],
    contacts: [
      {
        type: "academic",
        email: "info@amazoncollege.lk",
        phone: "+94 114-386-126"
      }
    ],
    category: "Psychology"
  },
  {
    id: "phd-psychology-001", 
    slug: "phd-psychology",
    title: "Doctor of Philosophy in Psychology",
    level: "PhD",
    shortSummary: "Doctoral program in psychology focusing on original research, advanced theory, and preparation for academic and research careers.",
    longDescription: `
      <p>The Doctor of Philosophy in Psychology program is designed for individuals seeking to conduct original research and contribute new knowledge to the field of psychology.</p>
      <p>The program combines advanced coursework with extensive research leading to a doctoral dissertation.</p>
      <p>Graduates are prepared for careers in academia, research institutions, and senior clinical or consulting positions.</p>
    `,
    modules: [
      {
        title: "Advanced Theoretical Foundations",
        description: "In-depth study of major psychological theories and their contemporary applications"
      },
      {
        title: "Research Design and Methodology",
        description: "Advanced research methods, experimental design, and statistical modeling"
      },
      {
        title: "Specialized Area Studies",
        description: "Intensive study in chosen specialization area (clinical, cognitive, social, etc.)"
      },
      {
        title: "Teaching and Supervision Skills",
        description: "Pedagogical training and supervision techniques for academic careers"
      },
      {
        title: "Professional Ethics and Standards",
        description: "Ethical considerations in research, practice, and professional development"
      },
      {
        title: "Dissertation Research",
        description: "Original research project culminating in doctoral dissertation"
      }
    ],
    learningOutcomes: [
      "Conduct original research contributing new knowledge to psychology",
      "Demonstrate mastery of psychological theory and research methods", 
      "Publish research findings in peer-reviewed academic journals",
      "Teach and supervise students in academic settings",
      "Apply advanced psychological knowledge to complex problems",
      "Maintain highest ethical standards in research and practice"
    ],
    careerPaths: [
      "University Professor/Researcher",
      "Senior Clinical Psychologist",
      "Research Director",
      "Policy Advisor",
      "Organizational Consultant",
      "Private Practice Specialist"
    ],
    duration: "48 months",
    fees: {
      total: 1200000,
      currency: "LKR",
      installments: {
        count: 48,
        amount: 25000
      }
    },
    entryRequirements: [
      "Master's degree in Psychology with minimum Upper Second Class",
      "Demonstrated research experience and publications preferred",
      "Research proposal and comprehensive interview",
      "Two academic references",
      "English proficiency certification"
    ],
    images: [
      "/src/assets/library-study.jpg",
      "/src/assets/campus-walkway.jpg"
    ],
    documents: [
      "/documents/phd-psychology-brochure.pdf"
    ],
    accreditation: [
      {
        body: "University Grants Commission (UGC) Sri Lanka",
        type: "Recognition",
        certification: "UGC Recognized PhD"
      },
      {
        body: "World Higher Education Database (WHED)",
        type: "Listing"
      }
    ],
    contacts: [
      {
        type: "academic",
        email: "info@amazoncollege.lk",
        phone: "+94 114-386-126"
      }
    ],
    category: "Psychology"
  }
];