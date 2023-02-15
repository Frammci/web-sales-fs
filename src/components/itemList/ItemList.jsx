import { useState } from "react";
import s from "./style.module.css";

const ItemList = (props) => {
  const { product } = props;
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
    props.onClick(props.id, product);
  };

  return (
    <div
      className={s.container}
      onClick={onItemClick}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      TOP {props.id}
    </div>
  );
};

export default ItemList;
