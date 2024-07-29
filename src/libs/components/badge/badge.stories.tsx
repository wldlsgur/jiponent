import { Meta, StoryObj } from '@storybook/react';
import { Avatar, Badge } from '@/libs';

/**
 * ## Badge 컴포넌트
 *
 * 이 컴포넌트는 알림 배지, 카운트 배지 등을 표시하기 위한 컴포넌트입니다.
 * 배지의 크기, 배경색, 텍스트 색상, 폰트 크기, 표시 여부 등을 설정할 수 있습니다.
 *
 * ### 속성(Props)
 * - **count:** 배지에 표시할 숫자 값을 설정합니다.
 * - **limit:** 숫자가 이 값을 초과하면 `limit+` 형태로 표시됩니다.
 * - **dot:** true일 경우 배지를 점 형태로 표시합니다.
 * - **backgroundColor:** 배지의 배경색을 설정합니다. 기본값은 '#f44'입니다.
 * - **textColor:** 배지의 텍스트 색상을 설정합니다. 기본값은 'white'입니다.
 * - **fontSize:** 배지의 텍스트 폰트 크기를 설정합니다. 기본값은 10입니다.
 * - **showZero:** count 0을 배지 표시할지 여부를 설정합니다. 기본값은 false입니다.
 * - **className:** 추가적인 CSS 클래스를 설정할 수 있습니다.
 * - **style:** 인라인 스타일을 추가할 수 있습니다.
 * - **...rest:** 배지에 추가적으로 전달될 속성들입니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 기본 배지 스타일을 설정하고 카운트 값을 표시합니다.
 * 2. **Dot Badge:**
 * - 점 형태로 배지를 표시합니다.
 * 3. **Limit Badge:**
 * - 카운트 값이 제한을 초과할 경우 `limit+` 형태로 표시합니다.
 * 4. **Show Zero:**
 * - count 0을 배지 표시합니다.
 */

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    count: {
      control: 'number',
      description: '배지에 표시할 숫자 값을 설정합니다.',
    },
    limit: {
      control: 'number',
      description: '숫자가 이 값을 초과하면 `limit+` 형태로 표시됩니다.',
    },
    dot: {
      control: 'boolean',
      description: 'true일 경우 배지를 점 형태로 표시합니다.',
    },
    backgroundColor: {
      control: 'color',
      description: '배지의 배경색을 설정합니다.',
    },
    textColor: {
      control: 'color',
      description: '배지의 텍스트 색상을 설정합니다.',
    },
    fontSize: {
      control: 'number',
      description: '배지의 텍스트 폰트 크기를 설정합니다.',
    },
    showZero: {
      control: 'boolean',
      description: 'count가 0을 배지 표시할지 여부를 설정합니다.',
    },
    className: {
      control: 'text',
      description: '추가적인 CSS 클래스를 설정할 수 있습니다.',
    },
    style: {
      control: 'object',
      description: '인라인 스타일을 추가할 수 있습니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Avatar
        src='https://picsum.photos/200?1'
        alt='Avatar image'
      />
    ),
    count: 5,
    limit: 10,
    dot: false,
    backgroundColor: '#f44',
    textColor: 'white',
    fontSize: 10,
    showZero: false,
    className: '',
    style: { transform: 'translate(5%, 20%)' },
  },
};

export const DotBadge: Story = {
  args: {
    children: (
      <Avatar
        src='https://picsum.photos/200?1'
        alt='Avatar image'
      />
    ),
    count: undefined,
    dot: true,
    backgroundColor: '#17c500',
    textColor: 'white',
    fontSize: 10,
    showZero: false,
    className: '',
    style: { transform: 'translate(-100%, 50%)' },
  },
};

export const LimitBadge: Story = {
  args: {
    children: (
      <Avatar
        src='https://picsum.photos/200?1'
        alt='Avatar image'
      />
    ),
    count: 15,
    limit: 10,
    dot: false,
    backgroundColor: '#f44',
    textColor: 'white',
    fontSize: 10,
    showZero: false,
    className: '',
    style: { transform: 'translate(5%, 20%)' },
  },
};

export const ShowZeroBadge: Story = {
  args: {
    children: (
      <Avatar
        src='https://picsum.photos/200?1'
        alt='Avatar image'
      />
    ),
    count: 0,
    limit: 10,
    dot: false,
    backgroundColor: '#f44',
    textColor: 'white',
    fontSize: 10,
    showZero: true,
    className: '',
    style: { transform: 'translate(5%, 20%)' },
  },
};
