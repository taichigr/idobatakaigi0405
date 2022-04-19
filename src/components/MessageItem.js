import { Avatar, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useRef } from "react";

import {gravatarPath} from '../gravatar'

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  }
}))

const MessageItem = ({isLastItem, name, text}) => {
  const ref = useRef(null);
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  useEffect(()=> {
    if(isLastItem === true) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  },[isLastItem])



  return (
    <>
      <ListItem divider={true} ref={ref}>
        <ListItemAvatar>
          <Avatar src={avatarPath}></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <Typography
              component="span"
              varient="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {text}
            </Typography>
          }
        ></ListItemText>
      </ListItem>
    </>
  )
}

export default MessageItem;