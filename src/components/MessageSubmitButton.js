import React from 'react';

import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'


import { pushMessage } from '../firebase';
const MessageSubmitButton = ({name, setText, text}) => {
  console.log({name})
  console.log({text})
  return (
    <>
      <IconButton disabled={text === ''} onClick={() => {
        pushMessage({ name: 'わいやで', text })
        setText('');
      }}>
        <SendIcon />
      </IconButton>
    </>
  )
}

export default MessageSubmitButton;