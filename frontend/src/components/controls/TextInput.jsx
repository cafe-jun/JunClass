import TextField from '@mui/material/TextField';

const TextInput = (props) => {
    const { variant = 'outlined', label, name, error = null, value, size = 'medium', placeholder, fullWidth, onChange, ...other } = props;
    return (
        <TextField
            variant={variant}
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            size={size}
            fullWidth
            {...other}
            {...(error && { error: true, helperText: error })}
        />
    );
};

export default TextField;
