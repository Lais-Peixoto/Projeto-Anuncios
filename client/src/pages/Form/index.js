import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FormArea } from './styled';


import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


import { useDispatch, useSelector } from 'react-redux';
import { PostOneAd } from '../../redux/ads/actions';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1, 0),
        width: '55ch',
      },
    },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}



const Form = () => {

    const classes = useStyles();

    const [ title, setTitle ]     = useState("");
    const [ content, setContent ] = useState("");

    const handleTitleChange = (e) => {
        return setTitle(e.target.value)
    }

    const handleContentChange = (e) => {
        return setContent(e.target.value)
    }

    const dispatch = useDispatch();
    const [ isEmpty , setIsEmpty ] = useState(false);
    const handleClick = () => {

        if ( title !== ""  && content !== "" ) {
            dispatch(PostOneAd(title, content));
            setTitle('');
            setContent('');
        } else {
            setIsEmpty(true);
        }
    }

    
    const [ open , setOpen ] = useState(true);
    const history = useHistory();

    const newStatus = useSelector(state => state.anuncios.status) ;
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
        setTimeout(() => {
            history.replace("/");
        }, 500);
    }

    const handleEmptyClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setIsEmpty(false);
    }

    return (
        <FormArea>

            { newStatus && 
                <Snackbar open={open} onClose={handleClose} autoHideDuration={1000}>
                    <Alert onClose={handleClose} severity="success">Anúncio criado com sucesso!</Alert>
                </Snackbar> 
            }

            { isEmpty && 
                <Snackbar open={isEmpty} onClose={handleEmptyClose} autoHideDuration={3000}>
                    <Alert onClose={handleEmptyClose} severity="error">Preencha o(s) campo(s) vazios.</Alert>
                </Snackbar> 
            }
            
            <div className="container">
                <h1>Crie seu novo Anúncio</h1>
                <div className="mobileForm">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField 
                        label="Título" 
                        value={title}
                        required
                        placeholder="Insira um título..."
                        onChange={handleTitleChange}
                        className="mobileInput"
                    />
                    <TextField
                        label="Descrição"
                        value={content}
                        placeholder="Insira uma descrição..."
                        multiline
                        required
                        rows={10}
                        onChange={handleContentChange}
                        className="mobileInput"
                    />
                    
                    <Button className="botao" onClick={handleClick} variant="contained" color="primary">
                        CRIAR
                    </Button>
                </form>
                </div>
            </div>
            
        </FormArea>
    );
}


export default Form;