import { Link } from "react-router-dom";

export default function EachSeat(props) {

    // const { id, num, status } = props;
    const { num } = props;

    return (<>
        <Link to='/'>
            <button>{num}</button>
        </Link>
    </ >)
}