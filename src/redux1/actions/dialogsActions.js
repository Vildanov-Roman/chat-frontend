import { createAction } from "@reduxjs/toolkit";


// pending (запрос в процессе)
export const fetchRequest = createAction('dialogs/fetchRequest');
// fulfilled (успешный запрос)
export const fetchSuccess = createAction('dialogs/fetchSuccess');
// rejected (запрос с ошибкой)
export const fetchError = createAction('dialogs/fetchError');