export const addToDb = (key, value) =>{
    localStorage.setItem(key, value)
}

export const getLocalStorageTime = name =>{
    const time = localStorage.getItem(name)
    return time;
}