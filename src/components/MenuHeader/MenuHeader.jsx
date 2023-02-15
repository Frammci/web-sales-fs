import ItemList from "../itemList/ItemList";
import { PRODUCTS } from "./constant";
import s from "./style.module.css";

const MenuHeader = (props) => {
  return (
    <div className={s.containerTop}>
      {PRODUCTS.map((product) => (
        <ItemList
          key={product.id}
          isSelected={props.id === product.id}
          onClick={props.onItemClick}
          id={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default MenuHeader;
