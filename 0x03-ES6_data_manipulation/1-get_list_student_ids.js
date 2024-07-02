export default function getListStudentIds(studetId) {
  if (Array.isArray(studetId)) {
    return studetId.map(({ id }) => id);
  }
  return [];
}
