import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import ClipButton from "../UI/button/clipButton/ClipButton";
import LineButton from "../UI/button/lineButton/LineButton";
import st from "./ModalThanksOrder.module.scss";
interface Props {
  setModal: (value: boolean) => void;
}
const ModalThanksOrder: FC<Props> = ({ setModal }) => {
  const navigate = useNavigate();
  return (
    <div className={st.modalContainer} onClick={() => setModal(false)}>
      <div
        className={st.modalWrapper}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <button
          className={st.closeBtn}
          onClick={() => setModal(false)}
        ></button>
        <div className={st.head}>Спасибо за заказ!</div>
        <div className={st.numberOrder}>
          Номер вашего заказа: <span className={st.number}>123456789</span>
        </div>
        <div className={st.helpInfo}>
          В ближайшее время с вами свяжется наш менеджер для уточнения деталей
          заказа
        </div>
        <div className={st.navigationContainer}>
          <ClipButton
            onClick={() => {
              setModal(false);
              navigate("/tattoo-react/");
            }}
            theme="dark"
            className={st.returnMainbtn}
          >
            <span className={st.btnText}>Вернуться на главную</span>
            <span className={`${st.btnText} ${st.mobileBtnText}`}>
              На главную
            </span>
          </ClipButton>

          <LineButton
            onClick={() => {
              setModal(false);
              navigate("/tattoo-react//catalog");
            }}
          >
            Вернуться в каталог
          </LineButton>
        </div>
      </div>
    </div>
  );
};

export default ModalThanksOrder;
