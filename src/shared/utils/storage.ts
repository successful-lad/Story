export const setStorage = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export const getStorage = (key: string) => {
  const value = window.localStorage.getItem(key);
  return value ? JSON.parse(value) : value;
}

export const removeStorage = (key: string) => {
  window.localStorage.removeItem(key);
}
