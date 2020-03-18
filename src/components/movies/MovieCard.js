import React, {useState} from "react";
import Stars from "@material-ui/lab/Rating";

// more fields will be appearing according to the Figma file
export default function MovieCard({ name, year, image }) {
  
  const [value, setValue] = useState(0);


  return (
    <div data-test="box" className="box">
      
      <img src={image} alt="Random Movie poster as a placeholder." />
      <div className="text-container">
        <h3>{name}</h3>
        <p>{year}</p>

        <Stars
        precision={0.5}
          name={name}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
         
        <p>{value}</p>

  
      </div>
    </div>
  );
}
