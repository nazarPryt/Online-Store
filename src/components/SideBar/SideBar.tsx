import React, { useState } from 'react'

import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Slider from '@mui/material/Slider'

import s from './SideBar.module.scss'
export const SideBar = () => {
  const [value, setValue] = useState<number[]>([100, 900])
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  function valuetext(value: number) {
    return `${value}$`
  }

  return (
    <aside className={s.wrapper}>
      <Box>
        <Typography>Product Categories</Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel control={<Checkbox />} label="Disabled" />
        </FormGroup>
      </Box>
      <Box>
        <Typography>Filter by price</Typography>
        <Slider
          getAriaLabel={() => 'Temperature range'}
          value={value}
          max={5000}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <Box>
        <Typography>Sort By price</Typography>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          // onChange={handleChange}
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Lowest first"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Highest first"
          />
        </RadioGroup>
      </Box>
    </aside>
  )
}
