import React, { useMemo, useState } from "react";
import CardWrap from "./cardWrap";
import Card from "./Cards/Box";
import { CardProps } from "../../props";
import { Layout, Layouts } from "react-grid-layout";
import './index.scss'
import { MobileIcon } from "@radix-ui/react-icons";

interface IProps {
  cards: CardProps[];
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>,

}
const Grid: React.FC<IProps> = ({
  cards,
  setCards
}) => {
  const [preview, setPreview] = useState(false);
  const handleCardChange = (updatedCard: CardProps) => {
    setCards(prevCards =>
      prevCards.map(card =>
        card.id === updatedCard.id ? updatedCard : card
      )
    );
  };

  const handleDelete = (id: string) => {
    setCards(prevCards => prevCards.filter(card => card.id !== id));
  };

  const handleAddCard = (newCard: CardProps) => {
    setCards(prevCards => [...prevCards, newCard]);
  };

  const onLayoutChange = (layout: Layout[], allLayouts: Layouts) => {
    setCards(prevCards =>
      prevCards.map(card => {
        const layoutItem = layout.find(l => l.i === card.id);
        if (layoutItem) {
          return {
            ...card,
            pos: { x: layoutItem.x, y: layoutItem.y },
            size: { w: layoutItem.w, h: layoutItem.h }
          };
        }
        return card;
      })
    );
  };
  return (
    <div className="App">
      <div onClick={() => setPreview(true)} className="floating-button"><MobileIcon /></div>
      <CardWrap
        onLayoutChange={onLayoutChange}
        initialCards={cards}
        setCards={setCards}
        onDelete={handleDelete}
        isEdit={true}
      />
      {preview && <div className="mobile-preview">
        <div onClick={() => setPreview(false)} className="close-preview">X</div>
        <CardWrap
          isEdit={false}
          onLayoutChange={() => {}}
          initialCards={[].concat(cards as [])}
          setCards={() => {}}
          onDelete={() => {}}
        />
      </div>}
    </div>
  );
};

export default Grid;