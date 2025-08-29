import { Program } from '../data/programSchema';
import { programsData } from '../data/programsData';

// Program data management utilities
export class ProgramDataManager {
  private programs: Program[] = [];

  constructor() {
    this.programs = [...programsData];
  }

  // Import and validate program data
  importPrograms(data: Program[]): { success: boolean; errors: string[]; imported: number } {
    const errors: string[] = [];
    let imported = 0;

    for (const program of data) {
      try {
        this.validateProgram(program);
        this.addProgram(program);
        imported++;
      } catch (error) {
        errors.push(`Program ${program.title}: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }

    return {
      success: errors.length === 0,
      errors,
      imported
    };
  }

  // Validate program data structure
  private validateProgram(program: Program): void {
    const requiredFields = ['id', 'slug', 'title', 'level', 'shortSummary', 'duration'];
    
    for (const field of requiredFields) {
      if (!program[field as keyof Program]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    // Validate level
    const validLevels = ['Certificate', 'TVEC', 'Diploma', 'HND', 'Degree', 'Top-up', 'Masters', 'PhD'];
    if (!validLevels.includes(program.level)) {
      throw new Error(`Invalid level: ${program.level}`);
    }

    // Validate fees structure
    if (program.fees && typeof program.fees.total !== 'number') {
      throw new Error('Invalid fees structure');
    }

    // Validate modules array
    if (program.modules && !Array.isArray(program.modules)) {
      throw new Error('Modules must be an array');
    }
  }

  // Add a new program
  addProgram(program: Program): void {
    // Check for duplicate IDs
    if (this.programs.find(p => p.id === program.id)) {
      throw new Error(`Program with ID ${program.id} already exists`);
    }

    // Check for duplicate slugs
    if (this.programs.find(p => p.slug === program.slug)) {
      throw new Error(`Program with slug ${program.slug} already exists`);
    }

    this.programs.push(program);
  }

  // Get all programs
  getAllPrograms(): Program[] {
    return [...this.programs];
  }

  // Get programs by level
  getProgramsByLevel(level: string): Program[] {
    return this.programs.filter(p => p.level === level);
  }

  // Get programs by category
  getProgramsByCategory(category: string): Program[] {
    return this.programs.filter(p => p.category === category);
  }

  // Get featured programs
  getFeaturedPrograms(): Program[] {
    return this.programs.filter(p => p.featured === true);
  }

  // Get program by slug
  getProgramBySlug(slug: string): Program | undefined {
    return this.programs.find(p => p.slug === slug);
  }

  // Search programs
  searchPrograms(query: string): Program[] {
    const lowercaseQuery = query.toLowerCase();
    return this.programs.filter(program => 
      program.title.toLowerCase().includes(lowercaseQuery) ||
      program.shortSummary.toLowerCase().includes(lowercaseQuery) ||
      program.category?.toLowerCase().includes(lowercaseQuery) ||
      program.level.toLowerCase().includes(lowercaseQuery)
    );
  }

  // Get program statistics
  getStatistics() {
    const levelCounts = this.programs.reduce((acc, program) => {
      acc[program.level] = (acc[program.level] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const categoryCounts = this.programs.reduce((acc, program) => {
      if (program.category) {
        acc[program.category] = (acc[program.category] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return {
      total: this.programs.length,
      byLevel: levelCounts,
      byCategory: categoryCounts,
      featured: this.programs.filter(p => p.featured).length
    };
  }

  // Export programs to JSON
  exportToJSON(): string {
    return JSON.stringify(this.programs, null, 2);
  }

  // Import from JSON string
  importFromJSON(jsonString: string): { success: boolean; errors: string[]; imported: number } {
    try {
      const data = JSON.parse(jsonString);
      if (!Array.isArray(data)) {
        return { success: false, errors: ['JSON must contain an array of programs'], imported: 0 };
      }
      return this.importPrograms(data);
    } catch (error) {
      return { 
        success: false, 
        errors: [`JSON parsing error: ${error instanceof Error ? error.message : 'Unknown error'}`], 
        imported: 0 
      };
    }
  }
}

// Utility functions for data transformation
export const transformLegacyProgramData = (legacyData: any[]): Program[] => {
  return legacyData.map((item, index) => ({
    id: item.id || `program-${index}`,
    slug: item.slug || item.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    title: item.title || '',
    level: item.level || 'Diploma',
    shortSummary: item.shortSummary || item.description || '',
    longDescription: item.longDescription || item.description || '',
    modules: item.modules || [],
    learningOutcomes: item.learningOutcomes || item.outcomes || [],
    careerPaths: item.careerPaths || item.careers || [],
    duration: item.duration || '12 months',
    fees: {
      total: item.fees?.total || item.fee || 0,
      currency: item.fees?.currency || 'LKR',
      installments: item.fees?.installments
    },
    entryRequirements: item.entryRequirements || item.requirements || [],
    images: item.images || [],
    documents: item.documents || [],
    accreditation: item.accreditation || [],
    contacts: item.contacts || [{
      type: 'general' as const,
      email: 'info@amazoncollege.lk',
      phone: '+94 114-386-126'
    }],
    featured: item.featured || false,
    category: item.category
  }));
};

// Initialize program data manager with default data
export const programManager = new ProgramDataManager();

// Export functions for easy use
export const getAllPrograms = () => programManager.getAllPrograms();
export const getProgramsByLevel = (level: string) => programManager.getProgramsByLevel(level);
export const getProgramsByCategory = (category: string) => programManager.getProgramsByCategory(category);
export const getFeaturedPrograms = () => programManager.getFeaturedPrograms();
export const getProgramBySlug = (slug: string) => programManager.getProgramBySlug(slug);
export const searchPrograms = (query: string) => programManager.searchPrograms(query);
export const getProgramStatistics = () => programManager.getStatistics();