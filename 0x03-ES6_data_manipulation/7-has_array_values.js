export default function hasValuesFromArray(Set, xArray) {
  return xArray.every((ele) => Set.has(ele));
}
