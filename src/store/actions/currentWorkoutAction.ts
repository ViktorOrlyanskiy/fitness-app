export const getCurrentDate = () => {
    const date = new Date();
    let day = ('0' + date.getDate()).slice(-2);
    let month = ('0' + date.getMonth()).slice(-2);
    let year = String(date.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`
}
