export default function cleanSet(set, startString) {
  // Check if set is not an object, or startString is not a string
  if (typeof set !== 'object' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const list = [];

  for (const elem of set) {
    if (typeof elem === 'string' && elem.startsWith(startString)) {
      list.push(elem.slice(startString.length));
    }
  }
  return list.join('-');
}
