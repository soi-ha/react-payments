import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from '../components/CardPreview';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    expirationMonth: '04',
    expirationYear: '24',
    name: 'HONG GILDONG',
  },
};

export const Visa: Story = {
  args: {
    cardNumber: ['4234', '5678', '9012', '3456'],
    expirationMonth: '04',
    expirationYear: '24',
    name: 'HONG GILDONG',
  },
};

export const Mastercard: Story = {
  args: {
    cardNumber: ['5234', '5678', '9012', '3456'],
    expirationMonth: '04',
    expirationYear: '24',
    name: 'HONG GILDONG',
  },
};

export const LongName: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    expirationMonth: '04',
    expirationYear: '24',
    name: 'KIM AREUMDAUNIDDANGEGUMSUGANGSANE',
  },
};