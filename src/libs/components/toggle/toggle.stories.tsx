import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '@/libs';

/**
 * ## Toggle 컴포넌트
 *
 * 이 컴포넌트는 토글 스위치를 렌더링합니다.
 *
 * ### 속성(Props)
 * - **initialState:** 토글 스위치의 초기 상태를 설정합니다. (기본값: false)
 * - **onToggle:** 토글 상태가 변경될 때 호출되는 콜백 함수입니다.
 * - **disabled:** 토글 스위치를 비활성화합니다. (기본값: false)
 * - **inActiveColor:** 토글이 비활성화된 상태일 때의 배경색입니다. (기본값: '#ccc')
 * - **activeColor:** 토글이 활성화된 상태일 때의 배경색입니다. (기본값: 'lightgreen')
 * - **...rest:** `<div>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 기본 스타일과 애니메이션을 가진 토글 스위치를 렌더링합니다.
 *
 * 2. **Color Variations:**
 * - 다양한 색상 설정을 가진 토글 스위치를 렌더링합니다.
 *
 * 3. **Disabled:**
 * - 비활성화된 토글 스위치를 렌더링합니다.
 */

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialState: {
      control: 'boolean',
      description: '토글 스위치의 초기 상태를 설정합니다.',
      defaultValue: false,
    },
    onToggle: {
      action: 'onToggle',
      description: '토글 상태가 변경될 때 호출되는 콜백 함수입니다.',
      defaultValue: action('state'),
    },
    disabled: {
      control: 'boolean',
      description: '토글 스위치를 비활성화합니다.',
      defaultValue: false,
    },
    inActiveColor: {
      control: 'color',
      description: '토글이 비활성화된 상태일 때의 배경색입니다.',
      defaultValue: '#ccc',
    },
    activeColor: {
      control: 'color',
      description: '토글이 활성화된 상태일 때의 배경색입니다.',
      defaultValue: 'lightgreen',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialState: false,
  },
};

export const ColorVariations: Story = {
  args: {
    inActiveColor: '#ffcccb',
    activeColor: '#90ee90',
  },
};

export const Disabled: Story = {
  args: {
    initialState: false,
    disabled: true,
  },
};
