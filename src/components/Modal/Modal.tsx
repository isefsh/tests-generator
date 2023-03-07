import "./modal.css";
import Button from "../UI/Button";

import ShySuricato from "../../assets/imgs/suricato-triste.png";
import Close from "../../assets/imgs/close.svg";
import { useNavigate } from "react-router-dom";

type ModalProps = {
  onClose: () => void;
};

const ModalComponent = ({ onClose }: ModalProps) => {
  const toNavigate = useNavigate();
  
  const desistir = () => {
    toNavigate("/result");
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-top">
        <div style={{ display: "flex", columnGap: ".563rem" }}>
              <span className="firstUnderscoreModal" />
              <span className="secondUnderscoreModal" />
            </div>
          <button className="btnClose" onClick={onClose}><img src={Close} alt="Close" /></button>
        </div>
        <div style={{ display: "flex", justifyContent: "left", width: "60%"}}>
          <div style={{flexDirection: "column", justifyContent: "space-around", height: "60%", alignContent: "space-around", padding: "10px" }}>
            <h1 style={{ fontSize: "3.125rem", color: "#3B3B3B", fontFamily: "Poppins", fontWeight: "600", margin: "10px 0px"}}>Continue!</h1>
            <p style={{fontSize: "1.5rem", fontWeight: "600", color: "#686868", margin: "10px 0px"}}>Tem certeza que quer desistir do teste?</p>
            <p style={{fontSize: "1.25rem", color: "#686868"}}>Não desista agora!</p>
            <div style={{ display: "flex", columnGap: ".563rem", margin: "20px 0px" }}>
              <span className="firstUnderscore" />
              <span className="secondUnderscore" />
            </div>
            <div style={{ display: "flex", columnGap: "3.125rem", justifyContent: "right", marginTop: "40px"}}>
              <Button buttonLabel="Desistir" buttonType="button" testState={true} onClick={desistir}/>
              <Button buttonLabel="Continuar" buttonType="button" testState={false} onClick={onClose} />
            </div>
          </div>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "60px 60px"}}>
            <img src={ShySuricato} alt="Não desista!" style={{ margin: "auto", height: "85%", boxShadow: "40px -40px #FFFBE4"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
