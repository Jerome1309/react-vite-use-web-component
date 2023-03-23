import { useEffect, useRef } from "react";
// import "./assets/react-starwars";

const StarWarsComp = () => {
  // const ref = useRef(null);

  const testFn = (event) => {
    console.log(event.detail);
  };

  useEffect(() => {
    //   ref.current.title = "TEST";
    //   ref.current.btn = testFn;
    const el = document.getElementById("widget");
    console.log(el);
    el.addEventListener("onWidgetBtnClick", testFn);

    return () => {
      el.removeEventListener("onWidgetBtnClick", testFn);
    };
  }, []);

  return <react-starwars title="tessssst" widgetid="widget"></react-starwars>;
};

export default StarWarsComp;
