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
    placeholder:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuswfM1na6Swn93HwXWQWpGEMPjDn2Z10gCg&s',
    threshold: 0.5,
    src: 'data:image/png;base64,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',
    alt: 'Example image',
    objectFit: 'cover',
  },
};
