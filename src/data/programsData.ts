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
  }
];