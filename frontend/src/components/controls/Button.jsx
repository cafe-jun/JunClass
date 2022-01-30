import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0.5),
    },
    label: {
        textTransform: 'none',
    },
}));

const MuiButton = (props) => {
    const classes = useStyles();
    const { text, size, color, variant, onClick, ...other } = props;
    return (
        <Button
            variant={variant || 'contained'}
            size={size || 'large'}
            color={color || 'primary'}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root, label: classes.label }}
        >
            {text}
        </Button>
    );
};

export default MuiButton;
