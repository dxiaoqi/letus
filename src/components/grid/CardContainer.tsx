import React, { useContext, useState } from "react";
import { RowHeight, CardProps } from "../../props";

interface IProps {
  childrens?: React.ReactNode;
  [key: string]: any;
}

const CardContainer:React.FC<IProps> = (props) => {
  const { size: { w, h }, dragging, onCardChange, setCards, id, isEdit } = props;
  const [hover, setHover] = useState(false);

  const onToolChange =(card: CardProps) => {
    onCardChange(props.id, card)
  }

  const onDelete = () => {
    setCards((preCrads: CardProps[]) => {
      return preCrads.filter(c => c.id !== id);
    })
  }
  return (
    <div style={{
      height: '100%',
      width: '100%'
    }}  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
    <div className={`drag-handle card`} {...props} style={{
      height: '100%',
      width: '100%'
    }} >
      {isEdit && <div className="delete-button" onClick={onDelete}>X</div>}
      <div className={`drag-handle`} style={{
      height: '100%',
      width: '100%'
    }}>
      {props.children}
      </div>
    </div>
    {/* <Tooltip
        isOpen={!dragging && hover}
        placement="bottom"
        content={<Tool />}
      >
        <p></p>
      </Tooltip>
      <p className="text-small">
      </p> */}
    </div>
  );
}
export default CardContainer;