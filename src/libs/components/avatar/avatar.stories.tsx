import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@/libs';

/**
 * ## Avatar 컴포넌트
 *
 * 이 컴포넌트는 사용자의 아바타 이미지를 표시하기 위한 컴포넌트입니다.
 * 크기(size), 테두리 반경(radius), objectFit 스타일 속성을 설정할 수 있으며,
 * Image 컴포넌트를 사용하여 lazy loading 기능을 지원합니다.
 *
 * ### 속성(Props)
 * - **size:** 아바타의 크기를 설정합니다. 기본값은 70입니다.
 * - **radius:** 아바타의 테두리 반경을 설정합니다. 기본값은 '50%'입니다.
 * - **objectFit:** 이미지의 `object-fit` 스타일 속성을 설정합니다. 기본값은 'cover'입니다.
 * - **containerAttribute:** 컨테이너의 추가 속성을 설정할 수 있습니다.
 * - **rest:** Image 컴포넌트에 전달될 나머지 속성들을 설정합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 기본 아바타 이미지를 설정하고 lazy loading 기능을 사용할 수 있습니다.
 */

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
      description: '아바타의 크기를 설정합니다. 기본값은 70입니다.',
    },
    radius: {
      control: 'text',
      description: "아바타의 테두리 반경을 설정합니다. 기본값은 '50%'입니다.",
    },
    objectFit: {
      control: 'select',
      options: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      description: "이미지의 `object-fit` 스타일 속성을 설정합니다. 기본값은 'cover'입니다.",
    },
    containerAttribute: {
      control: 'object',
      description: '컨테이너의 추가 속성을 설정할 수 있습니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 70,
    radius: '50%',
    objectFit: 'cover',
    containerAttribute: {
      className: '',
      style: {},
    },
    src: 'https://picsum.photos/200?2',
    alt: 'Avatar image',
    lazy: true,
    placeholder: 'https://picsum.photos/200?1',
    threshold: 0.5,
  },
};
