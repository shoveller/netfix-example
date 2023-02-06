import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/html'
import {
  colorSchemeList,
  methodNameList,
  renderButton,
  sizeList,
} from 'src/components/atoms/Button101/Button101'

export default {
  title: 'atoms/$.ui.Button101',
  argTypes: {
    methodName: {
      control: { type: 'radio' },
      defaultValue: 'enable',
      options: methodNameList,
    },
    // icon: {
    //   control: 'text',
    //   defaultValue: 'ui-icon-gear',
    // },
    // iconPosition: {
    //   control: { type: 'radio' },
    //   defaultValue: 'beginning',
    //   options: ['beginning', 'end', 'bottom'],
    // },
    label: { control: 'text' },
    click: { action: 'click', defaultValue: action('click') },
    // showLabel: {
    //   control: { type: 'boolean', defaultValue: true },
    // },
    size: {
      control: { type: 'radio' },
      defaultValue: 'large',
      options: sizeList,
    },
    color: {
      control: { type: 'radio' },
      defaultValue: 'primary',
      options: colorSchemeList,
    },
  },
} as Meta<JQueryUI.Button101>

const Template: Story<JQueryUI.Button101> = (props) => {
  return renderButton(props)
}

export const 기본적인_사용법 = Template.bind({})
기본적인_사용법.args = {
  label: 'Button',
}
