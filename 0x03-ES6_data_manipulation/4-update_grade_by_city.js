export default function updateStudentGradedByCity(getListStudents, city, newGrades) {
  return getListStudents.filter((obj) => obj.location === city)
    .map((student) => {
      const matchingGrades = newGrades.find((newGrade) => newGrade.studentId === student.id);
      return {
        ...student,
        grade: matchingGrades ? matchingGrades.grade : 'N/A',
      };
    });
}
