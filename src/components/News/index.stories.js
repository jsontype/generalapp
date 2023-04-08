import React from "react"
import { action } from "@storybook/addon-actions"
import News from "./News"

export default {
  title: "Components/News",
  component: News,
}

const sampleNews = [
  {
    points: 90,
    id: 1,
    url: "https://example.com",
    title: "Example News",
    user: "John Doe",
  },
  {
    points: 70,
    id: 2,
    url: "https://example2.com",
    title: "Example News 2",
    user: "Jane Smith",
  },
  {
    points: 50,
    id: 3,
    url: "https://example3.com",
    title: "Example News 3",
    user: "Bob Johnson",
  },
]

const Template = (args) => <News {...args} />

export const Default = Template.bind({})
Default.args = {
  news: sampleNews,
  setNews: action("setNews"),
}
