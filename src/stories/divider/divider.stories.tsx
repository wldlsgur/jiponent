import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../../libs';

/**
 * ## Divider 컴포넌트
 * 이 컴포넌트는 화면에 구분선을 표시합니다. 사용자는 구분선의 방향을 지정할 수 있으며, `<hr>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 속성(Props)
 * - **direction:** 구분선의 방향을 지정합니다. 'horizontal' 또는 'vertical' 중 하나를 선택할 수 있습니다.
 * - **...rest:** 이 컴포넌트는 `<hr>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다. 예를 들어, 클래스 이름, 스타일 등을 정의할 수 있습니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Horizontal**
 *    - 기본적으로 가로 방향 구분선을 표시합니다.
 *    - `direction` 속성을 'horizontal'로 설정하여 구분선의 방향을 지정합니다.
 *    - `decorators`를 사용하여 구분선이 40rem 너비의 컨테이너 내에 렌더링되도록 합니다.
 *
 * 2. **Vertical**
 *    - 세로 방향 구분선을 표시합니다.
 *    - `direction` 속성을 'vertical'로 설정하여 구분선의 방향을 지정합니다.
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
