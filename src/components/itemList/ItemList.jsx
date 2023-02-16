import { useState } from "react";
import s from "./style.module.css";

const ItemList = (props) => {

  const { id, product, onClick } = props;

  const [isHovered, setIsHover] = useState(false);

  const activate = () => {
    setIsHover(true);
  };

  const deactivate = () => {
    setIsHover(false);
  };

  const getBackgroundColor = () => {
    if (isHovered) {
      return "#aa92de";
    } else {
      if (props.isSelected) {
        return "#7a6ea9";
      } else {
        return "#eff0ef";
      }
    }
  };

  const onItemClick = () => {
    onClick(id, product);
  };

  return (
    <button
      className={s.container}
      onClick={onItemClick}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      TOP {props.id}
    </button>
  );
};

export default ItemList;
