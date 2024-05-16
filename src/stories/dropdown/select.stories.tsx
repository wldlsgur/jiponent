import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../../libs';

/**
 * ## DropdownSelect 컴포넌트
 *
 * 이 컴포넌트는 드롭다운 선택 기능을 구현하기 위한 서브 컴포넌트입니다. 반드시 최상위 Dropdown을 자식으로 사용되어야 하고 사용자는 선택된 옵션을 볼 수 있습니다.
 *
 * ### 속성(Props)
 * - **...rest:** 이 컴포넌트는 `<p>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다. 예를 들어, 클래스 이름, 스타일 등을 정의할 수 있습니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **BaseDropdownSelect:**
 * - 최상위 Dropdown의 Props의 defaultValue를 통해 기본 선택값을 "select 초기 선택 값"으로 설정합니다.
 */

const meta: Meta<typeof Dropdown.Select> = {
  title: 'Components/Dropdown/DropdownSelect',
  component: Dropdown.Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseDropdownSelect: Story = {
  decorators: [
    (DropdownSelect, { args }) => {
      return (
        <Dropdown
          defaultValue='select 초기 선택 값'
          onChange={() => {}}
        >
          <DropdownSelect args={args} />
        </Dropdown>
      );
    },
  ],
  args: {},
};
