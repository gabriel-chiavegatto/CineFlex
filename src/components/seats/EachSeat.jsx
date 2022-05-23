import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function EachSeat(props) {

    // const { id, num, status } = props;
    const { num, status} = props;

    if(status === false){
        return(
            <Seat className="indisponivel">{num}</Seat>
        )
    }

    return (<>
        <Link to='/'>
            <Seat>{num}</Seat>
        </Link>
    </ >)
}

const Seat = styled.button`
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    margin: 0 3.5px 16px 3.5px;
    :hover{
        cursor: pointer;
    }
`;