import { listOfStudents } from './9-hoisting';

console.log(listOfStudents); // Check if this outputs the expected array

const listPrinted = listOfStudents.map((student) => student.fullStudentDescription);
console.log(listPrinted);
