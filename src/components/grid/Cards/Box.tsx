import React, { useEffect, useRef } from "react";
import styles from './index.module.scss';
interface Props {
  card: {
    id: string,
    title: string;
    content: string;
  }
  isEdit?: boolean;
  onChange: (id: string, card: any) => void;
}

const Card: React.FC<Props> = ({ card, isEdit, onChange }) => {
  const divRef = useRef<HTMLParagraphElement>(null);
  const handleInput = (e: any) => 
  {
    console.log(divRef.current)
    if (divRef.current) {
      (divRef.current as any).innerHTML = e.target.innerText;
      console.log({
        ...card,
        content: e.target.innerText
      })
      onChange(card.id, {
        ...card,
        content: e.target.innerText
      })
    }
  }
  useEffect(() => {
    const el = divRef.current;
    let range, selection;

    if (document.createRange && el) { // 全部现代浏览器和IE9以上
      range = document.createRange();
      range.selectNodeContents(el as any);
      range.collapse(false);
      selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }, [divRef, card]);
  return (
    <div className={styles.cardContainer} title={card.title} style={{ height: "100%" }}>
      
      <p ref={divRef} contentEditable={isEdit} onInput={handleInput}>{card.content}</p>
    </div>
  );
};

export default Card;