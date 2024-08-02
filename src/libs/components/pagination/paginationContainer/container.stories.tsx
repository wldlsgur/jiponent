import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '@/libs';

/**
 * ## Pagination 컴포넌트
 *
 * 이 컴포넌트는 페이지네이션 기능을 제공하며, 페이지 버튼 및 이전/다음 버튼을 포함할 수 있습니다. 사용자는 이 컴포넌트를 통해 페이지를 이동하고, 현재 페이지를 관리할 수 있습니다.
 *
 * ### 서브 컴포넌트
 * - **Pagination.PrevButton:** 이전 페이지로 이동하는 버튼입니다.
 * - **Pagination.NextButton:** 다음 페이지로 이동하는 버튼입니다.
 * - **Pagination.PageButtons:** 페이지 번호 버튼들을 렌더링합니다.
 *
 * ### 속성(Props)
 * - **defaultPage:** 페이지네이션의 기본 페이지 번호를 설정합니다.
 * - **limit:** 페이지당 항목 수를 설정합니다. 이 값은 한 페이지에 표시되는 아이템의 수를 의미합니다.
 * - **total:** 총 항목 수를 설정합니다. 전체 아이템의 수를 나타냅니다.
 * - **onPageChange:** 페이지가 변경될 때 호출되는 콜백 함수입니다. 새로운 페이지 번호가 인자로 전달됩니다.
 * - **children:** 페이지네이션 내부에 렌더링할 자식 컴포넌트입니다. 일반적으로 페이지 버튼, 이전 버튼, 다음 버튼 등을 포함합니다.
 * - **...rest:** `<div>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 기본 페이지네이션 예시입니다.
 */

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultPage: {
      control: 'number',
      description: '기본 페이지 번호를 설정합니다.',
    },
    limit: {
      control: 'number',
      description: '페이지당 항목 수를 설정합니다. 한 페이지에 표시될 아이템의 수를 의미합니다.',
    },
    total: {
      control: 'number',
      description: '총 항목 수를 설정합니다. 전체 아이템의 수를 나타냅니다.',
    },
    onPageChange: {
      action: 'pageChanged',
      description:
        '페이지가 변경될 때 호출되는 함수입니다. 새로운 페이지 번호가 인자로 전달됩니다.',
    },
    children: {
      control: 'object',
      description:
        'Pagination 내에 렌더링될 서브 컴포넌트(Pagination.NextButton, Pagination.PageButtons, Pagination.PrevButton)를 정의합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultPage: 1,
    limit: 10,
    total: 1000,
    onPageChange: action('page'),
    children: (
      <>
        <Pagination.PrevButton>이전</Pagination.PrevButton>
        <Pagination.PageButtons
          maxCount={10}
          activeColor='gray'
          activeBackgroundColor='red'
        />
        <Pagination.NextButton>다음</Pagination.NextButton>
      </>
    ),
  },
};
