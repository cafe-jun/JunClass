import React from 'react';
import { SignInBody } from './styles';
import Controls from '@components/controls/Controls';

const SignIn = () => {
    const [account, onChangeAccount, setAccount] = useState();
    const onSubmit = () => {
        return false;
    };
    return (
        <>
            <SignInBody>
                <form onSubmit={onSubmit}>
                    <Controls.TextInput
                        id="outlined-basic"
                        label="계정"
                        variant="outlined"
                        placeholder="계정을 입력해주세요"
                        size="large"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                        value={account}
                        onChange={onChangeAccount}
                    />
                </form>
            </SignInBody>
        </>
    );
};

export default SignIn;
