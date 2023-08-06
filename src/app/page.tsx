'use client'
import Header from "@/components/header";
import React, { useState } from "react";
import { useTheme } from "./provider";
import './theme.scss'
import Grid from "@/components/grid";
import { CardProps } from '@/props'
export default function App() {
  const {theme, setTheme} = useTheme();
  const initialCards: CardProps[] = [
  ];
  const [cards, setCards] = useState(initialCards);
  return (
    <div className={`${theme}-theme`}>
      <Header setCards={setCards}/>
      <Grid setCards={setCards} cards={cards}/>
    </div>
    )
}
