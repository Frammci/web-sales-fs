import ItemList from "../itemList/ItemList";
import { PRODUCTS } from "../../data/constant";
import s from "./style.module.css";

const MenuHeader = (props) => {
  
  const { id, onItemClick } = props;

  return (
    <div className={s.containerTop}>
      {PRODUCTS.map((product) => (
        <ItemList
          key={product.id}
          isSelected={id === product.id}
          onClick={onItemClick}
          id={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default MenuHeader;
