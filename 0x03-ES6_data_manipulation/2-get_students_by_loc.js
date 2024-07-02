export default function getStudentsByLocation(studenList, city) {
  return studenList.filter(({ location }) => location === city);
}
