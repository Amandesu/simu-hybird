import {  handleActions } from 'redux-actions';

// 首页
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
// 回收详情
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
// 回收列表
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
// 订单列表
export const TicketManage_OrderList = handleActions(
    {
        ["TICKETMANAGE_ORDERLIST_CHANGE"]: (state, action )=> {
            return { ...state,...action.payload };
        },
        ["TICKETMANAGE_ORDERLIST_CLEAR"]: (state, action )=> {
            return {
                status:"1" 
            };
        }
    },
    {
        status:"1" 
    }
)
// 收款账号设置
export const TicketManage_CreditSetting = handleActions(
    {
        ["TICKETMANAGE_CREDITSETTING _CHANGE"]: (state, action )=> {
            return { ...state,...action.payload };
        }
    },
    {
       // status:"1" 
    }
)
// 公共组件中的reduce

export {
    TicketManage_Component_FooterTab
} from "./component/reduce"