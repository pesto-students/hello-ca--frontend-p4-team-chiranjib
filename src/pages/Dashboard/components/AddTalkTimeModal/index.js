import React, {useState, useEffect} from "react";
import Button from "../../../../components/Button";
import IconButton from '@mui/material/IconButton';
import "./style.scss";
import { Add, Remove } from "@mui/icons-material";

const AddTalkTimeModal = ({ handleClose }) => {

  const [minutes, setMinutes] = useState(30);
  const [amount, setAmount] = useState(900);
  
  const addMinutes = () => {
    setMinutes((m) => m + 10);
  }

  const minusMinutes= () => {
    setMinutes((m) => m - 10);
  };

  useEffect(() => {
    setAmount((a) => minutes*30);
  });

  return (
    <div className="call-modal-container">
      <div className="call-modal-header">Add Talk Time</div>
      <div className="call-modal-content">

        <div className="minutes-container">
          <IconButton color="primary" aria-label="Remove minutes" component="label" onClick={minusMinutes}>
            <Remove />
          </IconButton>

          {minutes} Mins
          
          <IconButton color="primary" aria-label="Add minutes" component="label" onClick={addMinutes}>
            <Add />
          </IconButton>
        </div>

        <Button label={'Pay ₹ '+amount} className="close-btn" />
      </div>
    </div>
  );
};

export default AddTalkTimeModal;