export const makeRequest = (path, delay) => {
  const fetchData = async () => {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  };

  const timer = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(fetchData());
      }, delay);
    });
    return promise;
  };

  return timer();
};
