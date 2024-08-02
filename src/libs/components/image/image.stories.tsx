import { Meta, StoryObj } from '@storybook/react';
import { Image } from '@/libs';

/**
 * ## Image 컴포넌트
 *
 * 이 컴포넌트는 이미지의 lazy loading 기능을 구현하기 위한 래퍼 컴포넌트입니다.
 * 사용자는 이 컴포넌트를 통해 이미지를 로드하고, 로드 상태에 따라 다른 이미지를 표시할 수 있습니다.
 *
 * ### 속성(Props)
 * - **width:** 이미지의 너비를 설정합니다.
 * - **height:** 이미지의 높이를 설정합니다.
 * - **lazy:** lazy loading 기능을 사용할지 여부를 설정합니다.
 * - **placeholder:** lazy loading 중에 표시할 이미지의 경로를 설정합니다.
 * - **threshold:** lazy loading을 트리거할 스크롤 임계값을 설정합니다.
 * - **src:** 로드할 이미지의 경로를 설정합니다.
 * - **alt:** 이미지를 설명하는 대체 텍스트를 설정합니다.
 * - **objectFit:** 이미지의 `object-fit` 스타일 속성을 설정합니다. 기본값은 'none'입니다.
 * - **...rest:** `<img>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 사용자는 기본 이미지를 로드하고, lazy loading 기능을 사용할 수 있습니다.
 * - `placeholder`를 통해 로딩 중에 표시될 이미지를 설정할 수 있습니다.
 */

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
      description: '이미지의 너비를 설정합니다. 숫자 또는 문자열을 사용할 수 있습니다.',
    },
    height: {
      control: 'text',
      description: '이미지의 높이를 설정합니다. 숫자 또는 문자열을 사용할 수 있습니다.',
    },
    lazy: {
      control: 'boolean',
      description: 'lazy loading 기능을 사용할지 여부를 설정합니다.',
    },
    placeholder: {
      control: 'text',
      description: 'lazy loading 중에 표시할 이미지의 경로를 설정합니다.',
    },
    threshold: {
      control: 'number',
      description: 'lazy loading을 트리거할 스크롤 임계값을 설정합니다.',
    },
    src: {
      control: 'text',
      description: '로드할 이미지의 경로를 설정합니다.',
    },
    alt: {
      control: 'text',
      description: '이미지를 설명하는 대체 텍스트를 설정합니다.',
    },
    objectFit: {
      control: 'select',
      options: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      description: "이미지의 `object-fit` 스타일 속성을 설정합니다. 기본값은 'none'입니다.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '300px',
    height: '200px',
    lazy: true,
    placeholder: 'https://picsum.photos/200?1',
    threshold: 0.5,
    src: 'https://picsum.photos/200?2',
    alt: 'Example image',
    objectFit: 'cover',
  },
};
