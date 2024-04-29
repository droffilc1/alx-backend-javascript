export default function getListStudentIds(getListStudents) {
  // Check if object is an array
  if (!Array.isArray(getListStudents)) {
    return [];
  }
  // get ids from a list of object
  return getListStudents.map((obj) => obj.id);
}
