import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Categories = () => {
  return (
    <List>
        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/Korean'}>
            <GiChopsticks />
            <h4>Korean</h4>
        </SLink>
    </List>
  )
}

const List = styled.div`
    display:flex;
    justify-content: center;
    margin:2rem 0rem;
`

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 2rem;
    text-decoration: none;
    width: 5rem;
    height: 5rem;
    cursor:pointer;
    background: linear-gradient(35deg, #494949, #313131);
    transform: scale(0.8);
    color: #fff;

    h4{
        color: #fff;
        font-size: 0.8rem;
    }

    svg{
        color: #fff;
        font-size: 1.5rem;
    }
`

export default Categories
