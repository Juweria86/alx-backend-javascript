export default function cleanSet(setObj, startString) {
  if (!setObj || !startString || !(setObj instanceof Set) || typeof startString !== 'string' || startString === '') {
    return '';
  }

  return Array.from(setObj)
    .filter((ele) => ele && ele.startsWith(startString))
    .map((ele) => ele.slice(startString.length))
    .join('-');
}
