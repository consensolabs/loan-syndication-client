import { combineReducers } from 'redux';
import activeRoleId from './common';
import braidConnect from './braidConnect';
import braidStatus from './braidStatus';
import loanRequests from './loan-requests';

export default combineReducers({
    activeRoleId: activeRoleId,
    braidConnect: braidConnect,
    braidStatus: braidStatus,
    loanRequests: loanRequests
});