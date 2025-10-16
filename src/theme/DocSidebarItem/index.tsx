import React from 'react';
import DefaultDocSidebarItem from '@theme-original/DocSidebarItem';
import {
  BookOpen,
  Rocket,
  Columns3,
  Settings,
  LogIn,
  ShoppingCart,
  Table,
} from 'lucide-react';

const iconMap = {
  'book-open': BookOpen,
  'rocket': Rocket,
  'columns-3': Columns3,
  'settings': Settings,
  'log-in': LogIn,
  'shopping-cart': ShoppingCart,
  'table': Table,
};

function processLabel(label) {
  if (typeof label !== 'string' || !label.startsWith('icon:')) {
    return label;
  }

  const parts = label.split(' ');
  const iconName = parts[0].replace('icon:', '');
  const text = parts.slice(1).join(' ');

  const IconComponent = iconMap[iconName];
  if (!IconComponent) {
    return label;
  }

  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <IconComponent size={16} strokeWidth={2} />
      {text}
    </span>
  );
}

export default function DocSidebarItem(props) {
  const modifiedProps = { ...props };

  if (props.item?.label) {
    modifiedProps.item = {
      ...props.item,
      label: processLabel(props.item.label),
    };
  }

  return <DefaultDocSidebarItem {...modifiedProps} />;
}