import React, { useRef } from "react";
import Image from 'next/image'
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

const ImageBox: React.FC<Props> = ({ card, isEdit, onChange }) => {
  const divRef = useRef();

  return (
    <div className={styles.cardContainer} title={card.title} style={{ height: "100%" }}>
      <img width={1000} height={1000} style={{
          maxWidth: '100%',
          height: 'auto',
      }} alt={card.content} ref={() => divRef} src={card.content} />
    </div>
  );
};

export default ImageBox;