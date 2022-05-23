import { Link } from "react-router-dom"

export default function Session({ time, id }) {

    return (
        <Link to={`/assentos/${id}`}>
            <button>{time}</button>
        </Link>
    )
}