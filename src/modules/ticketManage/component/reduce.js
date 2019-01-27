import {  handleActions } from 'redux-actions';
export const TicketManage_Component_FooterTab = handleActions(
    {
        ["TICKETMANAGE_FOFOOTERTAB__CHANEGE"]: (state, action )=> {
            return { ...state,...action.payload };
        }
    },
    {
        activePage: "recoverList"
    }
)