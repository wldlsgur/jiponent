import { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';
import { List } from '../..';

/**
 * ## List 컴포넌트
 * 이 컴포넌트는 데이터 배열을 입력 받아 화면에 리스트 형태로 표시합니다. 사용자는 데이터 배열과 각 요소를 어떻게 렌더링할지 정의하는 함수를 제공함으로써 컴포넌트의 동작을 커스터마이징할 수 있습니다.
 *
 * ### 속성(Props)
 * - **data:** 리스트에 표시될 데이터 배열입니다. 이 배열의 각 요소는 리스트의 항목으로 표시됩니다.
 * - **children:** 각 데이터 항목을 어떻게 렌더링할지 정의하는 함수입니다. 이 함수는 데이터 배열의 요소와 그 인덱스를 인자로 받고, React 노드를 반환합니다.
 * - **...rest:** `<ul>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **NumberList**
 *    - 숫자 목록을 표시하는 기본적인 사용 사례입니다. 'one', 'two', 'three'가 리스트에 순서대로 표시됩니다.
 *
 * 2. **FruitList**
 *    - 과일 목록을 표시하는 기본적인 사용 사례입니다. 'apple', 'banana', 'orange'가 리스트에 순서대로 표시됩니다.
 */

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      defaultValue: ['one', 'two', 'three'],
      control: 'object',
      description: '리스트에 표시될 데이터 배열',
    },
    children: {
      control: 'object',
      description: '리스트에 표시될 React.Node 타입 아이템',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NumberList: Story = {
  args: {
    data: ['one', 'two', 'three'],
    children: (data: unknown, index: number): ReactNode => {
      const value = data as string;
      return (
        <li
          key={index}
          style={{ listStyle: 'none' }}
        >
          {value}
        </li>
      );
    },
  },
};

export const FruitList: Story = {
  args: {
    data: ['apple', 'banana', 'orange'],
    children: (data: unknown, index: number): ReactNode => {
      const value = data as string;
      return (
        <li
          key={index}
          style={{ listStyle: 'none' }}
        >
          {value}
        </li>
      );
    },
  },
};
