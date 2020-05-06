export const generateDays = () => {
  const days = [];
  for (let i = 1; i <= 30; i++) {
    days.push({ id: i, day: i });
  }
  return days;
};
