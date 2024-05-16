import { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@/components';

/**
 *  ## Divider Component
 *
 *  ### Props
 *  - **direction : **구분선의 방향을 지정합니다. - horizontal | vertical
 *  - **...rest : **hr태그 요소가 가진 모든 표준 HTML 속성을 지원합니다.
 */

const meta = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    direction: {
      defaultValue: 'horizontal',
      control: 'inline-radio',
      option: ['horizontal', 'vertical'],
      description: '구분선의 방향을 지정합니다.',
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  decorators: [
    (DividerComponent, { args }) => {
      return (
        <div style={{ width: '40rem' }}>
          <DividerComponent args={args} />
        </div>
      );
    },
  ],
  args: {
    direction: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
  },
};
