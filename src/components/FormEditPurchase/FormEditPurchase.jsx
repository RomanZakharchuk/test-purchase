import { useState } from "react";
import { useForm } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux";

import { categories } from "../../arrays/arrays";
import { purchaseActions } from "../../redux/slices/purchase";

const FormEditPurchase = ({ setIsOpen, item }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [category, setCategory] = useState(item.category);
  const dispatch = useDispatch();

  console.log(item);

  const CategoryHandleChange = (event) => {
    setCategory(event.target.value);
  };

  const submit = (data) => {
    const purchase = { id: item?.id, category, name: data.name, text: data.text, required: data.required };

    dispatch(purchaseActions.editPurchaseById(purchase));

    setIsOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Age"
          onChange={CategoryHandleChange}
        >
          {categories.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
        </Select>
      </FormControl>

      <div className="mt-[15px]">
        <TextField
          fullWidth
          {...register('name', { required: true })}
          id="outlined-basic"
          label="Name"
          defaultValue={item.name}
          error={Boolean(errors.name)}
          helperText={errors.name ? 'This field is required' : ''}
        />
      </div>

      <div className="mt-[15px]">
        <TextField
          fullWidth
          {...register('text')}
          id="filled-multiline-static"
          multiline
          defaultValue={item.text}
          rows={3}
          label="Text"
        />
      </div>

      <div className="mt-[15px]">
        <TextField
          fullWidth
          {...register('required')}
          id="filled-multiline-static"
          multiline
          defaultValue={item.required}
          rows={3}
          label="Required"
        />
      </div>

      <div className="flex justify-end mt-[30px]">
        <button
          onClick={() => setIsOpen(false)}
          className="border-[1px] border-[#2E7D32] px-[5px] text-[#2E7D32] rounded-sm mr-2 uppercase bg-btn"
          type="button">cancel</button>
        <button className="border-[1px] border-[#2E7D32] bg-[#2E7D32] px-[5px] text-[#ffffff] rounded-sm uppercase" type="submit">save</button>
      </div>
    </form>
  )
}

export { FormEditPurchase };