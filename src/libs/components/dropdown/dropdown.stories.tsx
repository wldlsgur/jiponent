import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '@/libs';

/**
 * ## Dropdown 컴포넌트
 *
 * 이 컴포넌트는 드롭다운 선택 기능을 구현하기 위한 래퍼 컴포넌트입니다. 사용자는 이 컴포넌트를 통해 옵션을 선택하고, 선택된 옵션을 보거나 관리할 수 있습니다.
 *
 * ### 속성(Props)
 * - **defaultValue:** 드롭다운의 기본 선택값을 설정합니다. 예를 들어, "선택 없음" 등의 값을 기본값으로 설정할 수 있습니다.
 * - **list:** 드롭다운에 표시될 ReactNode 타입 항목들의 목록입니다.
 * - **onChange:** 사용자가 옵션을 선택하거나 변경할 때마다 호출되는 콜백 함수입니다. 이 함수는 현재 선택된 옵션 값을 인자로 제공받습니다.
 * - **ulAttribute:** `<ul>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다. 예를 들어, 클래스 이름, 스타일 등을 정의할 수 있습니다.
 * - **liAttribute:** `<li>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다. 예를 들어, 클래스 이름, 스타일 등을 정의할 수 있습니다.
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 사용자는 드롭다운에서 "선택 없음", "1", "2", "3" 중 하나를 선택할 수 있습니다.
 * - `defaultValue`를 통해 기본 선택값을 "선택 없음"으로 설정합니다.
 */

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description:
        '드롭다운의 기본 선택값을 설정합니다. 예를 들어, "선택 없음"이 기본값일 수 있습니다.',
    },
    list: {
      control: 'object',
      description: '드롭다운에 표시될 항목들의 목록입니다. 각 항목은 ReactNode 타입입니다.',
    },
    onChange: {
      action: 'changed',
      description:
        '드롭다운에서 선택이 변경될 때 호출되는 함수입니다. 이 함수는 현재 선택된 값을 인자로 제공받습니다.',
    },
    ulAttribute: {
      control: 'object',
      description:
        '이 컴포넌트는 `<ul>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다. 예를 들어, 클래스 이름, 스타일 등을 정의할 수 있습니다.',
    },
    liAttribute: {
      control: 'object',
      description:
        '이 컴포넌트는 `<li>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다. 예를 들어, 클래스 이름, 스타일 등을 정의할 수 있습니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: '선택 없음',
    list: ['선택 없음', '1', '2', '3'],
    onChange: action('value'),
    ulAttribute: {},
    liAttribute: {},
  },
};
