/**
 * Sends get request to the API in order to get all the items for the given date.
 * @param date
 * @returns {Function}
 */
export const initializeItems = (info) => {
    return (dispatch) => {
        let dateJson = info.date.replace("/","-").replace("/","-");
        fetch(info.url + '/' + dateJson)
            .then(res => res.json())
            .then((data) => {
                dispatch({ type: 'INITIALIZE_ITEMS', data, info });
            })
            .catch((err) => {
                dispatch({ type: 'INITIALIZE_ERROR', err }) }
            );
    }
};