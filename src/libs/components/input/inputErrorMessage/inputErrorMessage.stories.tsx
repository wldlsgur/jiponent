import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/libs';

/**
 * ## InputErrorMessage 컴포넌트
 *
 * 이 컴포넌트는 입력 필드의 에러 메시지를 표시하는 컴포넌트입니다.
 *
 * ### 속성(Props)
 * - **visible:** 에러 메시지의 가시성을 설정합니다.
 * - **color:** 에러 메시지의 텍스트 색상을 설정합니다. 기본값은 `#ED4044`입니다.
 * - **children:** 에러 메시지의 내용을 설정합니다.
 * - **...rest:** `<p>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 사용자는 기본 에러 메시지를 설정하고 가시성을 조절할 수 있습니다.
 * - `color` 속성을 통해 텍스트 색상을 변경할 수 있습니다.
 */

const meta: Meta<typeof Input.ErrorMessage> = {
  title: 'Components/Input/InputErrorMessage',
  component: Input.ErrorMessage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    visible: {
      control: 'boolean',
      description: '에러 메시지의 가시성을 설정합니다.',
    },
    color: {
      control: 'color',
      description: '에러 메시지의 텍스트 색상을 설정합니다. 기본값은 `#ED4044`입니다.',
    },
    children: {
      control: 'object',
      description: '에러 메시지의 내용을 설정합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visible: true,
    color: '#ED4044',
    children: '에러 메시지 예시입니다.',
  },
};
