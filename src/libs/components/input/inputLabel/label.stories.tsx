import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/libs';

/**
 * ## Label 컴포넌트
 *
 * 이 컴포넌트는 입력 필드의 레이블을 표시하는 컴포넌트입니다.
 *
 * ### 속성(Props)
 * - **color:** 레이블 텍스트의 색상을 설정합니다. 기본값은 `#888888`입니다.
 * - **children:** 레이블의 내용을 설정합니다.
 * - **...rest:** `<label>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 사용자는 기본 레이블을 설정하고 텍스트 색상을 조절할 수 있습니다.
 * - `color` 속성을 통해 텍스트 색상을 변경할 수 있습니다.
 */

const meta: Meta<typeof Input.Label> = {
  title: 'Components/Input/Label',
  component: Input.Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
      description: '레이블 텍스트의 색상을 설정합니다. 기본값은 `#888888`입니다.',
    },
    children: {
      control: 'object',
      description: '레이블의 내용을 설정합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: '#888888',
    children: '레이블 예시입니다.',
  },
};
