import createRequestSaga from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const writeSaga = createRequestSaga(authAPI.check);
