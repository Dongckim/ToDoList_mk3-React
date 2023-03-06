import React from 'react'
import { FaHome } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Under_todo() {
    const reducer = useSelector((state)=> state.reducer);
    const param = useParams();
    const newObj = reducer.find((item) => item.id === +param.id)
    console.log(newObj)
  return (
    <StTemplate>
        <StHeader>
           ID : { newObj.id } 
            <Link to={`/`}>
                <StItemBtn style={{ cursor: 'pointer' }}> <FaHome/> </StItemBtn>
            </Link>
        </StHeader>
        <StMain>
            <StLabel> Title : { newObj.title }</StLabel>
            <StLabel  style={{fontWeight : 'lighter'}}> To-do : { newObj.todo }</StLabel>
        </StMain>
    </StTemplate>
  )
}

const StTemplate = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 800px;
    max-width: 1200px;
    padding: 30px;
    border-radius: 10px;
    background: rgba(250, 250, 250, 0.8);
    height: 100%;
`
const StHeader = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    font-size: 25px;
    border-bottom: 3px solid #3b5998;
`
const StMain = styled.div`
    margin-top: 20px;
`

const StItemBtn = styled.button`
    display: flex;
    justify-content: center;
    margin-left: 700px;
    align-items: center;
    width: 40px;
    height : 40px;
    font-size: 20px;
    font-weight: 200;
    border: 1px solid grey;
    border-radius: 50px;
    background-color: transparent;
    cursor: pointer;   

    &:hover{
        border-radius: 5px;
        transition: 0.7s;   
    }  
`
const StLabel = styled.div`
    font-size : 30px;
    padding-bottom: 20px;
`
export default Under_todo