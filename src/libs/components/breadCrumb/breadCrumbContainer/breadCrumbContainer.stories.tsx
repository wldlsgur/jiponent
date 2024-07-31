import { Meta, StoryObj } from '@storybook/react';
import { BreadCrumb, Icon } from '@/libs';

/**
 * ## BreadCrumbContainer 컴포넌트
 *
 * 이 컴포넌트는 페이지 내의 경로를 표시하기 위한 네비게이션을 제공합니다.
 * BreadCrumbItem을 자식으로 사용하여 각 경로를 나타냅니다.
 *
 * ### 속성(Props)
 * - **children:** BreadCrumbItem 컴포넌트들이 포함될 자식 요소입니다.
 * - **separator:** 경로를 구분하는 구분자 문자열입니다.
 * - **...rest:** `<nav>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다. 예를 들어, 클래스 이름, 스타일 등을 정의할 수 있습니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **> BreadCrumb:**
 * - > 구분자를 통해 경로를 표시합니다.
 *
 * 2. **`/` BreadCrumb:**
 * - / 구분자를 통해 경로를 표시합니다.
 */

const meta: Meta<typeof BreadCrumb> = {
  title: 'Components/BreadCrumb/BreadCrumbContainer',
  component: BreadCrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: 'object',
      description: '경로를 구분하는 콘텐츠입니다.',
    },
    children: {
      control: 'object',
      description: 'BreadCrumbItem 컴포넌트들이 포함될 자식 요소입니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BreadCrumb1: Story = {
  decorators: [
    () => {
      return (
        <BreadCrumb
          separator={
            <Icon
              name='chevron-right'
              fill='white'
            />
          }
        >
          <BreadCrumb.Item href='#'>홈</BreadCrumb.Item>
          <BreadCrumb.Item href='#'>카테고리</BreadCrumb.Item>
          <BreadCrumb.Item href='#'>서브 카테고리</BreadCrumb.Item>
          <BreadCrumb.Item href='#'>아이템</BreadCrumb.Item>
        </BreadCrumb>
      );
    },
  ],
};

export const BreadCrumb2: Story = {
  decorators: [
    () => {
      return (
        <BreadCrumb
          separator={
            <Icon
              name='arrow-right'
              fill='white'
            />
          }
        >
          <BreadCrumb.Item href='#'>홈</BreadCrumb.Item>
          <BreadCrumb.Item href='#'>카테고리</BreadCrumb.Item>
          <BreadCrumb.Item href='#'>서브 카테고리</BreadCrumb.Item>
          <BreadCrumb.Item href='#'>아이템</BreadCrumb.Item>
        </BreadCrumb>
      );
    },
  ],
};
