import React from 'react'

function WBDateSelector({forceTo="thursday", date, setDate}) {

  const changeHandler = (e) => {
    if(forceTo === null){
      setDate(e.target.value)
      return;
    }
  };

  return (
    <div className='input-group' style={{width:'fit-content'}}>
      <input type='checkbox' className='form-check-input' />
      <input type='date' value={date} onChange={changeHandler} className='form-control' />
    </div>
  )
}

export default WBDateSelector