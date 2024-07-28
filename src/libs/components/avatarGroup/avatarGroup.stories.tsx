import { Meta, StoryObj } from '@storybook/react';
import { AvatarGroup } from '@/libs';

/**
 * ## AvatarGroup 컴포넌트
 *
 * 이 컴포넌트는 여러 아바타 이미지를 그룹으로 표시하기 위한 컴포넌트입니다.
 * 아바타의 크기(size), 아바타 간의 간격(margin) 등을 설정할 수 있습니다.
 *
 * ### 속성(Props)
 * - **size:** 각 아바타의 크기를 설정합니다. 기본값은 70입니다.
 * - **margin:** 아바타 간의 간격을 설정합니다. 기본값은 5입니다.
 * - **list:** 아바타의 속성들을 포함한 객체 배열입니다.
 * - **rest:** 추가로 전달할 속성들을 설정합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 여러 개의 아바타 이미지를 그룹으로 표시할 수 있습니다.
 */

const meta: Meta<typeof AvatarGroup> = {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
      description: '각 아바타의 크기를 설정합니다. 기본값은 70입니다.',
    },
    margin: {
      control: 'number',
      description: '아바타 간의 간격을 설정합니다. 기본값은 5입니다.',
    },
    list: {
      control: 'object',
      description: '아바타의 속성들을 포함한 객체 배열입니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 70,
    margin: 5,
    list: [
      {
        src: 'https://picsum.photos/200?1',
        alt: 'Avatar 1',
        containerAttribute: { className: '', style: {} },
      },
      {
        src: 'https://picsum.photos/200?2',
        alt: 'Avatar 2',
        containerAttribute: { className: '', style: {} },
      },
      {
        src: 'https://picsum.photos/200?3',
        alt: 'Avatar 3',
        containerAttribute: { className: '', style: {} },
      },
    ],
  },
};
