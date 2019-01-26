import {  handleActions } from 'redux-actions';


export const TicketManage_Home = handleActions(
    {
        ["TICKETMANAGE_HOME__CHANEGE"]: (state, action )=> {
            return { ...state,...action.payload };
        }
    },
    {
        list:[]
    }
)
export const TicketManage_RecoverDetail = handleActions(
    {
        ["TICKETMANAGE_RECOVERDETAIL_CHANEGE"]: (state, payload)=>{
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

export {
    TicketManage_Component_FooterTab
} from "./component/reduce"