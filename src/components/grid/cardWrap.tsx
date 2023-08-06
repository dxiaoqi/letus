import React, { useContext, useEffect, useMemo, useState } from "react";
import { WidthProvider, Responsive, Layouts, Layout } from "react-grid-layout";
import { CardProps, RowHeight } from "../../props";
import CardContainer from "./CardContainer";
import  "./index.scss";
const ResponsiveGridLayout = WidthProvider(Responsive);

interface CardWrapProps {
  onLayoutChange: (
    layout: ReactGridLayout.Layout[],
    allLayouts: Layouts
  ) => void;
  initialCards: CardProps[];
  onDelete: (i: string) => void;
  setCards: React.Dispatch<React.SetStateAction<CardProps[]>>;
  isEdit?: boolean;
}

const CardWrap: React.FC<CardWrapProps> = ({
  onLayoutChange,
  initialCards,
  setCards,
  onDelete,
  isEdit
}) => {
  // const { editMode, toggleEditMode } = useContext(CardContext);
  const [dragging, setDragging] = useState(false);
  const layout: Layout[] = useMemo(
    () =>
      initialCards.map((card, index) => ({
        i: card.id,
        x: card.pos.x, // 确保新卡片位于新的一行
        y: card.pos.y,
        w: card.size.w,
        h: card.size.h,
        static: false,
      })),
    [initialCards]
  );

  const onCardChange = (id: string, newProps: CardProps) => {
    setCards((prevCards: CardProps[]) =>
      prevCards.map((card) => (card.id === newProps.id ? newProps : card))
    );
  };
  console.log(initialCards);
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout }}
      onLayoutChange={onLayoutChange}
      onDragStart={() => setDragging(true)}
      onDragStop={() => setDragging(false)}
      draggableHandle=".drag-handle"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={RowHeight}
    >
      {initialCards.map((cardProps) => {
        // 在渲染卡片之前执行每个插件的函数，并更新卡片属性
        // cardProps.plugin.forEach((plugin) => {
        //   const newProps = plugin.fn(cardProps);
        //   setCards((prevCards: CardProps[]) =>
        //     prevCards.map((card) => (card.id === newProps.id ? newProps : card))
        //   );
        // });

        return (
          <div
            key={cardProps.id}
            data-grid={{
              x: cardProps.pos.x,
              y: cardProps.pos.y,
              w: cardProps.size.w,
              h: cardProps.size.h,
            }}
          >
            <div
              className="drag-handle"
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <CardContainer
                onCardChange={onCardChange}
                dragging={dragging}
                setCards={setCards}
                {...cardProps}
                isEdit={isEdit}
              >
                <cardProps.render
                  onChange={onCardChange}
                  card={cardProps}
                  isEdit={isEdit}
                />
              </CardContainer>
              {/* <Button onClick={() => onDelete(cardProps.id)}>Delete</Button> */}
            </div>
          </div>
        );
      })}
    </ResponsiveGridLayout>
  );
};

export default CardWrap;
