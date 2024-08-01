import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/libs';

/**
 * ## InputContainer 컴포넌트
 *
 * 이 컴포넌트는 입력 필드를 감싸는 컨테이너 컴포넌트입니다.
 * 서브 컴포넌트들을 포함하여 레이블, 입력 필드, 에러 메시지 등을 구성할 수 있습니다.
 *
 * ### 서브 컴포넌트(Props)
 * - **Input.Label:** 입력 필드의 레이블을 설정합니다.
 * - **Input.Text:** 입력 필드를 설정합니다.
 * - **Input.ErrorMessage:** 에러 메시지를 설정합니다.
 *
 * ### 속성(Props)
 * - **children:** InputContainer 내에 렌더링될 서브 컴포넌트를 정의합니다.
 * - **...rest:** `<div>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **ColumnFlex:**
 * - flex-direction이 colum일 때 보여지는 예시입니다.
 *
 * 2. **RowFlex:**
 * - flex-direction이 row일 때 보여지는 예시입니다.
 */

const meta: Meta<typeof Input> = {
  title: 'Components/Input/InputContainer',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'object',
      description:
        'Input 내에 렌더링될 서브 컴포넌트(Input.Label, Input.ErrorMessage, Input.Text)를 정의합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ColumnFlex: Story = {
  args: {
    style: {
      gap: '10px',
    },
    children: (
      <>
        <Input.Label>이름</Input.Label>
        <Input.Text placeholder='이름을 입력하세요' />
        <Input.ErrorMessage visible>이름 입력 요망</Input.ErrorMessage>
      </>
    ),
  },
};

export const RowFlex: Story = {
  args: {
    style: {
      flexDirection: 'row',
      gap: '10px',
      alignItems: 'center',
    },
    children: (
      <>
        <Input.Label>이름</Input.Label>
        <Input.Text placeholder='이름을 입력하세요' />
        <Input.ErrorMessage visible>이름 입력 요망</Input.ErrorMessage>
      </>
    ),
  },
};
