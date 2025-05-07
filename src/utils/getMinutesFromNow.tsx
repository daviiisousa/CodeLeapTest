export const getMinutesFromNow = (date?: string | number) => {
    if (!date) {
      console.log("Data indefinida.");
      return "Data inválida";
    }
  
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      console.log("Data inválida fornecida.");
      return "Data inválida";
    }
  
    const now = new Date();
    const diffInMs = now.getTime() - parsedDate.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  
    return diffInMinutes;
  };
  