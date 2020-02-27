export function ifDev(val) {
  console.log("node env", process.env.NODE_ENV);
  if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test")
    return val;
  else return undefined;
}
