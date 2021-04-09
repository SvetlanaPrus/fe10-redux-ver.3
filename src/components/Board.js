import React, {useState} from 'react';
import connect from "react-redux/lib/connect/connect";
import DeleteTaskModal from "./DeleteTaskModal";


function Board(props) {

    const {cards} = props;

    console.log(cards)

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {cards.map((el,i) =>
                        <tr key={el._id}>
                            <th scope="row" key={i+1}>{i+1}</th>
                            <td>{el.name}</td>
                            <td>{el.description}</td>
                            <td>{el.status}</td>
                            <td>{el.priority}</td>
                            <td>
                                <button onClick={toggle} type="button" className="btn btn-outline-primary btn-sm"> Delete </button>
                            </td>
                            {modal && <DeleteTaskModal
                                taskId={el._id}
                                taskName={el.name}
                                setModal={setModal}
                                modal={modal}
                                toggle={toggle}/>
                            }
                        </tr>

                    // <li key={el._id} className="mb-3">
                    //     <button type="button" className="btn btn-outline-primary btn-sm">Delete</button>
                    // </li>
                )}
                </tbody>
            </table>
        </div>
    )
}


const mapStateToProps = (state) => ({
    cards: state.cards.cards
})

export default connect(mapStateToProps)(Board);
