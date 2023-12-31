import noteImg from "../assets/notes.png"
import tickImg from "../assets/double-tick.png"
import plusImg from "../assets/plus.png"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";

const Header = () => {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const handleInput = (e) => {
        setInput(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(added(input));
        setInput("")
    }
    const completeAll = () => {
        dispatch(allCompleted())
    }
    const handleClearComplete = () => {
        dispatch(clearCompleted())
    }
    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={submitHandler}
            >
                <img
                    src={noteImg}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                    value={input}
                    onChange={handleInput}
                />
                <button
                    type="submit"
                >
                    <img
                        className="w-8"
                        src={plusImg} alt="" />
                </button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer"
                    onClick={completeAll}
                >
                    <img
                        className="w-4 h-4"
                        src={tickImg}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer"
                    onClick={handleClearComplete}
                >Clear completed</li>
            </ul>
        </div>
    );
};

export default Header;