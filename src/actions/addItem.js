/**
 * Sends post request to the API trying to add new item.
 * @param newItem item to add to database
 * @returns {Function}
 */
export const addItem = (info) => {
    return (dispatch) => {
        fetch(info.url,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(info.data)
            })
            .then(res => res.json())
            .then((data) => {
                dispatch({ type: 'ADD_ITEM', data });
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: 'ADD_ITEM_NO_CONNECTION', info }) }
            );
    }
};