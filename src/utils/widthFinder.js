const widthFinder = (screenWidth) => {
  if (parseInt(screenWidth) < 400) {
    return true;
  } else {
    return false;
  }
};

export default widthFinder;
