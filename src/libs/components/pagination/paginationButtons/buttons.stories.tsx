import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@/libs';

/**
 * ## PageButtons 컴포넌트
 *
 * 이 컴포넌트는 페이지네이션에서 페이지 번호 버튼들을 생성하여 현재 페이지를 표시하고, 페이지를 선택할 수 있는 기능을 제공합니다.
 *
 * ### 속성(Props)
 * - **maxCount:** 표시할 페이지 버튼의 최대 수를 설정합니다. 현재 페이지를 기준으로 앞뒤로 최대 몇 개의 페이지 버튼을 보여줄지 결정합니다.
 * - **activeColor:** 현재 페이지 버튼의 텍스트 색상입니다.
 * - **activeBackgroundColor:** 현재 페이지 버튼의 배경 색상입니다.
 * - **...rest:** `<button>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 기본 페이지 버튼 구성과 스타일을 가진 예시입니다.
 *
 * 2. **CustomStyledPageButtons:**
 * - 페이지 버튼에 사용자 정의 색상과 스타일을 적용한 예시입니다.
 */

const meta: Meta<typeof Pagination.PageButtons> = {
  title: 'Components/Pagination/PageButtons',
  component: Pagination.PageButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    maxCount: {
      control: 'number',
      description: '표시할 페이지 버튼의 최대 수를 설정합니다.',
    },
    activeColor: {
      control: 'color',
      description: '현재 페이지 버튼의 텍스트 색상입니다.',
    },
    activeBackgroundColor: {
      control: 'color',
      description: '현재 페이지 버튼의 배경 색상입니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxCount: 5,
    activeColor: '#ffffff',
    activeBackgroundColor: '#007bff',
  },
  render: (args) => (
    <Pagination
      defaultPage={1}
      limit={1}
      total={999}
      onPageChange={action('page')}
    >
      <Pagination.PageButtons {...args} />
    </Pagination>
  ),
};

export const CustomStyledPageButtons: Story = {
  args: {
    maxCount: 5,
    activeColor: '#ff0000',
    activeBackgroundColor: '#00ff00',
    style: { padding: '10px', fontSize: '14px' },
  },
  render: (args) => (
    <Pagination
      defaultPage={1}
      limit={1}
      total={999}
      onPageChange={action('page')}
    >
      <Pagination.PageButtons {...args} />
    </Pagination>
  ),
};
