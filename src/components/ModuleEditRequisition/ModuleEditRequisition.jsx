import { FormEditPurchase } from '../FormEditPurchase';

const ModuleEditRequisition = ({ setIsOpen, item }) => {
  console.log(item);

  return (
    <div
      className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center after:content-[''] after:absolute after:w-full after:h-screen after:bg-[#000000] after:opacity-25">
      <div className="w-[710px] relative z-10 rounded p-3 bg-white background-form">
        <h2 className='mb-[15px] color'>Edit requisition</h2>
        <FormEditPurchase item={item} setIsOpen={setIsOpen} />
      </div>
    </div>
  )
}

export { ModuleEditRequisition };