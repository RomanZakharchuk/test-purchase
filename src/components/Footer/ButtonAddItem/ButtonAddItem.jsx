import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { ModuleAddRequisition } from '../../ModuleAddRequisition';

const ButtonAddItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mt-[10px] mb-[25px]'>
      <button onClick={() => setIsOpen(true)} className='flex items-center border-[1px] border-[#2E7D32] p-1 bg-btn' type="button">
        <AddCircleIcon color="success" />
        <span className='text-[#2E7D32] uppercase'>requisition</span>
      </button>

      {isOpen && (
        <ModuleAddRequisition setIsOpen={setIsOpen} />
      )}
    </div>
  )
}

export { ButtonAddItem };