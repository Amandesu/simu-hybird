import {  handleActions } from 'redux-actions';
export const TicketManage_Component_FooterTab = handleActions(
    {
        ["TICKETMANAGE_FOFOOTERTAB__CHANEGE"]: (state, payload )=> {
            return { ...state,...action.payload };
        }
    },
    {
        data:[]
    }
)