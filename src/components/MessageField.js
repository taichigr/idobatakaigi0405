import { TextField } from '@material-ui/core';
import { SettingsInputCompositeRounded } from '@material-ui/icons';
import React, { useState } from 'react';

import { pushMessage } from '../firebase';


const MessageField = ({ inputEl, name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false);
  console.log({text})
  return (
    <>
      <TextField 
        autoFocus
        fullWidth={true} 
        inputRef={inputEl}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if(isComposed) return;
          const text = e.target.value;
          if(text === '') return;
          if(e.key === 'Enter') {
            console.log('Enterが押されたので、firebaseにpush')
            pushMessage({name, text });
            // setText(e.target.value);
            setText('');
            e.preventDefault();
          }
        }}
        onCompositionStart={() => setIsComposed(true)}
        onCompositionEnd={() => setIsComposed(false)}
        value={text}
      />
    </>
  );
}

export default MessageField;