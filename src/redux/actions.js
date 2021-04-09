import axios from "axios";


export function getCards() {
    return (dispatch) => {
        axios.get('http://nazarov-kanban-server.herokuapp.com/card')
            .then(res => {
                dispatch({
                    type: 'GET_CARDS',
                    payload: res.data,
                })
            })
            .catch(err => err)
    }
}

export function addCard(newTaskObject) {
    return (dispatch) => {
        axios.post('http://nazarov-kanban-server.herokuapp.com/card', newTaskObject)
            .then(res => {
                dispatch(getCards())
                // dispatch({
                //     type: 'ADD_CARD',
                //     payload: res.data,
                // })
            })
            .catch(err => err)
    }
}

export function deleteCard(taskId) {
    return (dispatch) => {
        axios.delete(`http://nazarov-kanban-server.herokuapp.com/card/${taskId}`)
            .then(res => {
                dispatch(getCards())
                // dispatch({
                //     type: 'DELETE_CARD',
                //     payload: res.data,
                // })
            })
            .catch(err => err)
    }
}
