export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter(({ location }) => location === city)
    .map((obj) => {
      const xtargetNewGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
      const { grade = 'N/A' } = xtargetNewGrade.length > 0 ? xtargetNewGrade[0] : {};
      return { ...obj, grade };
    });
}
