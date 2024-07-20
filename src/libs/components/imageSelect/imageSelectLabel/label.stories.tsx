import { Meta, StoryObj } from '@storybook/react';
import { ImageSelect } from '../../..';

/**
 * ## ImageSelectLabel 컴포넌트
 *
 * 이미지를 업로드하기 위한 입력 필드를 제공하는 컴포넌트입니다. 사용자는 이 컴포넌트를 통해 이미지 파일을 선택하고 업로드할 수 있습니다.
 *
 * ### 속성(Props)
 * - **children:** 이 속성은 업로드 버튼 내에 표시되는 텍스트나 요소들을 정의합니다. 예를 들어, 업로드 버튼의 목적이나 안내 문구를 사용자에게 보여주기 위해 사용됩니다.
 * - **visible:** `label` 태그의 가시성을 제어합니다. `true`로 설정하면 사용자에게 보이고, `false`로 설정하면 숨겨집니다.
 * - **multiple:** 사용자가 한 번에 여러 이미지를 업로드할 수 있는지 여부를 결정합니다. `true`로 설정하면 여러 선택이 가능합니다.
 * - **...rest:** 이 컴포넌트는 `<label>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다. 예를 들어, 클래스 이름, 스타일 등을 정의할 수 있습니다.
 *
 * ### 사용 사례(Stories)
 * 1. **SingleImageSelectLabel:**
 * - 단일 이미지 업로드를 위한 기본 설정입니다.
 * - 사용자는 한 번에 하나의 이미지만 선택할 수 있습니다.
 *
 * 2. **MultipleImageSelect:**
 * - 사용자가 여러 이미지를 동시에 업로드할 수 있도록 다중 선택이 활성화된 설정입니다.
 *
 * 3. **HiddenMultipleImageSelect:**
 * - 이미지 업로드를 지원하지만, label 태그가 숨겨져 있는 설정입니다.
 * - 이는 UI에서 직접적으로 보이지 않는 경우에 사용될 수 있습니다.
 */

const meta: Meta<typeof ImageSelect.Label> = {
  title: 'Components/ImageSelect/ImageSelectLabel',
  component: ImageSelect.Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: '`label` 태그 내에 표시될 내용입니다.',
    },
    visible: {
      control: 'boolean',
      description: '`label` 태그의 가시성을 제어합니다.',
      defaultValue: true,
    },
    multiple: {
      control: 'boolean',
      description: '여러 이미지를 한 번에 업로드할 수 있는지 여부를 결정합니다.',
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleImageSelectLabel: Story = {
  args: {
    children: '단일 이미지 업로드',
    visible: true,
    multiple: false,
  },
};

export const MultipleImageSelectLabel: Story = {
  args: {
    children: '다중 이미지 업로드',
    visible: true,
    multiple: true,
  },
};

export const HiddenImageSelectLabel: Story = {
  args: {
    children: '숨김 이미지 업로드',
    visible: false,
    multiple: true,
  },
};
