import Capa from '../../assets/images/image-capa3.png';
import styled from 'styled-components';
export default function MovieCover() {
    return (
        <Cartaz>
            <img src={Capa} alt="coverId" />
        </Cartaz>
    )
}

const Cartaz = styled.div`

    background-color: #FFFFFF;
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 11px;
    
    img{
        width: 129px;
        height: 193px;
        
    }

`;

