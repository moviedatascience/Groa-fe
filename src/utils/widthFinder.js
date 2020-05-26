const widthFinder = (screenWidth) => {
  if (parseInt(screenWidth) < 450) {
    return true;
  } else {
    return false;
  }
};

export default widthFinder;
