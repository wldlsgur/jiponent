import { Meta, StoryObj } from '@storybook/react';
import { Tap } from '@/libs';

/**
 * ## Tap 컴포넌트
 *
 * 이 컴포넌트는 여러 탭을 관리하고, 사용자가 선택한 탭을 강조합니다.
 * TapItem을 자식으로 사용하여 각 탭을 나타냅니다.
 *
 * ### 속성(Props)
 * - **children:** TapItem 컴포넌트들이 포함될 자식 요소입니다.
 * - **defaultIndex:** 기본으로 활성화할 탭의 인덱스입니다.
 * - **activeStyle:** 활성화된 탭에 적용할 스타일입니다.
 * - **itemAttribute:** 각 TapItem에 적용할 공통 속성입니다.
 * - **...rest:** `<div>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **DefaultTap:**
 * - 기본 Tap  컴포넌트 사용방법 입니다.
 *
 */

const meta: Meta<typeof Tap> = {
  title: 'Components/Tap/Tap',
  component: Tap,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultIndex: {
      control: 'number',
      description: '기본으로 활성화할 탭의 인덱스입니다.',
    },
    activeStyle: {
      control: 'object',
      description: '활성화된 탭에 적용할 스타일입니다.',
    },
    itemAttribute: {
      control: 'object',
      description: '각 TapItem에 적용할 공통 속성입니다.',
    },
    children: {
      control: 'object',
      description: 'TapItem 컴포넌트들이 포함될 자식 요소입니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultTap: Story = {
  decorators: [
    () => {
      return (
        <Tap
          defaultIndex={0}
          activeStyle={{ color: 'blue', fontWeight: 'bold' }}
          style={{ width: '500px' }}
        >
          <Tap.Item
            index={0}
            title='탭 1'
            content='탭 1의 컴포넌트 내용'
          />
          <Tap.Item
            index={1}
            title='탭 2'
            content='탭 2의 컴포넌트 내용'
          />
          <Tap.Item
            index={2}
            title='탭 3'
            content='탭 3의 컴포넌트 내용'
          />
        </Tap>
      );
    },
  ],
};
