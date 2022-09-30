export const getData = (str: string) => {
  const dates = str.match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g);
  if (dates) {
    return dates.join(', ');
  }
  return '';
};

export const getActive = (arr, category) => {
  return arr.reduce(
    (acc, note) =>
      note.category === category && !note.archived ? acc + 1 : acc,
    0,
  );
};

export const getArchive = (arr, category) => {
  return arr.reduce(
    (acc, note) =>
      note.category === category && note.archived ? acc + 1 : acc,
    0,
  );
};
