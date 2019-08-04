export default function decipher(origin) {
  if (origin.length < 1) return false;
  let length = origin.length;
  let count = 0;
  let result = "";
  for (let i = 0; i < length; i++) {
    count++;
    if (count + i < length) {
      origin = origin.slice(count - 1);
      result += origin.slice(count - 1, count);
    }
  }
  return result;
}
