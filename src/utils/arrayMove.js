export default function arrayMove(arr, oldIndex, newIndex) {
  const  arrayCopy = [...arr];

  while (oldIndex < 0) {
    oldIndex += arrayCopy.length;
  }

  while (newIndex < 0) {
    newIndex += arrayCopy.length;
  }

  if (newIndex >= arrayCopy.length) {
    let k = newIndex - arrayCopy.length + 1;
    while (k--) {
      arrayCopy.push(undefined);
    }
  }

  arrayCopy.splice(newIndex, 0, arrayCopy.splice(oldIndex, 1)[0]);

  return arrayCopy;
};
