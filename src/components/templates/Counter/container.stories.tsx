import { Story } from '@storybook/react/types-6-0'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import CounterContainer from './container'
import rootReducer from 'modules'

export default {
  title: 'Containers/Counter',
  component: CounterContainer,
}

const store = createStore(rootReducer)

const Template: Story = () => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
)

export const Default = Template.bind({})
