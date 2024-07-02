export default function getStudentIdsSum(studentList) {
  return studentList.reduce((accumulator, { id }) => accumulator + id, 0);
}
