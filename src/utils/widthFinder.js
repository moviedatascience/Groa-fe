const widthFinder = (screenWidth) => {
  if (parseInt(screenWidth) < 500) {
    return true;
  } else {
    return false;
  }
};

export default widthFinder;
