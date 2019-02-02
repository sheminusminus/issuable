export const randomColor = () => {
  const colors = [
    '#11cdef',
    '#2dce89',
    '#ff9f89',
    '#f5365c',
  ];

  const index = Math.floor((Math.random() * colors.length));

  return colors[index];
};
