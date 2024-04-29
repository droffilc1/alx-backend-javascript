export default function getStudentByLocation(students, city) {
  return students.filter((obj) => obj.location === city);
}
