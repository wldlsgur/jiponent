import { Meta, StoryObj } from '@storybook/react';
import { Tap } from '@/libs';

/**
 * ## TapItem 컴포넌트
 *
 * 이 컴포넌트는 개별 탭을 나타냅니다. `Tap` 컴포넌트의 자식으로 사용되며, 각 탭을 구성하는데 필요한 제목, 내용 및 스타일을 관리합니다.
 * active props의 여부는 상위 Tap 컴포넌트에서 관리되어 전달됩니다.
 *
 * ### 속성(Props)
 * - **index:** 탭의 인덱스입니다. 탭의 순서를 결정합니다.
 * - **title:** 탭의 제목입니다. 탭에서 표시될 텍스트입니다.
 * - **content:** 탭의 내용입니다. 탭이 활성화될 때 표시됩니다.
 * - **active:** 탭이 활성화된 상태인지 여부를 나타냅니다. 활성화된 탭에 스타일이 적용됩니다.
 * - **activeStyle:** 활성화된 탭에 적용할 추가 스타일입니다.
 * - **...rest:** `<button>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **DefaultTapItem:**
 * - 기본 TapItem 컴포넌트의 사용 방법입니다.
 *
 */

const meta: Meta<typeof Tap.Item> = {
  title: 'Components/Tap/TapItem',
  component: Tap.Item,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    index: {
      control: 'number',
      description: '탭의 인덱스입니다.',
    },
    title: {
      control: 'text',
      description: '탭의 제목입니다.',
    },
    content: {
      control: 'text',
      description: '탭의 내용입니다.',
    },
    active: {
      control: 'boolean',
      description: '탭이 활성화된 상태인지 여부입니다.',
    },
    activeStyle: {
      control: 'object',
      description: '활성화된 탭에 적용할 스타일입니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tap.Item>;

export const DefaultTapItem: Story = {
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
