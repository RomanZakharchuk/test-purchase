import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { CustomSelect } from '../CustomSelect';
import { Search } from '../Search';
import { categories, kinds } from '../../arrays/arrays';
import { purchaseActions } from '../../redux/slices/purchase';

const Header = () => {
  const [kind, setKind] = useState('');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const kindHandleChange = (event) => {
    setKind(event.target.value);
  };

  const CategoryHandleChange = (event) => {
    setCategory(event.target.value);
  };

  const SearchHandleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    dispatch(purchaseActions.sortByCategory(category));
  }, [category]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(purchaseActions.filterPurchasesByName(search));
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [search]);

  return (
    <div className='flex justify-between'>
      <CustomSelect name={'Kind'} width={'w-[28%]'} value={kind} menuItem={kinds} handleChange={kindHandleChange} />
      <CustomSelect name={'Category'} width={'w-[28%]'} value={category} menuItem={categories} handleChange={CategoryHandleChange} />
      <Search name={'Name'} width={'w-[40%]'} handleChange={SearchHandleChange} />
    </div>
  )
}

export { Header };