import PropTypes from 'prop-types'


export const MyModal = ({estados, Text}) => {
  const onClickAccept = (IsOpen,IsAccept)=>{
    estados({
      open:IsOpen,
      accept:IsAccept
    })
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-1/3 p-5 rounded-2xl flex flex-col justify-center items-center gap-4">
        <div className='m-8 '>
          <p className='font-semibold'>{Text}</p>
        </div>
        <div className="flex justify-around w-full">
          <button className='bg-custom-green p-3 rounded-2xl font-extrabold' onClick={()=>onClickAccept(false,true)}>Aceptar</button>
          <button className='bg-custom-red p-3 rounded-2xl font-extrabold' onClick={()=>onClickAccept(false,false)}>Cancelar</button>
        </div>
      </div>
    </div>
  )
}

MyModal.proptypes = {
  estados: PropTypes.func.isRequired,
  Text: PropTypes.string.isRequired
}