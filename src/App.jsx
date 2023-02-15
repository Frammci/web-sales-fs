import { useState } from "react";
import DisplayDetail from "./components/DisplayDetail/DisplayDetail";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import s from "./style.module.css";

function App() {
  const [product, setProduct] = useState("");
  const [data, setData] = useState([]);

  const onMenuListItemClick = (id, data) => {
    setProduct(id);
    setData(data);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        ICÓNICOS & TOP 5 DE KÉRASTASE
      </h1>
      <div className={s.workspace1}>
        <MenuHeader
          id={product}
          onItemClick={onMenuListItemClick}
        />
      </div>
      <div className={s.workspace2}>
        <DisplayDetail id={product} data={data} />
      </div>
    </div>
  );
}

export default App;