const addToDB = (time) => {
  const prevData = localStorage.getItem("break");
  const oldData = JSON.parse(prevData);
  if (oldData) {
    localStorage.setItem("break", JSON.stringify(time));
  } else {
    localStorage.setItem("break", JSON.stringify(time));
  }
};
const getFromDb = () => {
  const exist = localStorage.getItem("break");
  if (exist) {
    const data = JSON.parse(exist);
    return data;
  }
};
export { addToDB, getFromDb };
