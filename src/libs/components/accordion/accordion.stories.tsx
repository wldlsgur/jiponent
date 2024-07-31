import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@/libs';

/**
 * ## Accordion 컴포넌트
 *
 * 이 컴포넌트는 아코디언 스타일로 컨텐츠를 숨기고 표시할 수 있는 컴포넌트입니다.
 * 기본적으로 감추어진 상태로 시작하며, 클릭을 통해 토글할 수 있습니다.
 *
 * ### 속성(Props)
 * - **defaultVisible:** 아코디언이 기본적으로 열려 있는지 여부를 설정합니다. 기본값은 false입니다.
 * - **duration:** 트랜지션 지속 시간을 설정합니다. 기본값은 300ms입니다.
 * - **children:** 아코디언 내부에 표시될 컨텐츠입니다.
 * - **header:** 아코디언의 헤더로 표시될 요소입니다.
 * - **...rest:** `<div>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다. 예를 들어, 클래스 이름, 스타일 등을 정의할 수 있습니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 기본 아코디언 컴포넌트입니다. 클릭을 통해 토글할 수 있습니다.
 *
 * 2. **OpenByDefault:**
 * - 기본적으로 열려 있는 아코디언 컴포넌트입니다.
 *
 * 3. **CustomDuration:**
 * - 트랜지션 지속 시간이 1초로 설정된 아코디언 컴포넌트입니다.
 *
 */

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultVisible: {
      control: 'boolean',
      description: '아코디언이 기본적으로 열려 있는지 여부를 설정합니다. 기본값은 false입니다.',
    },
    duration: {
      control: 'number',
      description: '트랜지션 지속 시간을 설정합니다. 기본값은 300ms입니다.',
    },
    header: {
      control: 'text',
      description: '아코디언의 헤더로 표시될 요소입니다.',
    },
    children: {
      control: 'text',
      description: '아코디언 내부에 표시될 컨텐츠입니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultVisible: false,
    duration: 300,
    header: '아코디언 헤더',
    children: '아코디언 내용입니다.',
  },
};

export const OpenByDefault: Story = {
  args: {
    defaultVisible: true,
    duration: 300,
    header: '기본으로 열림',
    children: '이 아코디언은 기본으로 열려 있습니다.',
  },
};

export const CustomDuration: Story = {
  args: {
    defaultVisible: false,
    duration: 1000,
    header: '트랜지션 지속 시간 1초',
    children: '이 아코디언은 트랜지션 지속 시간이 1초입니다.',
  },
};
