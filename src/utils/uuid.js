import { v4 as uuidv4 } from 'uuid';

export const getuuid = () => {
  let uuid = uuidv4();
  localStorage.setItem('uuid', uuid)
  return uuid
}