import { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@/libs';

/**
 * ## Skeleton 컴포넌트
 *
 * 이 스토리북은 Skeleton 컴포넌트의 다양한 변형을 보여줍니다.
 * Skeleton 컴포넌트는 로딩 상태를 시각적으로 표시하는 데 사용됩니다.
 */
const meta: Meta<typeof Skeleton.Box> = {
  title: 'Components/Skeleton',
  component: Skeleton.Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type BoxStory = StoryObj<typeof Skeleton.Box>;
type CircleStory = StoryObj<typeof Skeleton.Circle>;
type ParagraphStory = StoryObj<typeof Skeleton.Paragraph>;

/**
 * ### Skeleton.Box
 *
 * 기본 박스 형태의 Skeleton 컴포넌트를 렌더링합니다.
 * - **width:** 박스의 너비를 설정합니다.
 * - **height:** 박스의 높이를 설정합니다.
 * - **...rest:** `<div>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 */
export const Box: BoxStory = {
  argTypes: {
    width: {
      control: { type: 'text' },
      description: '박스의 너비를 설정합니다. 문자열 또는 숫자로 설정 가능합니다.',
    },
    height: {
      control: { type: 'text' },
      description: '박스의 높이를 설정합니다. 문자열 또는 숫자로 설정 가능합니다.',
    },
  },
  args: {
    width: '100px',
    height: '100px',
  },
};

/**
 * ### Skeleton.Circle
 *
 * 기본 원형 형태의 Skeleton 컴포넌트를 렌더링합니다.
 * - **size:** 원의 크기를 설정합니다.
 * - **...rest:** `<div>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 */
export const Circle: CircleStory = {
  argTypes: {
    size: {
      control: { type: 'text' },
      description: '원의 크기를 설정합니다. 문자열 또는 숫자로 설정 가능합니다.',
    },
  },
  args: {
    size: '100px',
  },
  render: (args) => <Skeleton.Circle {...args} />,
};

/**
 * ### Skeleton.Paragraph
 *
 * 여러 줄의 텍스트 형태의 Skeleton 컴포넌트를 렌더링합니다.
 * - **line:** 텍스트 줄 수를 설정합니다.
 * - **width:** 텍스트 형태의 너비를 설정합니다.
 * - **height:** 텍스트 형태의 높이를 설정합니다.
 * - **...rest:** `<div>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 */
export const Paragraph: ParagraphStory = {
  argTypes: {
    line: {
      control: { type: 'text' },
      description: '텍스트 줄 수를 숫자로 설정합니다',
      defaultValue: 1,
    },
    width: {
      control: { type: 'text' },
      description: '텍스트 형태의 너비를 설정합니다. 문자열 또는 숫자로 설정 가능합니다.',
    },
    height: {
      control: { type: 'text' },
      description: '텍스트 형태의 높이를 설정합니다. 문자열 또는 숫자로 설정 가능합니다.',
    },
  },
  args: {
    line: 3,
    width: '100%',
    height: '10px',
  },
  render: (args) => (
    <div style={{ width: '500px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <Skeleton.Paragraph {...args} />
    </div>
  ),
};
