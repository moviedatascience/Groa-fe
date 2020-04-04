{/* 
  * Used for handleChange, the search action runs each time a key is pressed
  * This function waits until you're done typing to act on the search
  */}
 
 export default function (callback, delay)  {
    let timeoutId
    return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        timeoutId = null
        callback(...args)
      }, delay)
    }
  }