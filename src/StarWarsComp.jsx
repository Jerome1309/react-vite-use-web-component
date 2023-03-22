import { useEffect, useRef } from "react";
import "./assets/react-starwars";

const StarWarsComp = () => {
  const ref = useRef(null);

  const testFn = (event) => {
    console.log(event);
  };

  useEffect(() => {
    ref.current.title = "TEST";
    ref.current.btn = testFn;
  }, []);

  return <react-starwars ref={ref}></react-starwars>;
};

export default StarWarsComp;
