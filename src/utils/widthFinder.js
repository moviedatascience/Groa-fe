const widthFinder = (screenWidth) => {
  console.log("This is the size: ", screenWidth);
  if (parseInt(screenWidth) < 450) {
    return true;
  } else {
    return false;
  }
};

export default widthFinder;
