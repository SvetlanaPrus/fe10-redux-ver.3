import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import connect from "react-redux/lib/connect/connect";
import {addCard, getCards} from "../redux/actions";

function NewTaskModal(props) {

    const {toggle, modal,setModal} = props;

    const [newTaskName, setNewTaskName] = useState('')
    const [newTaskDescription, setNewTaskDescription] = useState('')
    const [newTaskStatus, setNewTaskStatus] = useState('')
    const [newTaskPriority, setNewTaskPriority] = useState('')


    function addButtonHandler() {
        const newTaskObject = {
            _id: Math.random(),
            name: newTaskName,
            description: newTaskDescription,
            status: newTaskStatus,
            priority: +newTaskPriority,
        }
        props.addCard(newTaskObject);
        setNewTaskName('')
        setNewTaskDescription('')
        setNewTaskStatus('')
        setNewTaskPriority('')
        setModal(!modal)
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}> Fill in ...</ModalHeader>
                <ModalBody>
                    <div className="mb-3 w-50 inline-item">
                        <label htmlFor="formGroupExampleInput" className="form-label"> Name: </label>
                        <input
                            value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)}
                            type="text" className="form-control" id="name"/>
                    </div>
                    <div className="mb-3 w-50 inline-item">
                        <label htmlFor="formGroupExampleInput" className="form-label"> Description: </label>
                        <input
                            value={newTaskDescription} onChange={(e) => setNewTaskDescription(e.target.value)}
                            type="text" className="form-control" id="description"/>
                    </div>
                    <label htmlFor="formGroupExampleInput" className="form-label"> Status: </label>
                    <select
                        value={newTaskStatus} onChange={(e) => setNewTaskStatus(e.target.value)}
                        className="form-select mb-3 w-auto" aria-label="Default select example">
                        <option defaultValue={newTaskStatus}>Choose...</option>
                        <option value="todo">Todo</option>
                        <option value="progress">Progress</option>
                        <option value="review">Review</option>
                        <option value="done">Done</option>
                    </select>
                    <label htmlFor="formGroupExampleInput" className="form-label"> Priority: </label>
                    <select
                        value={newTaskPriority} onChange={(e) => setNewTaskPriority(e.target.value)}
                        className="form-select mb-3 w-auto" aria-label="Default select example">
                        <option defaultValue={newTaskPriority}>Choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={addButtonHandler}> Save </Button>{' '}
                    <Button color="secondary" onClick={toggle}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}



const mapDispatchToProps = (dispatch) => ({
    addCard: (newTaskObject) => dispatch(addCard(newTaskObject)),
    getCards: () => dispatch(getCards()),
})

export default connect(null, mapDispatchToProps)(NewTaskModal);