import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { ReactNode, SyntheticEvent, useState } from 'react'
import { ProductDescription } from './ui/ProductDescription/ProductDescription'
import { ProductReviews } from './ui/ProductReviews/ProductReviews'
import { ProductSeller } from './ui/ProductSeller/ProductSeller'

interface TabPanelProps {
  children?: ReactNode
  dir?: string
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export const ProductDetails = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth">
        <Tab label="Description" />
        <Tab label="Reviews" />
        <Tab label="Seller Info" />
      </Tabs>

      <div>
        <TabPanel value={value} index={0}>
          <ProductDescription />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProductReviews />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ProductSeller />
        </TabPanel>
      </div>
    </Box>
  )
}
