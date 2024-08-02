import { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/libs';

/**
 * ## Text 컴포넌트
 *
 * 이 컴포넌트는 입력 필드 컴포넌트로, 사용자가 텍스트를 입력할 수 있는 필드를 제공합니다.
 *
 * ### 속성(Props)
 * - **type:** 입력 필드의 타입을 설정합니다. 기본값은 `text`입니다.
 *   지원되는 타입: `text`, `password`, `email`, `number`, `tel`, `url`
 * - **invalid:** 입력 필드가 유효하지 않은 상태일 때 스타일을 적용합니다.
 * - **...rest:** `<input>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **Default:**
 * - 기본 입력 필드를 설정하고 텍스트를 입력할 수 있습니다.
 * - `invalid` 속성을 통해 입력 필드가 유효하지 않은 상태일 때 스타일을 변경할 수 있습니다.
 *
 * 2. **Password:**
 * - 비밀번호 입력 필드를 설정할 수 있습니다.
 *
 * 3. **Email:**
 * - 이메일 입력 필드를 설정할 수 있습니다.
 *
 * 4. **Number:**
 * - 숫자 입력 필드를 설정할 수 있습니다.
 *
 * 5. **Telephone:**
 * - 전화번호 입력 필드를 설정할 수 있습니다.
 *
 * 6. **Invalid:**
 * - 입력 필드가 유효하지 않은 상태일 때 스타일을 적용할 수 있습니다. `invalid` 속성을 `true`로 설정하면 입력 필드의 테두리 색상이 빨간색으로 변경됩니다.
 */

const meta: Meta<typeof Input.Text> = {
  title: 'Components/Input/Text',
  component: Input.Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'text',
      description: '입력 필드의 타입을 설정합니다. 기본값은 `text`입니다.',
    },
    invalid: {
      control: 'boolean',
      description: '입력 필드가 유효하지 않은 상태일 때 스타일을 적용합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    invalid: false,
    placeholder: '텍스트를 입력하세요',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    invalid: false,
    placeholder: '비밀번호를 입력하세요',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    invalid: false,
    placeholder: '이메일을 입력하세요',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    invalid: false,
    placeholder: '숫자를 입력하세요',
  },
};

export const Telephone: Story = {
  args: {
    type: 'tel',
    invalid: false,
    placeholder: '전화번호를 입력하세요',
  },
};

export const Invalid: Story = {
  args: {
    type: 'text',
    invalid: true,
    placeholder: '유효하지 않은 입력 필드',
  },
};
