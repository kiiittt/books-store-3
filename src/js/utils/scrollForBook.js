const getTopValue = () => {
  if (window.matchMedia('(max-width: 768px)').matches) {
    return 700;
  } else if (window.matchMedia('(max-width: 1440px)').matches) {
    return 590;
  } else {
    return 0;
  }
};

export default getTopValue;
