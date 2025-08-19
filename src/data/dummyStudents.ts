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
  },
  {
    id: "AMZ/A008",
    fullName: "Michael Johnson",
    courseTitle: "Computer Technology Diploma",
    programDuration: "15 months",
    batchYear: "2024",
    status: "Currently Enrolled",
    enrollmentDate: "May 2024"
  },
  {
    id: "AMZ/A009",
    fullName: "Aisha Malik",
    courseTitle: "Academic Research Program",
    programDuration: "24 months",
    batchYear: "2023",
    status: "Completed",
    enrollmentDate: "January 2023",
    completionDate: "December 2024"
  },
  {
    id: "AMZ/A010",
    fullName: "Roberto Silva",
    courseTitle: "Business Administration Diploma",
    programDuration: "18 months",
    batchYear: "2024",
    status: "Currently Enrolled",
    enrollmentDate: "March 2024"
  },
  {
    id: "AMZ/A011",
    fullName: "Yuki Tanaka",
    courseTitle: "English Language Program",
    programDuration: "12 months",
    batchYear: "2023",
    status: "Completed",
    enrollmentDate: "April 2023",
    completionDate: "March 2024"
  },
  {
    id: "AMZ/A012",
    fullName: "Amara Okafor",
    courseTitle: "Teacher Training Certificate",
    programDuration: "6 months",
    batchYear: "2024",
    status: "Currently Enrolled",
    enrollmentDate: "October 2024"
  },
  {
    id: "AMZ/A013",
    fullName: "James Miller",
    courseTitle: "Kids Educational Program",
    programDuration: "4 months",
    batchYear: "2024",
    status: "Completed",
    enrollmentDate: "July 2024",
    completionDate: "October 2024"
  },
  {
    id: "AMZ/A014",
    fullName: "Fatou Diallo",
    courseTitle: "International Foundation Course",
    programDuration: "10 months",
    batchYear: "2024",
    status: "Currently Enrolled",
    enrollmentDate: "February 2024"
  },
  {
    id: "AMZ/A015",
    fullName: "Alexander Petrov",
    courseTitle: "Computer Technology Diploma",
    programDuration: "15 months",
    batchYear: "2023",
    status: "Completed",
    enrollmentDate: "September 2023",
    completionDate: "November 2024"
  }
];

export const findStudentById = (id: string): StudentRecord | null => {
  return dummyStudents.find(student => 
    student.id.toLowerCase() === id.toLowerCase()
  ) || null;
};