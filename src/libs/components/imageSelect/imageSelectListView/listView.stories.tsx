import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { ImageSelect } from '../../..';

/**
 * ## ListView 컴포넌트
 *
 * ListView 컴포넌트는 사용자가 선택한 다중 이미지 파일을 선택하고 미리 볼 수 있습니다.
 *
 * ### Props 속성
 * - **alt:** `<img>` 태그의 alt 속성을 강제로 받습니다.
 * - **ulAttribute:** `<ul>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 * - **liAttribute:** `<li>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 * - **...rest:** `<img>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 * 1. **Default:**
 * - 이 스토리는 사용자가 선택한 다중 이미지 파일을 미리보기 위한 기본 설정을 보여줍니다. 사용자는 선택한 이미지 모두 볼 수 있습니다.
 */

const meta: Meta<typeof ImageSelect.ListView> = {
  title: 'Components/ImageSelect/ListView',
  component: ImageSelect.ListView,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    alt: {
      control: 'text',
      description: '`<img>` 태그의 alt 속성을 강제로 받습니다.',
    },
    ulAttribute: {
      control: 'object',
      description: '`<ul>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.',
    },
    liAttribute: {
      control: 'object',
      description: '`<li>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
  args: { alt: '다중 이미지 업로드' },
};
