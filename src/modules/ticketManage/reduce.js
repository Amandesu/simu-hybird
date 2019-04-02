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
        ["TICKETMANAGE_RECOVERDETAIL_CHANGE"]: (state, payload)=>{
            return { ...state,...action.payload };
        }
    },
    {
        data:[]
    }
)
// 回收列表
export const TicketManage_RecoverList = handleActions(
    {
        ["TICKETMANAGE_RECOVERLIST_CHANGE"]: (state, action )=> {
            return { ...state,...action.payload };
        }
    },
    {
        list:[],
        noticeMsg:{},
        cacheList:{},
        id:""
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
                ...state,
                status:-2
            };
        }
    },
    {
        status:-2,
        list:[],
        loading:false
    }
)
// 订单搜索
export const TicketManage_OrderSearch = handleActions(
    {
        ["TICKETMANAGE_ORDERSEARCH_CHANGE"]: (state, action )=> {
            return { ...state,...action.payload };
        }
    },
    {
        list:[],
        loading:false
    }
)
// 收款账号设置
export const TicketManage_User = handleActions(
    {
        ["TICKETMANAGE_USER_CHANGE"]: (state, action )=> {
            return { ...state,...action.payload };
        }
    },
    {
        userInfo: {
        
       }
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
       payinfo: {
            alipayName: "",
            alipayNo: "",
            files: []
       }
    }
)
// 公共组件中的reduce

export {
    TicketManage_Component_FooterTab
} from "./component/reduce"