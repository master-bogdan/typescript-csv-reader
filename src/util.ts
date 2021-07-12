export const dateStringToDate = (dateString: string): Date => {
  const dateParse = dateString
    .split('/')
    .map((item: string): number => {
      return parseInt(item);
    });

  return new Date(dateParse[2], dateParse[1] - 1, dateParse[0]);
};
