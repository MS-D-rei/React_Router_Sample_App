import { AppDispatch, RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';

/* better to create typed versions of the useDispatch and useSelector hooks for usage in your application
1. For useSelector, it saves you the need to type (state: RootState) every time
2. For useDispatch, the default Dispatch type does not know about thunks. 
In order to correctly dispatch thunks, you need to use the specific customized
AppDispatch type from the store that includes the thunk middleware types,and use that with useDispatch.
Adding a pre-typed useDispatch hook keeps you from forgetting to import AppDispatch where it's needed.
*/

/*
Since these are actual variables, not types,
it's important to define them in a separate file such as app/hooks.ts,
not the store setup file. This allows you to import them into any component
file that needs to use the hooks, and avoids potential circular import dependency issues.
*/

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
