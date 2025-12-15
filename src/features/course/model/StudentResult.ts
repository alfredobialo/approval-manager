import {studentGradeCalculator} from '../../../app/app';

export interface StudentResult{
  id: string,
  firstName: string,
  lastName: string,
  examResult : ExamResult[]
}

export interface ExamResult{
  courseCode : string;
  courseName : string;
  score : number,
  gradeAssigned? : string
}
export interface ExamScore{

}

export function getDefaultStudentResult(){
  const studentResult: StudentResult = {
    id : "ESUT/52777/CS",
    firstName : "Alvana",
    lastName :"Iwuh",
    examResult : [
      {
        courseCode : "CSC 202",
        courseName :"Introduction Computer Logic",
        score : 56,
        // gradeAssigned : studentGradeCalculator(56)

      },{
        courseCode : "CSC 235",
        courseName :"Algebra and Calculus",
        score : 49,
        // gradeAssigned : studentGradeCalculator(49)

      },{
        courseCode : "CSC 212",
        courseName :"Statistical Analysis",
        score : 76,
        // gradeAssigned : studentGradeCalculator(76)

      },{
        courseCode : "CSC 256",
        courseName :"Programming with Python",
        score : 42,
        // gradeAssigned : studentGradeCalculator(42)

      },{
        courseCode : "CSC 211",
        courseName :"General English",
        score : 66,
        // gradeAssigned : studentGradeCalculator(66)

      },
    ]
  };
  return studentResult;
}
