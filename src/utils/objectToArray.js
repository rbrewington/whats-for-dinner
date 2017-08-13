const objectToArray = obj => {
  return Object.keys(obj).map(key => {
    return {
      key,
      ...obj[key],
    };
  });
};

export default objectToArray;
