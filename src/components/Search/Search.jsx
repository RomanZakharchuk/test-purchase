import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';

const Search = ({ name, width, handleChange }) => {
  return (
    <div className={width}>
      <FormControl fullWidth style={{ backgroundColor: 'var(--bg-input)' }}>
        <TextField id="outlined-basic" label={name} onChange={handleChange} />
      </FormControl>
    </div>
  )
}

export { Search };