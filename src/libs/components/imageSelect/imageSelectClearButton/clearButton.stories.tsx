import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { ImageSelect } from '../../..';

/**
 * ## ClearButton 컴포넌트
 *
 * ClearButton 컴포넌트는 사용자가 선택한 모든 이미지 파일을 삭제 할 수 있습니다.
 *
 * ### Props 속성
 * - **children:** `<button>` 태그의 children 속성을 강제로 받습니다.
 * - **...rest:** `<button>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 * ### 사용 사례(Stories)
 * 1. **ImageClearButton:**
 * - 이 스토리는 사용자가 선택한 모든 이미지 파일을 삭제하기 위한 기본 설정을 보여줍니다.
 */

const meta: Meta<typeof ImageSelect.ClearButton> = {
  title: 'Components/ImageSelect/ClearButton',
  component: ImageSelect.ClearButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'object',
      description: '`<button>` 태그의 children 속성을 강제로 받습니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ImageClearButton: Story = {
  decorators: [
    (Story) => {
      return (
        <ImageSelect
          limit={10}
          onChange={action('images')}
        >
          <ImageSelect.Label multiple>다중 이미지 업로드</ImageSelect.Label>
          <Story />
        </ImageSelect>
      );
    },
  ],
  args: {
    children: '전체 삭제',
  },
};
