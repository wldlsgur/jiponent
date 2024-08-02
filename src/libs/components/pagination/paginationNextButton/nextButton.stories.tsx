import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@/libs';

/**
 * ## NextButton 컴포넌트
 *
 * 이 컴포넌트는 페이지네이션에서 다음 페이지로 이동하는 버튼입니다. 버튼 클릭 시 페이지네이션 컨텍스트의 `handleMoveNextPage` 함수가 호출됩니다.
 *
 * ### 속성(Props)
 * - **children:** 버튼 내부에 렌더링될 내용을 설정합니다. 일반적으로 버튼 텍스트를 포함합니다.
 * - **...rest:** `<button>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 기본 스타일과 동작을 가진 다음 페이지 버튼의 예시입니다.
 */

const meta: Meta<typeof Pagination.NextButton> = {
  title: 'Components/Pagination/NextButton',
  component: Pagination.NextButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'object',
      description: '버튼 내부에 렌더링될 내용입니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '다음',
  },
};
