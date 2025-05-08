export const getMinutesFromNow = (date?: string | number) => {
  if (!date) {
    console.log("Undefined date.");
    return "Invalid date";
  }
  
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    console.log("Invalid date provided.");
    return "Invalid date";
  }
  
  const now = new Date();
  const diffInMs = now.getTime() - parsedDate.getTime();
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  
  return diffInMinutes;
  };
