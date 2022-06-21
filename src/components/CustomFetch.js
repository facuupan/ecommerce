

export const CustomFetch = (time, task) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(task);
    }, time);
  });
};


