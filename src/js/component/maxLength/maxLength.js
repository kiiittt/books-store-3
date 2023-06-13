export function formatBookName(message, maxLength) {
  let result;
  if (message.length <= maxLength) {
    result = message.slice(0, message.length);
  } else {
    result = message.slice(0, maxLength) + '...';
  }
  return result;
}
