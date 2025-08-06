export interface StudentRecord {
  id: string;
  fullName: string;
  courseTitle: string;
  programDuration: string;
  batchYear: string;
  status: "Completed" | "Currently Enrolled";
  photo?: string;
  enrollmentDate: string;
  completionDate?: string;
}

export const dummyStudents: StudentRecord[] = [
  {
    id: "AMZ/A001",
    fullName: "Sarah Johnson",
    courseTitle: "Diploma in Business Administration",
    programDuration: "12 months",
    batchYear: "2023",
    status: "Completed",
    enrollmentDate: "January 2023",
    completionDate: "December 2023"
  },
  {
    id: "AMZ/A002",
    fullName: "Ahmed Hassan",
    courseTitle: "Advanced English Language Course",
    programDuration: "6 months",
    batchYear: "2024",
    status: "Currently Enrolled",
    enrollmentDate: "August 2024"
  },
  {
    id: "AMZ/A003",
    fullName: "Maria Rodriguez",
    courseTitle: "Teacher Training Certificate",
    programDuration: "8 months",
    batchYear: "2023",
    status: "Completed",
    enrollmentDate: "March 2023",
    completionDate: "October 2023"
  },
  {
    id: "AMZ/A004",
    fullName: "Chen Wei",
    courseTitle: "Kids Learning Program",
    programDuration: "4 months",
    batchYear: "2024",
    status: "Currently Enrolled",
    enrollmentDate: "September 2024"
  },
  {
    id: "AMZ/A005",
    fullName: "Priya Sharma",
    courseTitle: "International Foundation Course",
    programDuration: "10 months",
    batchYear: "2023",
    status: "Completed",
    enrollmentDate: "February 2023",
    completionDate: "November 2023"
  },
  {
    id: "AMZ/A006",
    fullName: "David Thompson",
    courseTitle: "Diploma in Information Technology",
    programDuration: "18 months",
    batchYear: "2024",
    status: "Currently Enrolled",
    enrollmentDate: "June 2024"
  },
  {
    id: "AMZ/A007",
    fullName: "Fatima Al-Zahra",
    courseTitle: "Business English Certificate",
    programDuration: "3 months",
    batchYear: "2023",
    status: "Completed",
    enrollmentDate: "September 2023",
    completionDate: "November 2023"
  }
];

export const findStudentById = (id: string): StudentRecord | null => {
  return dummyStudents.find(student => 
    student.id.toLowerCase() === id.toLowerCase()
  ) || null;
};