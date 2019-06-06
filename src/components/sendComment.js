import React from 'react';

const SendCommentComponent = ({value, handleSend, handleChange}) => {
  return < div style={{margin: '10px'}}>
    <input value={value} onChange={handleChange}/>
    <button disabled={!value} onClick={handleSend}>Send Comment</button>
  </div>
};

export default SendCommentComponent;
