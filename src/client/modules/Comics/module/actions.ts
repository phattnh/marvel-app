import { ACTION_REQUEST_FETCH_COMICS, ACTION_FETCHING_COMICS, ACTION_FETCHED_COMICS, ACTION_FETCH_FAIL_COMICS, ACTION_SORT_COMICS, ACTION_SEARCH_COMICS, ACTION_CHANGE_VIEWS_COMICS } from "./constants";

export const actionRequestFetchComicsMarvel = (payload) => ({type: ACTION_REQUEST_FETCH_COMICS, payload});
export const actionFetchingComicsMarvel = () => ({type: ACTION_FETCHING_COMICS});
export const actionFetchedComicsMarvel = (payload) => ({type: ACTION_FETCHED_COMICS, payload});
export const actionFetchFailComicsMarvel = () => ({type: ACTION_FETCH_FAIL_COMICS});
export const actionSortComicsByField = (payload) => ({type: ACTION_SORT_COMICS, payload});
export const actionSearchComicsByKey = (payload) => ({type: ACTION_SEARCH_COMICS, payload});
export const actionViewsComics = (payload) => ({type: ACTION_CHANGE_VIEWS_COMICS, payload});