import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { ImageSelect } from '../../..';

/**
 * ## ImageSelectWrapper 컴포넌트
 *
 * 이 컴포넌트는 이미지 업로드 기능을 구현하기 위한 래퍼 컴포넌트입니다. 사용자는 이 컴포넌트를 통해 이미지를 업로드하고, 업로드된 이미지를 보거나 관리할 수 있습니다.
 *
 * ### 속성(Props)
 * - **children:** 이 컴포넌트는 자식 컴포넌트로 `ImageSelect.Label`, `ImageSelect.View`, `ImageSelect.ListView, `ImageSelect.ClearButton`를 받습니다. 이를 통해 사용자는 이미지 업로드 입력창, 업로드된 이미지 보기, 업로드된 이미지 리스트 보기, 이미지 전체 삭제 등의 기능을 사용할 수 있습니다.
 * - **limit:** 이미지를 다중으로 업로드할 때, 최대 업로드 가능한 이미지의 갯수를 제한합니다. 기본값은 1로 설정되어 있으며, 이는 단일 이미지만 업로드 가능함을 의미합니다. 다중 이미지 업로드를 원하시는 경우 이 값을 조정해 주세요.
 * - **onChange:** 사용자가 이미지를 선택하거나 제거할 때마다 호출되는 콜백 함수입니다. 이 함수는 현재 선택되어 있는 이미지들의 목록을 배열 형태로 제공받습니다.
 * - **onExceed:** 사용자가 이미지를 선택할 때 limit를 초과하면 호출되는 콜백 함수입니다.
 * - **...rest:** `<div>` 태그에 적용할 수 있는 모든 표준 HTML 속성을 지원합니다.
 *
 * ### 사용 사례(Stories)
 *
 * 1. **SingleImageSelect:**
 * - 단일 이미지 업로드를 위해 ImageSelect.Label과 ImageSelect.View를 사용합니다.
 * - 업로드할 이미지를 선택하고, 선택된 이미지를 보여줍니다.
 *
 * 2. **MultipleImageSelect:**
 * - 다중 이미지 업로드를 위해 ImageSelect.Label(multiple 속성 포함)과 ImageSelect.ListView를 사용합니다.
 * - 여러 이미지를 선택할 수 있으며, 선택된 이미지들을 리스트 형태로 보여줍니다.
 * - limit 속성을 통해 최대 업로드 가능한 이미지 수를 제한합니다.
 */

const meta: Meta<typeof ImageSelect> = {
  title: 'Components/ImageSelect/ImageSelectWrapper',
  component: ImageSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    limit: {
      control: 'number',
      description: '다중 이미지 업로드 사용 시 최대 이미지 갯수를 제한합니다.',
      defaultValue: 1,
    },
    onChange: {
      action: 'changed',
      description: '이미지가 변경될 때 호출되는 함수입니다.',
    },
    onExceed: {
      action: 'changed',
      description: '선택된 이미지 개수가 limit를 초과할 시 호출되는 함수입니다.',
    },
    children: {
      description: '자식으로 올 서브 컴포넌트를 지정합니다.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleImageSelect: Story = {
  args: {
    children: (
      <>
        <ImageSelect.Label>단일 이미지 업로드</ImageSelect.Label>
        <ImageSelect.View alt='단일 이미지 업로드' />
      </>
    ),
    limit: 1,
    onChange: action('image'),
  },
};

export const MultipleImageSelect: Story = {
  args: {
    children: (
      <>
        <ImageSelect.Label multiple>다중 이미지 업로드</ImageSelect.Label>
        <ImageSelect.ListView alt='다중 이미지 업로드' />
        <ImageSelect.ClearButton>전체 삭제</ImageSelect.ClearButton>
      </>
    ),
    limit: 10,
    onChange: action('images'),
  },
};
