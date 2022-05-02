import { API_URL } from "../properties";
import { handleErrors } from "./helpers";
import { Inventory, Homepage, Metadata } from "../interfaces";

export const ACTIVE_NAV_TAB = "ACTIVE_NAV_TAB";
export const setNavTab = (text: string) => ({
  type: ACTIVE_NAV_TAB,
  payload: text,
});

export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const setCategory = (id: number) => ({
  type: SELECT_CATEGORY,
  payload: id,
});

export const GET_METADATE_BEGIN = "GET_METADATE_BEGIN";
export const getMetaDataBegin = () => ({
  type: GET_METADATE_BEGIN,
});

export const GET_METADATE_SUCCESS = "GET_METADATE_SUCCESS";
export const getMetaDataSuccess = (data: Metadata) => ({
  type: GET_METADATE_SUCCESS,
  payload: data,
});

export const GET_METADATE_FAILED = "GET_METADATE_FAILED";
export const getMetaDataFailed = (error: any) => ({
  type: GET_METADATE_FAILED,
  payload: { error },
});

export function getMetadata() {
  return async (dispatch: any) => {
    try {
      dispatch(getMetaDataBegin());
      const response = await fetch(`${API_URL}metadata`, {
        method: "GET",
      }).then(handleErrors);
      const data = await response.json();
      dispatch(getMetaDataSuccess(data));
    } catch (error) {
      dispatch(getMetaDataFailed(error));
    }
  };
}

export const GET_HOMEPAGE_BEGIN = "GET_HOMEPAGE_BEGIN";
export const getHomePageBegin = () => ({
  type: GET_HOMEPAGE_BEGIN,
});

export const GET_HOMEPAGE_SUCCESS = "GET_HOMEPAGE_SUCCESS";
export const getHomePageSuccess = (data: Homepage) => ({
  type: GET_HOMEPAGE_SUCCESS,
  payload: data,
});

export const GET_HOMEPAGE_FAILED = "GET_HOMEPAGE_FAILED";
export const getHomePageFailed = (error: any) => ({
  type: GET_HOMEPAGE_FAILED,
  payload: { error },
});

export function getHomePage(id: number) {
  return async (dispatch: any) => {
    try {
      dispatch(getHomePageBegin());
      const response = await fetch(`${API_URL}homepage`, {
        method: "POST",
        body: JSON.stringify({ category: id }),
      }).then(handleErrors);
      const data = await response.json();
      dispatch(getHomePageSuccess(data));
    } catch (error) {
      dispatch(getHomePageFailed(error));
    }
  };
}

export const GET_INVENTORY_BEGIN = "GET_INVENTORY_BEGIN";
export const getInventoryBegin = () => ({
  type: GET_INVENTORY_BEGIN,
});

export const GET_INVENTORY_SUCCESS = "GET_INVENTORY_SUCCESS";
export const getInventorySuccess = (data: Inventory) => ({
  type: GET_INVENTORY_SUCCESS,
  payload: data,
});

export const GET_INVENTORY_FAILED = "GET_INVENTORY_FAILED";
export const getInventoryFailed = (error: any) => ({
  type: GET_INVENTORY_FAILED,
  payload: { error },
});

export function getInventory(id: number) {
  return async (dispatch: any) => {
    try {
      dispatch(getInventoryBegin());
      const response = await fetch(`${API_URL}inventory`, {
        method: "POST",
        body: JSON.stringify({ category: id }),
      }).then(handleErrors);
      const data = await response.json();
      dispatch(getInventorySuccess(data));
    } catch (error) {
      dispatch(getInventoryFailed(error));
    }
  };
}
