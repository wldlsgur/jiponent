import { Meta, StoryObj } from '@storybook/react';
import { BreadCrumb } from '@/libs';

/**
 * ## BreadCrumbItem 컴포넌트
 *
 * 이 컴포넌트는 내비게이션의 단일 항목을 나타냅니다.
 * `BreadCrumbContainer`와 함께 사용됩니다.
 *
 * ### 속성(Props)
 * - **children:** 항목의 텍스트 또는 요소입니다.
 * - **href:** 항목의 링크입니다.
 * - **active:** 현재 활성화된 항목인지 여부를 나타냅니다.
 * - **separator:** 항목 간의 구분자입니다.
 * - **...rest:** `<div>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 기본 BreadCrumbItem 컴포넌트입니다. 활성화되지 않은 상태입니다.
 *
 * 2. **Active:**
 * - 활성화된 BreadCrumbItem 컴포넌트입니다.
 *
 * 3. **WithCustomSeparator:**
 * - 커스텀 구분자가 있는 BreadCrumbItem 컴포넌트입니다.
 */

const meta: Meta<typeof BreadCrumb.Item> = {
  title: 'Components/BreadCrumb/BreadCrumbItem',
  component: BreadCrumb.Item,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'object',
      description: '항목의 텍스트 또는 요소입니다.',
    },
    href: {
      control: 'text',
      description: '항목의 링크입니다.',
    },
    active: {
      control: 'boolean',
      description: '현재 활성화된 항목인지 여부를 나타냅니다.',
    },
    separator: {
      control: 'object',
      description: '항목 간의 구분자입니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Home',
    href: '#',
    active: false,
    separator: '>',
  },
};

export const Active: Story = {
  args: {
    children: 'Home',
    href: '#',
    active: true,
    separator: '>',
  },
};

export const WithCustomSeparator: Story = {
  args: {
    children: 'Home',
    href: '#',
    active: false,
    separator: '/',
  },
};
