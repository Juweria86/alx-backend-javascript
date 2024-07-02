export default function cleanSet(Set, startString) {
  if (!Set || !startString || !(Set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return Array.from(Set)
    .filter((ele) => ele && ele.startsWith(startString))
    .map((ele) => ele.replace(startString, ''))
    .join('-');
}
