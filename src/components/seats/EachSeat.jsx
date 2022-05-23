import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import styled from 'styled-components';

export default function EachSeat(props) {
    const { id, num, status, mySeats, setMySeats } = props;
    console.log(mySeats);
    const [selected, setSelected] = useState(false);
    const [background, setBackground] = useState('#C3CFD9');
    const [border, setBorder] = useState('#808F9D');

    if (status === false) {
        return (
            <Seat className="indisponivel">{num}</Seat>
        )
    }

    return (<>
        <Seat onClick={toggleColors} background={background} border={border}>
            {num}
        </Seat>
    </ >)

    function toggleColors() {
        console.log(mySeats);
        if (!selected) {
            setSelected(true);
            setBackground('#8DD7CF');
            setBorder('#1AAE9E');
            console.log('antes de add', mySeats);
            setMySeats(() => {
                mySeats.push(id)
                return mySeats;
            });
            console.log('depois de add', mySeats);
        } else {
            setSelected(false);
            setBackground('#C3CFD9');
            setBorder('#808F9D');
            setMySeats(() => {
                const filtered = mySeats.filter(item => {
                    if (item != id) {
                        return item;
                    }
                });
                return filtered;
            });
        }
    }
}
const Seat = styled.button`
    width: 26px;
    height: 26px;
    background: ${props => props.background};
    border: 1px solid ${props => props.border};
    border-radius: 12px;
    margin: 0 3.5px 16px 3.5px;
    :hover{
        cursor: pointer;
    }
`;


