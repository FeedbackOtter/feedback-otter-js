import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FeedbackButton } from '../components/FeedbackButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FBO/FeedbackButton',
  component: FeedbackButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FeedbackButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeedbackButton> = (args) => <FeedbackButton {...args} />

export const Basic = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  children: 'Feedback',
}

export const Right = Template.bind({})
Right.args = {
  children: 'Right',
  placement: 'right',
}
