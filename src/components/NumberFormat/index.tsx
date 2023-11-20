import {formatNumber} from '@lykkex/lykke.js';
import React from 'react';

const formattedNumber = formatNumber(0);

interface NumberFormatProps {
  value: number;
  accuracy: number;
}

export const NumberFormat: React.FC<NumberFormatProps> = ({
  value,
  accuracy
}) => <span>{formattedNumber(value, accuracy)}</span>;
