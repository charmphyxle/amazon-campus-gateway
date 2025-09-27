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
  },
  // TVEC Programs
  {
    id: "tvec-counselling-psychology-001",
    slug: "tvec-diploma-counselling-psychology",
    title: "TVEC Diploma in Counselling & Psychology",
    level: "TVEC",
    shortSummary: "12-month TVEC certified program in counselling and psychology with practical training and placement support.",
    longDescription: `
      <p>TVEC Diploma in Counselling & Psychology provides comprehensive training in counselling techniques and psychological principles.</p>
      <p>The program includes theoretical knowledge combined with practical experience through supervised sessions.</p>
      <p>Graduates are prepared for entry-level counselling roles in various settings including schools, healthcare, and community organizations.</p>
    `,
    modules: [
      {
        title: "Introduction to Psychology",
        description: "Basic psychological principles, human behavior, and mental processes"
      },
      {
        title: "Counselling Theories and Techniques",
        description: "Major counselling approaches, therapeutic techniques, and client-counselor relationships"
      },
      {
        title: "Child Psychology and Development",
        description: "Child development stages, behavioral issues, and age-appropriate counselling methods"
      },
      {
        title: "Group Counselling and Therapy",
        description: "Group dynamics, facilitation skills, and group intervention techniques"
      },
      {
        title: "Ethics and Professional Practice",
        description: "Professional ethics, confidentiality, boundaries, and legal considerations"
      },
      {
        title: "Practical Training and Placement",
        description: "Supervised practical experience in real counselling environments"
      }
    ],
    learningOutcomes: [
      "Understand fundamental psychological theories and concepts",
      "Apply basic counselling techniques in appropriate settings",
      "Demonstrate ethical practice and professional boundaries",
      "Provide support for common psychological and emotional issues",
      "Work effectively with children, adolescents, and adults",
      "Maintain accurate records and case documentation"
    ],
    careerPaths: [
      "Counselling Assistant",
      "School Counsellor Assistant",
      "Community Support Worker",
      "Mental Health Support Assistant",
      "Child Care Counsellor",
      "Rehabilitation Support Worker"
    ],
    duration: "12 months",
    fees: {
      total: 95000,
      currency: "LKR",
      installments: {
        count: 12,
        amount: 7500
      }
    },
    entryRequirements: [
      "Age limit: 16+",
      "G.C.E O/L with 6 credits or equivalent",
      "Basic English communication skills",
      "Interest in helping and supporting others"
    ],
    images: [
      "/src/assets/campus-exterior.jpg",
      "/src/assets/student-lounge.jpg"
    ],
    documents: [
      "/documents/tvec-counselling-psychology-brochure.pdf"
    ],
    accreditation: [
      {
        body: "Tertiary and Vocational Education Commission (TVEC)",
        type: "Certification",
        certification: "TVEC Certified"
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
    category: "Psychology"
  },
  {
    id: "diploma-montessori-early-childhood-001",
    slug: "diploma-montessori-early-childhood",
    title: "Diploma in Montessori & Early Childhood",
    level: "Diploma",
    shortSummary: "Comprehensive 12-month program in Montessori methods and early childhood education for ages 0-6 years.",
    longDescription: `
      <p>The Diploma in Montessori & Early Childhood Education provides specialized training in Montessori philosophy and methods.</p>
      <p>Students learn child-centered teaching approaches, environmental preparation, and developmental observation techniques.</p>
      <p>The program prepares educators to work in Montessori schools, daycare centers, and early childhood education settings.</p>
    `,
    modules: [
      {
        title: "Montessori Philosophy and Principles",
        description: "Maria Montessori's educational philosophy, prepared environment, and child development theory"
      },
      {
        title: "Practical Life Activities",
        description: "Teaching life skills, independence, and care of self and environment"
      },
      {
        title: "Sensorial Education",
        description: "Sensory development, materials and methods for refining the senses"
      },
      {
        title: "Mathematics and Language",
        description: "Concrete to abstract learning, mathematical concepts, and language development"
      },
      {
        title: "Cultural Studies and Sciences",
        description: "Geography, history, biology, and cultural awareness for young children"
      },
      {
        title: "Observation and Assessment",
        description: "Child observation techniques, developmental assessment, and record keeping"
      }
    ],
    learningOutcomes: [
      "Implement Montessori philosophy and methods effectively",
      "Create and maintain prepared learning environments",
      "Guide children aged 0-6 in their natural development",
      "Use Montessori materials and present lessons appropriately",
      "Observe and assess child development objectively",
      "Support children's independence and self-directed learning"
    ],
    careerPaths: [
      "Montessori Teacher",
      "Early Childhood Educator",
      "Daycare Center Supervisor",
      "Preschool Teacher",
      "Child Development Specialist",
      "Early Years Coordinator"
    ],
    duration: "12 months",
    fees: {
      total: 125000,
      currency: "LKR",
      installments: {
        count: 12,
        amount: 10000
      }
    },
    entryRequirements: [
      "Age limit: 18+",
      "G.C.E O/L with 6 credits including English",
      "Passion for working with young children",
      "Basic computer literacy"
    ],
    images: [
      "/src/assets/kids-program.jpg",
      "/src/assets/teacher-training.jpg"
    ],
    documents: [
      "/documents/diploma-montessori-early-childhood-brochure.pdf"
    ],
    accreditation: [
      {
        body: "University Grants Commission (UGC) Sri Lanka",
        type: "Recognition"
      },
      {
        body: "International Montessori Council",
        type: "Recognition"
      }
    ],
    contacts: [
      {
        type: "academic",
        email: "info@amazoncollege.lk",
        phone: "+94 114-386-126"
      }
    ],
    featured: false,
    category: "Early Childhood"
  },
  {
    id: "certificate-childcare-caregiver-001",
    slug: "certificate-childcare-caregiver",
    title: "Certificate in Childcare / Caregiver",
    level: "Certificate",
    shortSummary: "6-month intensive certificate program for childcare professionals and elderly caregivers with practical training.",
    longDescription: `
      <p>The Certificate in Childcare / Caregiver program provides essential skills for caring for children and elderly individuals.</p>
      <p>Students learn basic health care, safety procedures, nutrition, and communication skills.</p>
      <p>The program includes practical training and prepares graduates for immediate employment in care facilities.</p>
    `,
    modules: [
      {
        title: "Basic Child Development",
        description: "Understanding child growth, developmental milestones, and age-appropriate activities"
      },
      {
        title: "Health and Safety",
        description: "First aid, accident prevention, hygiene practices, and health monitoring"
      },
      {
        title: "Nutrition and Meal Planning",
        description: "Nutritional needs, meal preparation, special diets, and feeding techniques"
      },
      {
        title: "Communication and Behavior Management",
        description: "Effective communication, behavior guidance, and conflict resolution"
      },
      {
        title: "Elderly Care Fundamentals",
        description: "Aging process, common health issues, mobility assistance, and emotional support"
      },
      {
        title: "Professional Practice and Ethics",
        description: "Professional boundaries, confidentiality, documentation, and family communication"
      }
    ],
    learningOutcomes: [
      "Provide safe and nurturing care for children and elderly",
      "Recognize and respond to health and safety concerns",
      "Plan and prepare appropriate meals and activities",
      "Communicate effectively with children, families, and elderly clients",
      "Apply basic first aid and emergency procedures",
      "Maintain professional standards and ethical practice"
    ],
    careerPaths: [
      "Childcare Worker",
      "Elderly Caregiver",
      "Home Care Assistant",
      "Daycare Assistant",
      "Nursing Home Assistant",
      "Family Support Worker"
    ],
    duration: "6 months",
    fees: {
      total: 65000,
      currency: "LKR",
      installments: {
        count: 6,
        amount: 10000
      }
    },
    entryRequirements: [
      "Age limit: 18+",
      "Basic literacy in English and Sinhala/Tamil",
      "Physical ability to provide care",
      "Clean criminal background check"
    ],
    images: [
      "/src/assets/kids-program.jpg",
      "/src/assets/campus-walkway.jpg"
    ],
    documents: [
      "/documents/certificate-childcare-caregiver-brochure.pdf"
    ],
    accreditation: [
      {
        body: "National Council for Technical Education",
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
    featured: false,
    category: "Early Childhood"
  },
  {
    id: "diploma-digital-media-marketing-001",
    slug: "diploma-digital-media-marketing",
    title: "Diploma in Digital Media Marketing",
    level: "Diploma",
    shortSummary: "Comprehensive digital marketing program covering social media, content creation, analytics, and modern marketing strategies.",
    longDescription: `
      <p>The Diploma in Digital Media Marketing provides comprehensive training in modern digital marketing techniques and strategies.</p>
      <p>Students learn social media management, content creation, digital advertising, and analytics to drive business growth.</p>
      <p>The program combines theoretical knowledge with hands-on practical experience using industry-standard tools and platforms.</p>
    `,
    modules: [
      {
        title: "Digital Marketing Fundamentals",
        description: "Introduction to digital marketing, consumer behavior online, and marketing psychology"
      },
      {
        title: "Social Media Marketing",
        description: "Platform-specific strategies for Facebook, Instagram, Twitter, LinkedIn, and emerging platforms"
      },
      {
        title: "Content Creation and Strategy",
        description: "Content planning, copywriting, visual design, video production, and content calendars"
      },
      {
        title: "Search Engine Optimization (SEO)",
        description: "Keyword research, on-page and off-page SEO, technical SEO, and ranking strategies"
      },
      {
        title: "Pay-Per-Click Advertising (PPC)",
        description: "Google Ads, Facebook Ads, campaign setup, budget management, and optimization"
      },
      {
        title: "Analytics and Performance Measurement",
        description: "Google Analytics, social media insights, ROI calculation, and performance reporting"
      },
      {
        title: "Email Marketing and Automation",
        description: "Email campaign design, automation workflows, segmentation, and lead nurturing"
      },
      {
        title: "Digital Marketing Strategy",
        description: "Integrated campaigns, budget allocation, competitive analysis, and strategic planning"
      }
    ],
    learningOutcomes: [
      "Develop comprehensive digital marketing strategies",
      "Create engaging content for various digital platforms",
      "Manage social media accounts and advertising campaigns",
      "Analyze marketing performance and optimize campaigns",
      "Implement SEO strategies to improve online visibility",
      "Design and execute email marketing campaigns",
      "Use analytics tools to measure and report on marketing success"
    ],
    careerPaths: [
      "Digital Marketing Specialist",
      "Social Media Manager",
      "Content Marketing Coordinator",
      "SEO Specialist",
      "PPC Campaign Manager",
      "Digital Marketing Analyst",
      "Email Marketing Specialist",
      "Brand Manager"
    ],
    duration: "15 months",
    fees: {
      total: 195000,
      currency: "LKR",
      installments: {
        count: 15,
        amount: 13000
      }
    },
    entryRequirements: [
      "Age limit: 16+",
      "G.C.E O/L with 6 credits including English",
      "Basic computer skills and internet familiarity",
      "Creative mindset and interest in digital trends"
    ],
    images: [
      "/src/assets/computer-lab.jpg",
      "/src/assets/business-class.jpg"
    ],
    documents: [
      "/documents/diploma-digital-media-marketing-brochure.pdf"
    ],
    accreditation: [
      {
        body: "University Grants Commission (UGC) Sri Lanka",
        type: "Recognition"
      },
      {
        body: "Google",
        type: "Partnership",
        certification: "Google Ads Certified Training"
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
    id: "hnd-psychology-001",
    slug: "hnd-psychology",
    title: "HND in Psychology",
    level: "HND",
    shortSummary: "UK-affiliated Higher National Diploma in Psychology covering theoretical foundations and practical applications.",
    longDescription: `
      <p>The HND in Psychology is a UK-affiliated program providing comprehensive foundation in psychological theory and practice.</p>
      <p>Students explore various branches of psychology including cognitive, social, developmental, and abnormal psychology.</p>
      <p>The program prepares students for direct entry into final year psychology degree programs or entry-level psychology careers.</p>
    `,
    modules: [
      {
        title: "Introduction to Psychology",
        description: "History of psychology, major perspectives, research methods, and ethical considerations"
      },
      {
        title: "Cognitive Psychology",
        description: "Memory, attention, perception, learning, and information processing"
      },
      {
        title: "Social Psychology",
        description: "Social influence, group behavior, attitudes, and interpersonal relationships"
      },
      {
        title: "Developmental Psychology",
        description: "Human development from conception to death, developmental theories and milestones"
      },
      {
        title: "Abnormal Psychology",
        description: "Mental health disorders, diagnostic criteria, and treatment approaches"
      },
      {
        title: "Research Methods and Statistics",
        description: "Quantitative and qualitative research, statistical analysis, and report writing"
      },
      {
        title: "Biological Psychology",
        description: "Brain structure and function, neurotransmitters, and biological basis of behavior"
      },
      {
        title: "Applied Psychology",
        description: "Practical applications in education, health, work, and therapeutic settings"
      }
    ],
    learningOutcomes: [
      "Understand major psychological theories and perspectives",
      "Apply research methods and statistical analysis in psychology",
      "Analyze human behavior from multiple psychological perspectives",
      "Evaluate psychological theories using scientific evidence",
      "Demonstrate understanding of ethical issues in psychology",
      "Prepare for advanced study or entry-level psychology careers"
    ],
    careerPaths: [
      "Psychology Research Assistant",
      "Mental Health Support Worker",
      "Educational Assistant",
      "HR Training Assistant",
      "Social Services Assistant",
      "Market Research Assistant",
      "Therapy Assistant"
    ],
    duration: "24 months",
    fees: {
      total: 420000,
      currency: "LKR",
      installments: {
        count: 24,
        amount: 17500
      }
    },
    entryRequirements: [
      "G.C.E A/L with 3 passes or equivalent",
      "Good command of English language",
      "Interest in human behavior and mental processes",
      "Basic mathematical skills for statistics"
    ],
    images: [
      "/src/assets/library-study.jpg",
      "/src/assets/campus-exterior.jpg"
    ],
    documents: [
      "/documents/hnd-psychology-brochure.pdf"
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
        type: "academic",
        email: "info@amazoncollege.lk",
        phone: "+94 114-386-126"
      }
    ],
    featured: false,
    category: "Psychology"
  },
  {
    id: "bsc-psychology-001",
    slug: "bsc-psychology",
    title: "Bachelor of Science in Psychology",
    level: "Degree",
    shortSummary: "Comprehensive undergraduate degree in psychology with research focus and preparation for professional practice.",
    longDescription: `
      <p>The Bachelor of Science in Psychology provides comprehensive undergraduate education in psychological science.</p>
      <p>Students engage in both theoretical study and practical research, developing critical thinking and analytical skills.</p>
      <p>The program prepares graduates for postgraduate study or entry-level positions in psychology-related fields.</p>
    `,
    modules: [
      {
        title: "Advanced Research Methods",
        description: "Experimental design, data collection, statistical analysis, and research ethics"
      },
      {
        title: "Cognitive and Experimental Psychology",
        description: "Advanced study of mental processes, learning, memory, and experimental techniques"
      },
      {
        title: "Clinical and Abnormal Psychology",
        description: "Psychopathology, diagnostic systems, therapeutic approaches, and case studies"
      },
      {
        title: "Social and Cultural Psychology",
        description: "Cultural influences on behavior, social cognition, and cross-cultural psychology"
      },
      {
        title: "Developmental Psychology",
        description: "Lifespan development, developmental disorders, and intervention strategies"
      },
      {
        title: "Biological and Neuropsychology",
        description: "Brain-behavior relationships, neurological conditions, and biological bases of behavior"
      },
      {
        title: "Applied Psychology Practicum",
        description: "Supervised practical experience in applied psychology settings"
      },
      {
        title: "Research Project/Thesis",
        description: "Independent research project under faculty supervision"
      }
    ],
    learningOutcomes: [
      "Demonstrate comprehensive knowledge of psychological theory and research",
      "Design and conduct psychological research using appropriate methods",
      "Apply psychological principles to real-world problems and contexts",
      "Critically evaluate psychological literature and research findings",
      "Communicate psychological concepts effectively to diverse audiences",
      "Prepare for graduate study or professional practice in psychology"
    ],
    careerPaths: [
      "Research Assistant",
      "Psychology Graduate Student",
      "Mental Health Technician",
      "Educational Support Specialist",
      "Human Resources Specialist",
      "Social Services Coordinator",
      "Market Research Analyst"
    ],
    duration: "36 months",
    fees: {
      total: 780000,
      currency: "LKR",
      installments: {
        count: 36,
        amount: 21667
      }
    },
    entryRequirements: [
      "G.C.E A/L with 3 passes including Mathematics or Science",
      "Minimum grade C in English at A/L",
      "Psychology aptitude test and interview",
      "Basic computer literacy"
    ],
    images: [
      "/src/assets/science-lab.jpg",
      "/src/assets/library-study.jpg"
    ],
    documents: [
      "/documents/bsc-psychology-brochure.pdf"
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
    featured: true,
    category: "Psychology"
  },
  {
    id: "diploma-entrepreneurship-001",
    slug: "diploma-entrepreneurship-management",
    title: "Diploma in Entrepreneurship and Management",
    level: "Diploma",
    shortSummary: "Comprehensive program equipping aspiring entrepreneurs with essential business skills, market analysis, and leadership capabilities for successful venture creation.",
    longDescription: `
      <p>The Diploma in Entrepreneurship equips aspiring business owners and innovators with the essential knowledge and skills to launch, manage, and grow successful ventures.</p>
      <p>Covering business fundamentals, market analysis, financial management, leadership, and marketing strategies, this program is ideal for individuals seeking to develop entrepreneurial mindsets and practical capabilities.</p>
    `,
    modules: [
      {
        title: "Introduction to Entrepreneurship",
        description: "Understanding entrepreneurship and its role in the economy, characteristics of successful entrepreneurs, identifying opportunities and innovation processes"
      },
      {
        title: "Business Environment and Market Analysis",
        description: "Assessing business environments and trends, conducting market research and competitor analysis, understanding legal and ethical business considerations"
      },
      {
        title: "Financial Management for Entrepreneurs",
        description: "Basics of financial planning and budgeting, understanding cash flow, profit, and loss, raising capital and managing investments"
      },
      {
        title: "Operations and Project Management",
        description: "Key principles of operations management, planning and executing projects effectively, tools for project monitoring and evaluation"
      },
      {
        title: "Marketing for Entrepreneurs",
        description: "Building a marketing plan for startups, branding, digital marketing, and customer acquisition, leveraging social media for business growth"
      },
      {
        title: "Leadership and People Management",
        description: "Developing leadership qualities, managing teams and building organizational culture, conflict resolution and motivating employees"
      }
    ],
    learningOutcomes: [
      "Create and evaluate business plans for new ventures",
      "Analyze markets and identify business opportunities",
      "Manage finances and operations effectively",
      "Apply leadership skills to guide small teams or start-up operations",
      "Understand core entrepreneurial concepts and business fundamentals",
      "Develop skills in market research, financial planning, and operational management"
    ],
    careerPaths: [
      "Startup Founder / Small Business Owner",
      "Business Development Executive",
      "Marketing Coordinator for SMEs",
      "Project or Operations Assistant",
      "Corporate Entrepreneurship roles",
      "Family Business Manager"
    ],
    duration: "15 months",
    fees: {
      total: 195000,
      currency: "LKR",
      installments: {
        count: 15,
        amount: 13000
      }
    },
    entryRequirements: [
      "Age limit: 16+",
      "Pass EDEXCEL or G.C.E O/L with 6 Credits",
      "Any other qualification approved by the Academic Administration of Amazon College"
    ],
    images: [
      "/src/assets/business-class.jpg",
      "/src/assets/student-lounge.jpg"
    ],
    documents: [
      "/documents/diploma-entrepreneurship-brochure.pdf"
    ],
    accreditation: [
      {
        body: "University Grants Commission (UGC) Sri Lanka",
        type: "Recognition"
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
    category: "Business Management"
  },
  {
    id: "diploma-teacher-training-comprehensive",
    slug: "diploma-teacher-training-comprehensive",
    title: "Diploma in Teacher Training (Comprehensive)",
    level: "Diploma",
    shortSummary: "Comprehensive teacher training covering Montessori, Early Childhood, Primary, Special Child, and English Teacher Training (UK)",
    longDescription: `<p>Our comprehensive Diploma in Teacher Training program offers specialized pathways in multiple educational fields. This program prepares educators for diverse teaching environments with internationally recognized methodologies.</p>
    <p>The program includes specialized training in Montessori education, early childhood development, primary education, special needs education, and English language teaching with UK certification standards.</p>`,
    modules: [
      { title: "Montessori Education Principles", description: "Comprehensive training in Montessori methodology and materials" },
      { title: "Early Childhood Development", description: "Child psychology, development stages, and age-appropriate teaching methods" },
      { title: "Primary Education Strategies", description: "Curriculum design and classroom management for primary grades" },
      { title: "Special Needs Education", description: "Inclusive education practices and support for children with special needs" },
      { title: "English Language Teaching (UK)", description: "UK-standard English teaching methodologies and certification" },
      { title: "Educational Psychology", description: "Understanding learning processes and student behavior" }
    ],
    learningOutcomes: [
      "Master multiple teaching methodologies and approaches",
      "Develop skills in early childhood and primary education",
      "Understand special needs education and inclusive practices",
      "Obtain UK-standard English teaching certification",
      "Create effective learning environments for diverse learners"
    ],
    careerPaths: [
      "Montessori Teacher",
      "Early Childhood Educator", 
      "Primary School Teacher",
      "Special Needs Support Teacher",
      "English Language Instructor"
    ],
    duration: "18 months",
    fees: {
      total: 185000,
      currency: "LKR",
      installments: { count: 6, amount: 30833 }
    },
    entryRequirements: [
      "G.C.E A/L with 2 passes or equivalent",
      "English proficiency (written and spoken)",
      "Interview and aptitude assessment"
    ],
    images: ["/src/assets/teacher-training-diploma.jpg"],
    documents: ["teacher-training-brochure.pdf"],
    accreditation: [
      { body: "Ministry of Education", type: "Recognition", certification: "Teaching Qualification" }
    ],
    contacts: [
      {
        type: "academic",
        email: "education@amazoncollege.lk",
        phone: "+94-11-555-0102"
      }
    ],
    category: "Education",
    featured: true
  },
  {
    id: "diploma-counselling-psychology-comprehensive",
    slug: "diploma-counselling-psychology-comprehensive",
    title: "Diploma in Counselling & Psychology (Comprehensive)",
    level: "Diploma",
    shortSummary: "Specialized counselling training covering Child, Educational, Health, and Addiction psychology",
    longDescription: `<p>Our comprehensive Diploma in Counselling & Psychology provides specialized training across multiple counselling domains. This program prepares students for diverse counselling roles with practical experience and theoretical knowledge.</p>
    <p>The curriculum covers child psychology, educational counselling, health psychology, and addiction counselling with hands-on practicum experience.</p>`,
    modules: [
      { title: "Child Psychology & Counselling", description: "Specialized techniques for counselling children and adolescents" },
      { title: "Educational Psychology", description: "School-based counselling and learning support strategies" },
      { title: "Health Psychology", description: "Mental health counselling and wellness approaches" },
      { title: "Addiction Counselling", description: "Substance abuse and behavioral addiction treatment methods" },
      { title: "Counselling Ethics & Practice", description: "Professional standards and ethical considerations" },
      { title: "Practicum & Case Studies", description: "Supervised counselling practice and real-world experience" }
    ],
    learningOutcomes: [
      "Develop specialized counselling skills across multiple domains",
      "Understand psychological theories and their practical applications",
      "Master ethical counselling practices and professional standards",
      "Gain hands-on experience through supervised practicum",
      "Create effective intervention strategies for diverse client needs"
    ],
    careerPaths: [
      "Child Counsellor",
      "Educational Counsellor",
      "Health Psychology Assistant",
      "Addiction Support Counsellor",
      "Community Mental Health Worker"
    ],
    duration: "15 months",
    fees: {
      total: 175000,
      currency: "LKR",
      installments: { count: 5, amount: 35000 }
    },
    entryRequirements: [
      "G.C.E A/L with 2 passes or equivalent",
      "Psychology or related background preferred",
      "Interview and psychological assessment"
    ],
    images: ["/src/assets/counselling-psychology-diploma.jpg"],
    documents: ["counselling-psychology-brochure.pdf"],
    accreditation: [
      { body: "Sri Lanka Association of Professional Counsellors", type: "Professional Recognition" }
    ],
    contacts: [
      {
        type: "academic",
        email: "psychology@amazoncollege.lk",
        phone: "+94-11-555-0103"
      }
    ],
    category: "Psychology"
  },
  {
    id: "diplomas-english-language-comprehensive",
    slug: "diplomas-english-language-comprehensive",
    title: "Diplomas in English Language (Comprehensive)",
    level: "Diploma",
    shortSummary: "Comprehensive English language training covering Spoken English, Business English, and General English",
    longDescription: `<p>Our comprehensive English Language Diploma programs offer specialized training in multiple aspects of English communication. These programs are designed for students seeking to master English for professional, academic, or personal development.</p>
    <p>The program includes three specialized pathways: Spoken English for communication skills, Business English for professional environments, and General English for comprehensive language mastery.</p>`,
    modules: [
      { title: "Spoken English Mastery", description: "Advanced conversation skills, pronunciation, and public speaking" },
      { title: "Business English Communication", description: "Professional writing, presentations, and corporate communication" },
      { title: "General English Proficiency", description: "Comprehensive grammar, vocabulary, and language skills" },
      { title: "English Literature & Culture", description: "Cultural context and literary appreciation" },
      { title: "Language Teaching Methods", description: "Techniques for teaching English as a second language" },
      { title: "Digital Communication Skills", description: "Online communication and digital literacy in English" }
    ],
    learningOutcomes: [
      "Achieve fluency in spoken and written English",
      "Master business communication and professional English",
      "Develop teaching skills for English language instruction",
      "Understand cultural contexts and nuances of English",
      "Create effective English learning materials and programs"
    ],
    careerPaths: [
      "English Language Trainer",
      "Business Communication Specialist",
      "Corporate English Instructor",
      "Content Writer",
      "Customer Service Representative"
    ],
    duration: "12 months",
    fees: {
      total: 95000,
      currency: "LKR",
      installments: { count: 4, amount: 23750 }
    },
    entryRequirements: [
      "G.C.E O/L with English credit",
      "Basic English communication skills",
      "Oral assessment for placement level"
    ],
    images: ["/src/assets/english-language-diploma.jpg"],
    documents: ["english-language-brochure.pdf"],
    accreditation: [
      { body: "British Council", type: "Curriculum Recognition" }
    ],
    contacts: [
      {
        type: "academic",
        email: "english@amazoncollege.lk",
        phone: "+94-11-555-0104"
      }
    ],
    category: "English Language"
  },
  {
    id: "diplomas-business-management-comprehensive",
    slug: "diplomas-business-management-comprehensive",
    title: "Diplomas in Business Management (Comprehensive)",
    level: "Diploma",
    shortSummary: "Comprehensive business training covering Business Management, Marketing, Sales & Entrepreneurship Management",
    longDescription: `<p>Our comprehensive Business Management Diploma programs provide specialized training across key business domains. These programs prepare students for leadership roles in various business environments with practical skills and theoretical knowledge.</p>
    <p>The curriculum covers general business management, specialized marketing strategies, sales techniques, and entrepreneurship development with real-world business applications.</p>`,
    modules: [
      { title: "Business Management Fundamentals", description: "Core principles of business operations and management" },
      { title: "Marketing Strategy & Implementation", description: "Market analysis, branding, and marketing campaign development" },
      { title: "Sales Techniques & Customer Relations", description: "Advanced sales strategies and customer relationship management" },
      { title: "Entrepreneurship & Innovation", description: "Business planning, startup strategies, and innovation management" },
      { title: "Financial Management", description: "Business finance, budgeting, and financial analysis" },
      { title: "Business Project Management", description: "Practical business project execution and management" }
    ],
    learningOutcomes: [
      "Master core business management principles and practices",
      "Develop advanced marketing and sales strategies",
      "Create comprehensive business plans and startup strategies",
      "Understand financial management and business analysis",
      "Apply entrepreneurial thinking to business challenges"
    ],
    careerPaths: [
      "Business Manager",
      "Marketing Executive",
      "Sales Representative",
      "Entrepreneur",
      "Business Development Officer"
    ],
    duration: "15 months",
    fees: {
      total: 155000,
      currency: "LKR",
      installments: { count: 5, amount: 31000 }
    },
    entryRequirements: [
      "G.C.E A/L with 2 passes or equivalent",
      "Basic mathematics and English proficiency",
      "Interview and business aptitude assessment"
    ],
    images: ["/src/assets/business-management-diploma.jpg"],
    documents: ["business-management-brochure.pdf"],
    accreditation: [
      { body: "Institute of Chartered Accountants", type: "Professional Recognition" }
    ],
    contacts: [
      {
        type: "academic",
        email: "business@amazoncollege.lk",
        phone: "+94-11-555-0105"
      }
    ],
    category: "Business Management",
    featured: true
  },
  {
    id: "diploma-education-training-002",
    slug: "diploma-education-training",
    title: "Diploma in Education and Training",
    level: "Diploma",
    shortSummary: "Equips aspiring educators with knowledge, skills, and practical tools to teach effectively in modern classrooms, blending educational psychology, leadership, and technology.",
    longDescription: `
      <p>The Diploma in Education equips aspiring educators with the knowledge, skills, and practical tools to teach effectively in modern classrooms.</p>
      <p>The program blends educational psychology, leadership, and technology to prepare graduates for roles in schools, training institutions, and further academic study in teaching and education management.</p>
    `,
    modules: [
      {
        title: "Introduction to Education Systems",
        description: "Overview of local and global education systems, understanding policies, frameworks, and curriculum structures, role of teachers in diverse learning environments"
      },
      {
        title: "Learning Theories and Psychology",
        description: "Key theories of learning (behaviorist, cognitive, constructivist), child and adolescent development, applying psychology to improve teaching practices"
      },
      {
        title: "Curriculum Design and Development",
        description: "Principles of curriculum planning and design, aligning learning outcomes with teaching strategies, incorporating inclusivity and diversity in curricula"
      },
      {
        title: "Assessment and Evaluation in Education",
        description: "Designing fair and effective assessments, analyzing student performance data, using evaluation for continuous improvement"
      },
      {
        title: "Educational Leadership and Management",
        description: "Basics of educational leadership roles, managing classrooms and school environments, building collaborative and supportive learning communities"
      },
      {
        title: "Educational Technology and Innovation",
        description: "Integrating digital tools in the classroom, leveraging emerging technologies for student engagement, innovation in teaching methodologies and e-learning platforms"
      }
    ],
    learningOutcomes: [
      "Gain foundational knowledge of educational systems and leadership",
      "Understand key psychological theories relevant to teaching and learning",
      "Learn curriculum planning, assessment design, and innovative teaching tools",
      "Design and deliver effective learning experiences",
      "Use technology to enhance classroom engagement",
      "Manage educational settings and lead teams effectively",
      "Evaluate and improve teaching strategies through assessments"
    ],
    careerPaths: [
      "Primary or Secondary Teacher (after certification requirements)",
      "Education Assistant / Classroom Support Officer",
      "School Administration and Coordination Roles",
      "Training & Development Specialist",
      "Pathway to Bachelor's in Education or Master's in Educational Leadership"
    ],
    duration: "18 months",
    fees: {
      total: 180000,
      currency: "LKR",
      installments: {
        count: 18,
        amount: 10000
      }
    },
    entryRequirements: [
      "Age limit: 16+",
      "Pass EDEXCEL or G.C.E O/L with 6 Credits",
      "Any other qualification approved by the Academic Administration of Amazon College"
    ],
    images: [
      "/src/assets/education-training-diploma.jpg"
    ],
    documents: [
      "/documents/diploma-education-training-brochure.pdf"
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
    category: "Education",
    featured: true
  },
  {
    id: "diploma-psychology-counselling-002",
    slug: "diploma-psychology-counselling",
    title: "Diploma in Psychology and Counselling",
    level: "Diploma",
    shortSummary: "Foundation course providing understanding of psychological concepts and counselling techniques for careers in mental health support and further academic study.",
    longDescription: `
      <p>Our thoughtfully curated modules guide you through key areas of psychology and counselling, providing a solid foundation for careers in mental health support or further academic study.</p>
      <p>The program covers fundamental psychological principles, human development, counselling techniques, and professional ethics in mental health practice.</p>
    `,
    modules: [
      {
        title: "Introduction to Psychology",
        description: "Basic psychological principles, major theories and approaches, understanding human behavior and mental processes"
      },
      {
        title: "Human Development and Lifespan",
        description: "Stages of human development from infancy to old age, developmental milestones and challenges, lifespan psychology"
      },
      {
        title: "Fundamentals of Counselling",
        description: "Basic counselling skills and techniques, communication and listening skills, building therapeutic relationships"
      },
      {
        title: "Mental Health Awareness",
        description: "Common mental health conditions, recognizing symptoms and signs, promoting mental wellness in communities"
      },
      {
        title: "Counseling Theories and Approaches",
        description: "Major therapeutic approaches (cognitive-behavioral, humanistic, psychodynamic), understanding different counseling models"
      },
      {
        title: "Ethics and Professional Issues in Counselling",
        description: "Professional boundaries and ethical guidelines, confidentiality and legal responsibilities, professional standards in counselling practice"
      }
    ],
    learningOutcomes: [
      "Gain foundational understanding of key psychological concepts and theories",
      "Comprehend stages of human development and their impact on individuals",
      "Learn fundamental principles and techniques of effective counselling",
      "Develop awareness of common mental health conditions and their impact",
      "Explore various counselling theories and approaches and their applications",
      "Recognize and apply ethical guidelines and professional standards in counselling practice"
    ],
    careerPaths: [
      "Entry-Level Support Roles in community support and mental health advocacy",
      "Social services and volunteer work with support organizations",
      "Mental health awareness promotion in communities",
      "Further academic study in psychology, counselling, or social work",
      "Personal development and improved interpersonal skills"
    ],
    duration: "18 months",
    fees: {
      total: 185000,
      currency: "LKR",
      installments: {
        count: 18,
        amount: 10278
      }
    },
    entryRequirements: [
      "Age limit: 16+",
      "Pass EDEXCEL / G.C.E O/L with 6 Credits",
      "Any other education qualification acceptable by Academic administration of Amazon College"
    ],
    images: [
      "/src/assets/psychology-counselling-diploma.jpg"
    ],
    documents: [
      "/documents/diploma-psychology-counselling-brochure.pdf"
    ],
    accreditation: [
      {
        body: "University Grants Commission (UGC) Sri Lanka",
        type: "Recognition"
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
    category: "Health & Psychology",
    featured: true
  },
  {
    id: "diploma-digital-marketing-002",
    slug: "diploma-digital-marketing",
    title: "Diploma in Digital Media Marketing",
    level: "Diploma",
    shortSummary: "Comprehensive foundation in digital marketing covering social media, SEO, content marketing, analytics, and mobile marketing for modern business needs.",
    longDescription: `
      <p>Our expertly crafted modules guide you through the critical components of digital marketing, preparing you for the dynamic world of online business and marketing.</p>
      <p>The program covers social media strategy, search engine optimization, content creation, analytics, and modern digital marketing techniques essential for business success.</p>
    `,
    modules: [
      {
        title: "Introduction to Digital Marketing",
        description: "Fundamentals of digital marketing landscape, understanding online consumer behavior, digital marketing channels and platforms"
      },
      {
        title: "Social Media Marketing Strategy",
        description: "Developing effective social media strategies, platform-specific marketing approaches, community building and engagement techniques"
      },
      {
        title: "Search Engine Optimization (SEO) Basics",
        description: "Understanding search engines and ranking factors, keyword research and optimization, on-page and off-page SEO techniques"
      },
      {
        title: "Content Marketing and Branding",
        description: "Creating compelling digital content, brand development and positioning, content strategy and storytelling for digital platforms"
      },
      {
        title: "Digital Marketing Analytics",
        description: "Understanding web analytics tools, measuring campaign performance, data interpretation and reporting for decision making"
      },
      {
        title: "Email and Mobile Marketing",
        description: "Email marketing campaign design and execution, mobile marketing strategies, automation and personalization techniques"
      }
    ],
    learningOutcomes: [
      "Understand fundamental concepts and landscape of digital marketing",
      "Develop effective strategies for social media presence and engagement",
      "Grasp basics of Search Engine Optimization (SEO) to improve online visibility",
      "Learn to create compelling content and build strong brand online",
      "Interpret digital marketing data and analytics to inform decisions",
      "Master principles of email and mobile marketing for targeted campaigns"
    ],
    careerPaths: [
      "Digital Marketing Assistant",
      "Social Media Coordinator",
      "Content Creator/Marketer",
      "SEO Assistant",
      "Email Marketing Assistant",
      "Entrepreneur/Small Business Owner"
    ],
    duration: "15 months",
    fees: {
      total: 175000,
      currency: "LKR",
      installments: {
        count: 15,
        amount: 11667
      }
    },
    entryRequirements: [
      "Age limit: 16+",
      "Pass EDEXCEL / G.C.E O/L with 6 Credits",
      "Any other education qualification acceptable by Academic administration of Amazon College"
    ],
    images: [
      "/src/assets/digital-marketing-diploma.jpg"
    ],
    documents: [
      "/documents/diploma-digital-marketing-brochure.pdf"
    ],
    accreditation: [
      {
        body: "University Grants Commission (UGC) Sri Lanka",
        type: "Recognition"
      },
      {
        body: "Digital Marketing Institute",
        type: "Professional Certification"
      }
    ],
    contacts: [
      {
        type: "academic", 
        email: "info@amazoncollege.lk",
        phone: "+94 114-386-126"
      }
    ],
    category: "Business & Marketing",
    featured: true
  },
  {
    id: "diploma-english-language-002",
    slug: "diploma-english-language",
    title: "Diploma in English Language & Communication",
    level: "Diploma", 
    shortSummary: "Comprehensive English language program covering grammar, comprehension, presentation skills, and business writing for academic and professional success.",
    longDescription: `
      <p>Our thoughtfully structured modules cover key aspects of English language and effective communication, preparing you for academic success and professional excellence.</p>
      <p>The program focuses on building strong foundations in grammar, reading comprehension, presentation skills, and business communication essential for career advancement.</p>
    `,
    modules: [
      {
        title: "Basic English Grammar",
        description: "Fundamental grammar rules and usage, sentence structure and paragraph construction, common grammar mistakes and corrections"
      },
      {
        title: "Skimming and Scanning",
        description: "Efficient reading strategies for information extraction, speed reading techniques, understanding main ideas and specific details"
      },
      {
        title: "Comprehension Skills", 
        description: "Critical reading and analysis of various text types, developing inference and interpretation skills, vocabulary building"
      },
      {
        title: "Presentation Skills",
        description: "Public speaking techniques and confidence building, structuring and delivering effective presentations, visual aids and technology use"
      },
      {
        title: "Communication Skills",
        description: "Verbal and non-verbal communication techniques, active listening skills, interpersonal communication in diverse settings"
      },
      {
        title: "Business Writing",
        description: "Professional email and letter writing, report writing and documentation, business proposals and formal communication"
      }
    ],
    learningOutcomes: [
      "Reinforce and solidify fundamental English grammar rules and usage",
      "Develop efficient reading strategies such as skimming and scanning for information extraction",
      "Improve critical comprehension skills for various texts and contexts", 
      "Acquire and practice effective public speaking and presentation techniques",
      "Enhance overall communication abilities, including active listening and clear expression",
      "Master principles of professional and persuasive business writing"
    ],
    careerPaths: [
      "Administrative roles requiring strong communication",
      "Customer service and marketing positions",
      "Business & entrepreneurship opportunities",
      "International communication roles",
      "Further study in specialized language programs",
      "Academic writing and business communication"
    ],
    duration: "12 months",
    fees: {
      total: 150000,
      currency: "LKR",
      installments: {
        count: 12,
        amount: 12500
      }
    },
    entryRequirements: [
      "Age limit: 16+",
      "Pass EDEXCEL / G.C.E O/L with 6 Credits",
      "Any other education qualification acceptable by Academic administration of Amazon College"
    ],
    images: [
      "/src/assets/english-language-diploma.jpg"
    ],
    documents: [
      "/documents/diploma-english-language-brochure.pdf"
    ],
    accreditation: [
      {
        body: "University Grants Commission (UGC) Sri Lanka",
        type: "Recognition"
      },
      {
        body: "British Council Sri Lanka",
        type: "Language Standards Approval"
      }
    ],
    contacts: [
      {
        type: "academic",
        email: "info@amazoncollege.lk", 
        phone: "+94 114-386-126"
      }
    ],
    category: "Language & Communication",
    featured: true
  }
];