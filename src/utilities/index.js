const debounce = (fn, delay) => {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    const args = arguments;
    timeout = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

const objectToQueryString = (obj) => {
  return Object.keys(obj)
    .filter((key) => !!obj[key])
    .map(
      (key) =>
        `filter[${encodeURIComponent(key)}]=${encodeURIComponent(obj[key])}`
    )
    .join('&');
};

export { debounce, objectToQueryString };
