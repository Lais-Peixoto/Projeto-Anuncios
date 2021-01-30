import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Header = () => {

    const classes = useStyles();

    return (
      <HeaderArea>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <h1>proADS</h1>
            </Link>
          </div>
          <nav>
            <ul>
              <li className="optativo">
                <Link to="/">Anúncios</Link>
              </li>
              <li>
                <div className={classes.root}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="/form"
                    className="myButton"
                  >
                    <span>Criar </span><span>Anúncio</span>
                  </Button>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </HeaderArea>
    );
}

export default Header;