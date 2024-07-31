import { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@/libs'; // Icon 컴포넌트의 실제 경로로 변경

/**
 * ## Icon 컴포넌트
 *
 * 이 컴포넌트는 Feather 아이콘을 렌더링할 수 있는 컴포넌트입니다.
 * 다양한 속성을 통해 아이콘의 크기, 색상, 회전 등을 조정할 수 있습니다.
 *
 * ### 속성(Props)
 * - **name:** 표시할 아이콘의 이름입니다. Feather 아이콘의 이름을 사용합니다.
 * - **size:** 아이콘의 크기입니다. 기본값은 16입니다.
 * - **strokeWidth:** 아이콘의 선 두께입니다. 기본값은 2입니다.
 * - **color:** 아이콘의 선 색상입니다. 기본값은 '#222'입니다.
 * - **fill:** 아이콘의 채우기 색상입니다. 기본값은 undefined입니다.
 * - **rotate:** 아이콘의 회전 각도입니다. 기본값은 undefined입니다.
 * - **...rest:** `<img>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다. 예를 들어, 클래스 이름, 스타일 등을 정의할 수 있습니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 기본 아이콘 컴포넌트입니다. 기본적인 속성만 설정합니다.
 * 2. **Custom Size and Color:**
 * - 아이콘의 크기와 색상을 커스터마이즈한 예제입니다.
 * 3. **Rotate:**
 * - 아이콘을 회전시킨 예제입니다.
 * 4. **Custom Fill:**
 * - 아이콘의 채우기 색상을 커스터마이즈한 예제입니다.
 */

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: '표시할 아이콘의 이름입니다. Feather 아이콘의 이름을 사용합니다.',
      defaultValue: 'activity',
    },
    size: {
      control: 'number',
      description: '아이콘의 크기입니다. 기본값은 16입니다.',
      defaultValue: 24,
    },
    strokeWidth: {
      control: 'number',
      description: '아이콘의 선 두께입니다. 기본값은 2입니다.',
      defaultValue: 2,
    },
    color: {
      control: 'color',
      description: "아이콘의 선 색상입니다. 기본값은 '#222'입니다.",
      defaultValue: '#222',
    },
    fill: {
      control: 'color',
      description: '아이콘의 채우기 색상입니다. 기본값은 undefined입니다.',
      defaultValue: undefined,
    },
    rotate: {
      control: 'number',
      description: '아이콘의 회전 각도입니다. 기본값은 undefined입니다.',
      defaultValue: 0,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'activity',
    size: 24,
    strokeWidth: 2,
    color: '#222',
    fill: undefined,
    rotate: 0,
  },
};

export const CustomSizeAndColor: Story = {
  args: {
    name: 'camera',
    size: 40,
    strokeWidth: 3,
    color: 'blue',
    fill: 'yellow',
    rotate: 0,
  },
};

export const Rotate: Story = {
  args: {
    name: 'heart',
    size: 32,
    strokeWidth: 2,
    color: 'red',
    fill: undefined,
    rotate: 45,
  },
};

export const CustomFill: Story = {
  args: {
    name: 'star',
    size: 24,
    strokeWidth: 2,
    color: 'green',
    fill: 'orange',
    rotate: 0,
  },
};
