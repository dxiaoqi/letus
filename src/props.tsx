import React from 'react';

// 插件接口，可以根据实际需求进行扩展
interface Plugin {
  name: string;
  // 插件函数，接收卡片属性作为参数，返回新的卡片属性
  fn: (props: CardProps) => CardProps;
}
// 坐标接口
interface Position {
  x: number;
  y: number;
}

// 尺寸接口
interface Size {
  w: number;
  h: number;
}

export interface CardProps {
  name?: string;
  // 唯一hash
  id: string;
  // 是否编辑状态
  isEdit: boolean;
  // 坐标
  pos: Position;
  // 尺寸
  size: Size;
  // 插件能力
  plugin: Plugin[];
  render: React.FC<any>;
}

// Card 接口
export interface Card extends CardProps {
  // React 组件
  render: React.FC<CardProps>;
}

export interface ToolbarOption {
  id: string;
  icon: React.ReactNode;
  createCard: () => Card;
};

export interface ToolbarState {
  isOpen: boolean;
  options: ToolbarOption[];
  selectedOptionId: string | null;
};

export const CARD_DRAG_TYPE = 'card';

export const RowHeight = 96;