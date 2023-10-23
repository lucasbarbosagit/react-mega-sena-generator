import React from 'react';
import classes from './Footer.module.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
   <div className={classes.footer}>
      <p>Made with <FavoriteIcon></FavoriteIcon>  by Lucas Barbosa.</p>
   </div>
  );
};

export default Footer;