import React, { useRef } from "react";
import styles from './urlmeta.module.scss';
interface Props {
  card: {
    id: string,
    title: string;
    content: {
      url: string;
      title?: string; 
      faviconUrl?: string;
      screenshotUrl?: string;
      videoUrl?: string;
      description?: string;
      audioUrl?: string;
    };
  }
  isEdit?: boolean;
  onChange: (id: string, card: any) => void;
}

const UrlMetaBox: React.FC<Props> = ({ card, isEdit, onChange }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const { url,  title, screenshotUrl, description, faviconUrl} = card.content;
  const img = faviconUrl || screenshotUrl;
  return (
    <div ref={divRef as any} className={styles.UrlMetaBox} title={card.title} style={{ height: "100%" }}>
    {img && <img src={img} alt={title || "image"} />}
    {title && <h2>{title}</h2>}
    {description && <p>{description}</p>}
    </div>
  );
};

export default UrlMetaBox;