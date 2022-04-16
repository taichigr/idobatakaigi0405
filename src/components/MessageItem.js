import { Avatar, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import {gravatarPath} from '../gravatar'

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  }
}))

const MessageItem = ({name, text}) => {
  const classes = useStyles();
  const avatarPath = gravatarPath(name);
  return (
    <>
      <ListItem divider={true}>
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