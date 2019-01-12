export const formateTimestamp = timestamp => {
  const date = new Date(timestamp);

  const monthsMap = {
    0: "jan",
    1: "fev",
    2: "mar",
    3: "abr",
    4: "mai",
    5: "jun",
    6: "jul",
    7: "aug",
    8: "set",
    9: "out",
    10: "nov",
    11: "dez"
  };

  return `${date.getDate()} de ${
    monthsMap[date.getMonth()]
  } de ${date.getFullYear()}`;
};
