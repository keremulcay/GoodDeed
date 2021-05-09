import React, {useState} from 'react'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const categoryOptions = [
  { value: 'Art', label: 'Art' },
  { value: 'Accessibility', label: 'Accessibility' },
  { value: 'Education', label: 'Education' },
  { value: 'Environment', label: 'Environment' },
  { value: 'Healthcare', label: 'Healthcare' },
]

const animatedComponents = makeAnimated();

const categoryStyles = {
  control: styles => ({ ...styles, backgroundColor: "rgba(255, 255, 255, 0.4)", width: "40%" })
}

export default function CategoryInput(props) {

    const [category, setCategory] = useState()
    const handleChange = evt => {
        setCategory(evt)
        props.handleChange(evt)
    }

    return (
      <Select
            closeMenuOnSelect={true}
            components={animatedComponents}
            options={categoryOptions}
          styles={categoryStyles}
          onChange={handleChange}
          value={category}
      />
    );
}
