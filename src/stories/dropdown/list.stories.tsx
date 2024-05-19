import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Dropdown } from '../../libs';

/**
 * ## DropdownList 컴포넌트
 *
 * 이 컴포넌트는 드롭다운 선택 기능을 구현하기 위한 서브 컴포넌트입니다. 반드시 최상위 Dropdown 컴포넌트 내부에서 사용되어야 하며, 사용자는 이를 통해 옵션 항목들을 보거나 선택할 수 있습니다.
 *
 * ### 속성(Props)
 * - **list:** 드롭다운에 표시될 문자열 타입 항목들의 목록입니다.
 * - **listRest:** 이 컴포넌트는 `<ul>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다. 예를 들어, 클래스 이름, 스타일 등을 정의할 수 있습니다.
 * - **itemRest:** 이 컴포넌트는 `<li>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다. 예를 들어, 클래스 이름, 스타일 등을 정의할 수 있습니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **BaseDropdownList:**
 * - ['apple', 'banana', 'orange']을 list 데이터로 설정합니다.
 */

const meta: Meta<typeof Dropdown.List> = {
  title: 'Components/Dropdown/DropdownList',
  component: Dropdown.List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    list: {
      control: 'object',
      description: '드롭다운에 표시될 항목들의 목록입니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FruitDropdown: Story = {
  decorators: [
    (DropdownList, { args }) => (
      <Dropdown
        defaultValue='select 초기 선택 값'
        onChange={action('value')}
      >
        <Dropdown.Select />
        <DropdownList args={args} />
      </Dropdown>
    ),
  ],
  args: { list: ['apple', 'banana', 'orange'] },
};
