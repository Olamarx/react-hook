import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'

const items = [
  {
      title: 'What is React?',
      content: 'React is a frontend Javascript framework'
  },
  {
      title: 'Why use React?',
      content: 'React is a favourite framework among developers.'
  },
  {
      title: 'How do you use React?',
      content: 'We use it React by creating components.'
  },
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'This is a Green color',
    value: 'green'
  },
  {
    label: 'Showing an orange Color',
    value: 'orange'
  },
]

const App = () => {
  const [ selected, setSelected ] = useState(options[0])
  const [ showDropdown, setShowDropDown ] = useState(true)

  return (
    <div>
      <button
      onClick={() => setShowDropDown(!showDropdown)}
      >
        Toggle Dropdown
      </button>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      { showDropdown ? <Dropdown
      selected={selected}
      options={options}
      onSelectedChange={setSelected}
      /> : null }

    </div>
  )
}

export default App