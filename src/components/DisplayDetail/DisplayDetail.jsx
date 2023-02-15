import s from "./style.module.css";

const DisplayDetail = (props) => {
  const { data } = props;
  return (
    <> 
    {props.id
        ? <><div className={s.container}>
          <img src={data.urlImg} />
        </div>
          <div className={s.container}>
            <div>
              <h5 style={{ textAlign: "center" }}>{data.product}</h5>
              <p className={s.desc}>
                {data.description}
              </p>

            </div>
            <span className={s.spanDisplay}>{data.display}</span>
            <div className={s.price}>
              <span>{data.price}</span>
            </div>
          </div></>
        : "Selecciona un producto"}
    
    </>
  );
};

export default DisplayDetail;
