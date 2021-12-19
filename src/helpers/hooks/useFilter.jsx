export const useFilter = (arr) => {
  const newArr = arr.filter((i) => (i.userCode ? i : ""));
  return newArr;
};
