import { Epic } from "redux-observable";
import { of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { catchError, filter, map, mergeMap } from "rxjs/operators";
import {AddTodoAction, FetchTodoAction, RemoveTodoAction, ToggleTodoAction } from "../ducks/todo";


let API_BASE_URL = "http://localhost:3000/todo";

const PATH = {
    ADD: "/add",
    ALL: "/all",
    TOGGLE: "/toggle",
};

// TODO: move this to duck files
// TODO: rename duck to store
// TODO: create mapper files
// TODO: try out Visual Studio
// TODO: checkout prettier linting

export const FetchTodoEpic: Epic = (actions$) =>
    actions$.pipe(
        filter(FetchTodoAction.started.match),
        mergeMap((action) =>
            ajax.get( API_BASE_URL + PATH.ALL).pipe(
                map((response) => FetchTodoAction.done({params: action.payload, result: response.response})),
                catchError((error, caught) => of(FetchTodoAction.failed({error}))))));

export const AddTodoEpic: Epic = (actions$) =>
    actions$.pipe(
        filter(AddTodoAction.started.match),
        mergeMap((action) =>
            ajax.post( API_BASE_URL + PATH.ADD, action.payload).pipe(
                map((response) => AddTodoAction.done({params: action.payload, result: response.response})),
                catchError((error, caught) => of(AddTodoAction.failed({params: action.payload, error}))))));


export const RemoveTodoEpic: Epic = (actions$) => {
    return actions$.pipe(
        filter(RemoveTodoAction.started.match),
        mergeMap((action) =>
            ajax.delete(API_BASE_URL + "/" + action.payload.id).pipe(
                map((response) => RemoveTodoAction.done({params: action.payload, result: action.payload})),
                catchError((error, caught) => of(RemoveTodoAction.failed({params: action.payload, error}))))));
};

export const ToggleTodoEpic: Epic = (actions$) =>
    actions$.pipe(
        filter(ToggleTodoAction.started.match),
        mergeMap((action) =>
            ajax.post( API_BASE_URL + "/" + action.payload.id + PATH.TOGGLE, action.payload).pipe(
                map((response) => ToggleTodoAction.done({params: action.payload, result: response.response})),
                catchError((error, caught) => of(ToggleTodoAction.failed({params: action.payload, error}))))));
