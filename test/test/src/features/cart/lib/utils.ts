import { SLICE_NAME } from './config'

export const getActionName = (name: string) => `${SLICE_NAME}/${name}`;
