import {  handleActions } from 'redux-actions';


export const TicketManage_HOME = handleActions(
    {
        ["TICKETMANAGE_HOME__CHANEGE"]: (state, payload )=> {
           
            return state;
        }
    },
    {
        data:[]
    }
)


export const TicketManage_RecoverDetail = handleActions(
    {
        ["TICKETMANAGE_RECOVERDETAIL_CHANEGE"]: (state, payload)=>{
            console.log(state)
            return state;
        }
    },
    {
        data:[]
    }
)

export const TicketManage_RecoverList = handleActions(
    {
        ["TICKETMANAGE_RECOVERLIST_CHANGE"]: (state, payload )=> {
            console.log(payload)
            return state;
        }
    },
    {
        data:[]
    }
)

