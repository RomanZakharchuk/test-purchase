import { useDispatch } from 'react-redux';
import { useState } from 'react';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { purchaseActions } from '../../../redux/slices/purchase';
import { ModuleEditRequisition } from '../../ModuleEditRequisition';

const BodyItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const { id, category, name, text } = item;

  const removePurchase = (id) => {
    dispatch(purchaseActions.removePurchaseById(id));
  }

  return (
    <div className="flex justify-between border-b-[1px] py-4">
      <div className='w-full'>
        <span className="inline-block w-[130px] color">{category}</span>
        <span className="inline-block w-[150px] color">{name}</span>
        <span className="inline-block color">{text}</span>
      </div>

      <div className='flex'>
        <div onClick={() => setIsOpen(true)} className='mr-[15px] cursor-pointer'>
          <BorderColorIcon color="success" />
        </div>
        <div onClick={() => removePurchase(id)} className='mr-10px cursor-pointer'>
          <DeleteIcon color="success" />
        </div>
      </div>

      {isOpen && (
        <ModuleEditRequisition item={item} setIsOpen={setIsOpen} />
      )}
    </div>
  )
}

export { BodyItem };