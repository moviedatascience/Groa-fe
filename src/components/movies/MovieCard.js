import React, {useState} from "react";
import Stars from "@material-ui/lab/Rating";

// more fields will be appearing according to the Figma file
export default function MovieCard({ name, year, image }) {
  
  const [value, setValue] = useState(0);
  // const [value, setValue] = useState({
  //   rating: 0
  // })

  // const handleChange = e => {
  //   // e.preventDefault();
  //   setValue({...value, rating:e.target.value})
  // }

  return (
    <div data-test="box" className="box">
      
      <img src={image} alt="Random Movie poster as a placeholder." />
      <div className="text-container">
        <h3>{name}</h3>
        <p>{year}</p>

        <Stars
          name="rating"
          value={value.rating}
          // onChange={handleChange}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
         
        <p>{value}</p>

  
      </div>
    </div>
  );
}
