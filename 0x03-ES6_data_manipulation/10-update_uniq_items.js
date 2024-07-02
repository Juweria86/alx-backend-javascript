export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Cannot process');
  for (const [i, j] of map.entries()) {
    if (j === 1) map.set(i, 100);
  }
  return map;
}
