import Board from "./components/Board";
import connect from "react-redux/lib/connect/connect";
import React, {useEffect, useState} from "react";
import {getCards} from "./redux/actions";
import NewTaskModal from "./components/NewTaskModal";

function App(props) {

    useEffect(() => {
        props.getCards()
    },[])

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

  return (
    <div className="container">

        <h1 className="mb-3"> Kanban: redux, thunk - Ver.3 </h1>

        <button onClick={toggle} type="button" className="btn btn-primary mb-3">Add Task</button>
        <NewTaskModal toggle={toggle} modal={modal} setModal={setModal}/>

        <Board />

    </div>
  );
}

const mapStateToProps = (state) => ({
    cards: state.cards.cards
})

const mapDispatchToProps = (dispatch) => ({
    getCards: () => dispatch(getCards()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
