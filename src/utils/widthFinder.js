const widthFinder = (screenWidth) => {
  if (parseInt(screenWidth) < 380) {
    return true;
  } else {
    return false;
  }
};

export default widthFinder;
