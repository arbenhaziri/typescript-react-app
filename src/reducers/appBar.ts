import actions from "../actions";

type Action = {
  isLoading: boolean;
  error: string | null;
  msg: string;
};

type InitialState = {
  navBar: string;
  metaData: null | object;
  homePageData: null | object;
  inventory: null | object;
  category: string;
  action: Action;
};

const initialState: InitialState = {
  navBar: "",
  metaData: null,
  homePageData: null,
  inventory: null,
  category: "",
  action: {
    isLoading: false,
    error: null,
    msg: "",
  },
};

export default function appBarReducer(state = initialState, action: any) {
  switch (action.type) {
    case actions.appBar.ACTIVE_NAV_TAB: {
      return {
        ...state,
        navBar: action.payload,
      };
    }
    case actions.appBar.SELECT_CATEGORY: {
      return {
        ...state,
        category: action.payload,
        inventory: null,
        homePageData: null,
      };
    }
    case actions.appBar.GET_METADATE_BEGIN: {
      return {
        ...state,
        action: {
          ...state.action,
          isLoading: true,
        },
      };
    }
    case actions.appBar.GET_METADATE_SUCCESS: {
      return {
        ...state,
        metaData: action.payload,
        action: {
          ...state.action,
          isLoading: false,
          error: null,
        },
      };
    }
    case actions.appBar.GET_METADATE_FAILED: {
      return {
        ...state,
        action: {
          ...state.action,
          isLoading: false,
          error: action.payload
            ? action.payload.error.message
            : "Unknown error",
        },
      };
    }
    case actions.appBar.GET_HOMEPAGE_BEGIN: {
      return {
        ...state,
        action: {
          ...state.action,
          isLoading: true,
        },
      };
    }
    case actions.appBar.GET_HOMEPAGE_SUCCESS: {
      return {
        ...state,
        homePageData: action.payload,
        action: {
          ...state.action,
          isLoading: false,
          error: null,
        },
      };
    }
    case actions.appBar.GET_HOMEPAGE_FAILED: {
      return {
        ...state,
        action: {
          ...state.action,
          isLoading: false,
          error: action.payload
            ? action.payload.error.message
            : "Unknown error",
        },
      };
    }
    case actions.appBar.GET_INVENTORY_BEGIN: {
      return {
        ...state,
        action: {
          ...state.action,
          isLoading: true,
        },
      };
    }
    case actions.appBar.GET_INVENTORY_SUCCESS: {
      return {
        ...state,
        inventory: action.payload,
        action: {
          ...state.action,
          isLoading: false,
          error: null,
        },
      };
    }
    case actions.appBar.GET_INVENTORY_FAILED: {
      return {
        ...state,
        action: {
          ...state.action,
          isLoading: false,
          error: action.payload
            ? action.payload.error.message
            : "Unknown error",
        },
      };
    }
    default: {
      return state;
    }
  }
}
