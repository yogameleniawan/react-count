import React from "react";
import {
    useSelector,
    useDispatch
} from "react-redux";
import {
    increment
} from "../store/actions/incrementAction"

const IncrementApp = () => {
    const counter = useSelector(state => state.incrementReducer.count);
    const dispatch = useDispatch();
    const addIncrement = () => {
        dispatch(increment())
    }
    return ( 
        <div>
            <div> Klik: {counter} </div>
            <div onClick={addIncrement}>Tambah</div >
        </div>
    )
}
export default IncrementApp;