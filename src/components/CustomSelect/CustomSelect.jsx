import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CustomSelect = ({ name, value, menuItem, handleChange, width }) => {
  return (
    <div className={width}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Age"
          onChange={handleChange}
          style={{ backgroundColor: 'var(--bg-input)' }}
        >
          {menuItem.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  )
}

export { CustomSelect };