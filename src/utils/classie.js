/**
 * A script to concatenate any class names given as `classArray`,
 * and to conditionally apply object keys as class names (based on
 * their values, e.g. { someClass: true, otherClass: false }).
 * @param classArray {string[]} Array of classes.
 * @param toggleClasses {{string:boolean}} Object-- class name as key,
 * whether to apply as value.
 * @returns {string} Concatenated class names result.
 */
export default function classie(classArray, toggleClasses) {
  const classes = [];

  if (classArray && Array.isArray(classArray)) {
    classArray.forEach((c) => {
      if (c && c.length) classes.push(c);
    });
  }

  if (toggleClasses &&
    typeof toggleClasses === 'object' &&
    Object.keys(toggleClasses).length) {
    const keys = Object.keys(toggleClasses);

    for (let i = 0; i < keys.length; i++) {
      if (toggleClasses[keys[i]]) {
        classes.push(keys[i]);
      }
    }
  }

  return classes.join(' ');
}
