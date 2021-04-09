import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import connect from "react-redux/lib/connect/connect";
import { deleteCard } from "../redux/actions";

function DeleteTaskModal(props) {

    const {toggle, modal,setModal,taskId,taskName} = props;

    function deleteButtonHandler(){
        props.deleteCard(taskId)
        setModal(!modal)
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}> Delete the following Task?</ModalHeader>
                <ModalBody>
                    {taskName}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={deleteButtonHandler}> Delete </Button>{' '}
                    <Button color="secondary" onClick={toggle}> Cancel </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}



const mapDispatchToProps = (dispatch) => ({
    deleteCard: (taskId) => dispatch(deleteCard(taskId)),
})

export default connect(null, mapDispatchToProps)(DeleteTaskModal);