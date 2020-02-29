/**
 * Sends delete request to the API.
 * @param item to be deleted
 * @returns {Function}
 */
export const deleteItem = (info) => {
    return (dispatch) => {
        fetch(info.url,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            body: JSON.stringify(info.item)
        })
            .then(res => res.json())
            .then((data) => {
                dispatch({ type: 'DELETE_ITEM', info });
            })
            .catch((err) => {
                dispatch({ type: 'DELETE_ERROR', err }) }
            );
    }
};