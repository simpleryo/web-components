export const getLocalStorage = key => {
  try {
    const serializedValue = window.localStorage.getItem(key);
    if (serializedValue === null) {
      return {};
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    return {};
  }
};

export const setLocalStorage = (key, val) => {
  try {
    const serializedValue = JSON.stringify(val);
    window.localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.log("[setLocalStorage] error -->", error);
  }
};

export const getSessionStorage = key => {
  try {
    const serializedValue = window.sessionStorage.getItem(key);
    if (serializedValue === null) {
      return {};
    }
    return JSON.parse(serializedValue);
  } catch (error) {
    return {};
  }
};

export const setSessionStorage = (key, val) => {
  try {
    const serializedValue = JSON.stringify(val);
    window.sessionStorage.setItem(key, serializedValue);
  } catch (error) {
    console.log("[setSessionStorage] error -->", error);
  }
};

export default {
  getLocalStorage,
  setLocalStorage,
  getSessionStorage,
  setSessionStorage
};
