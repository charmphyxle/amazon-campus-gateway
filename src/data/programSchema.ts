export interface ProgramModule {
  title: string;
  description: string;
}

export interface ProgramFees {
  total: number;
  currency: string;
  installments?: {
    count: number;
    amount: number;
  };
}

export interface ProgramAccreditation {
  body: string;
  type: string;
  certification?: string;
}

export interface ProgramContact {
  type: 'admissions' | 'academic' | 'general';
  name?: string;
  email: string;
  phone: string;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  level: 'Certificate' | 'TVEC' | 'Diploma' | 'HND' | 'Degree' | 'Top-up' | 'Masters' | 'PhD';
  shortSummary: string;
  longDescription: string; // HTML-ready
  courseObjectives?: string[]; // New field for course objectives
  modules: ProgramModule[];
  learningOutcomes: string[];
  careerPaths: string[];
  duration: string;
  fees: ProgramFees;
  entryRequirements: string[];
  images: string[];
  documents: string[]; // PDF brochures
  accreditation: ProgramAccreditation[];
  contacts: ProgramContact[];
  featured?: boolean;
  category?: string;
}

export const PROGRAM_LEVELS = [
  'Certificate',
  'TVEC', 
  'Diploma',
  'HND',
  'Degree',
  'Top-up',
  'Masters',
  'PhD'
] as const;

export const PROGRAM_CATEGORIES = [
  'Information Technology',
  'Business Management',
  'Education',
  'Psychology',
  'English Language',
  'Early Childhood',
  'Teacher Training'
] as const;