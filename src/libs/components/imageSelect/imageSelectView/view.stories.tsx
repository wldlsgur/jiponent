import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { ImageSelect } from '../../..';

/**
 * ## ImageSelectView 컴포넌트
 *
 * ImageSelectView 컴포넌트는 사용자가 선택한 단일 이미지 파일을 선택하고 미리 볼 수 있습니다.
 *
 * ### Props 속성
 * - **alt:** `<img>` 태그의 alt 속성을 강제로 받습니다.
 * - **...rest:** `<img>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다. 예를 들어, 클래스 이름, 스타일 등을 정의할 수 있습니다.
 *
 * ### 사용 사례(Stories)
 * 1. **ImageSelectView:**
 * - 이 스토리는 사용자가 선택한 단일 이미지 파일을 미리보기 위한 기본 설정을 보여줍니다. 사용자는 선택한 하나의 이미지만 볼 수 있습니다.
 */

const meta: Meta<typeof ImageSelect.View> = {
  title: 'Components/ImageSelect/ImageSelectView',
  component: ImageSelect.View,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alt: {
      control: 'text',
      description: '`<img>` 태그의 alt 속성을 강제로 받습니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ImageSelectView: Story = {
  decorators: [
    (Story) => {
      return (
        <ImageSelect onChange={action('image')}>
          <ImageSelect.Label>단일 이미지 업로드</ImageSelect.Label>
          <Story />
        </ImageSelect>
      );
    },
  ],
  args: { alt: '사용자가 선택한' },
};
