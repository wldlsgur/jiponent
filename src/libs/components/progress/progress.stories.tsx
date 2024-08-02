import { Meta, StoryObj } from '@storybook/react';
import { Progress } from '@/libs';

/**
 * ## Progress 컴포넌트
 *
 * 이 컴포넌트는 프로그레스 바를 렌더링합니다.
 * 사용자는 이 컴포넌트를 통해 다양한 스타일과 애니메이션을 적용할 수 있습니다.
 *
 * ### 속성(Props)
 * - **value:** 프로그레스 바의 값을 설정합니다. (기본값: 0)
 * - **height:** 프로그레스 바의 높이를 설정합니다. 숫자 또는 문자열을 사용할 수 있습니다. (기본값: '10px')
 * - **railColor:** 프로그레스 바의 레일 색상을 설정합니다. (기본값: '#aaa')
 * - **trackColor:** 프로그레스 바의 트랙 색상을 설정합니다. (기본값: '#44b')
 * - **gradientColor:** 프로그레스 바의 그라데이션 색상을 설정합니다. (기본값: 'rgba(255, 255, 255, 0.15)')
 * - **animationDuration:** 애니메이션 지속 시간을 설정합니다. (기본값: '500ms')
 * - **transitionDuration:** 트랜지션 지속 시간을 설정합니다. (기본값: '100ms')
 * - **...rest:** `<div>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 기본 스타일과 애니메이션을 가진 프로그레스 바를 렌더링합니다.
 *
 * 2. **Color Variations:**
 * - 다양한 색상 설정을 가진 프로그레스 바를 렌더링합니다.
 */

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'number',
      description: '프로그레스 바의 값을 설정합니다.',
    },
    height: {
      control: 'text',
      description: '프로그레스 바의 높이를 설정합니다. 숫자 또는 문자열을 사용할 수 있습니다.',
      defaultValue: '10px',
    },
    railColor: {
      control: 'color',
      description: '프로그레스 바의 레일 색상을 설정합니다.',
      defaultValue: '#aaa',
    },
    trackColor: {
      control: 'color',
      description: '프로그레스 바의 트랙 색상을 설정합니다.',
      defaultValue: '#44b',
    },
    gradientColor: {
      control: 'color',
      description: '프로그레스 바의 그라데이션 색상을 설정합니다.',
      defaultValue: 'rgba(255, 255, 255, 0.15)',
    },
    animationDuration: {
      control: 'text',
      description: '애니메이션 지속 시간을 설정합니다.',
      defaultValue: '500ms',
    },
    transitionDuration: {
      control: 'text',
      description: '트랜지션 지속 시간을 설정합니다.',
      defaultValue: '100ms',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
  render: (args) => (
    <div style={{ width: '500px' }}>
      <Progress {...args} />
    </div>
  ),
};

export const ColorVariations: Story = {
  args: {
    value: 70,
    height: '15px',
    railColor: '#ddd',
    trackColor: '#f44',
    gradientColor: 'rgba(0, 0, 0, 0.15)',
    animationDuration: '1s',
    transitionDuration: '200ms',
  },
  render: (args) => (
    <div style={{ width: '500px' }}>
      <Progress {...args} />
    </div>
  ),
};
