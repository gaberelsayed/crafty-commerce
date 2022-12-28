import { orderConstants } from "../constants/order";

export const newOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case orderConstants.CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case orderConstants.CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case orderConstants.CREATE_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case orderConstants.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const myOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case orderConstants.MY_ORDERS_REQUEST:
      return {
        loading: true,
      };

    case orderConstants.MY_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload.data.orders,
        ordersCount: action.payload.data.ordersCount,
        filteredOrder: action.payload.data.filteredOrder,
        filteredOrderCount: action.payload.data.filteredOrderCount,
        ordersPerPage: action.payload.data.ordersPerPage,
      };

    case orderConstants.MY_ORDERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case orderConstants.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
