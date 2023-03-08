import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddList } from '../redux/modules/todo_reducer';
import { changeStatusHandler } from '../redux/modules/todo_reducer';
import { deleteitem } from '../redux/modules/todo_reducer';
import { FaCheck, FaFacebookMessenger,FaInstagram, FaPlus, FaRedoAlt, FaTrash } from "react-icons/fa"
import styled from 'styled-components';

function Home() {
    const reducer = useSelector((state)=> state.reducer);
    const [title, setTitle] = useState('')
    const [todo, setTodo] = useState('')
    const dispatch = useDispatch();

    return (
        <StWrapper>
            <Stform onSubmit={(event) => {
                event.preventDefault();
                setTitle('');
                setTodo('');
                }}>
            <Stinput style={{width:'400px', borderRight : '3px solid #3b5998'}} 
                type = 'text' value={title} placeholder = {'Add a title here...'}
                onChange ={(event) => {setTitle(event.target.value)}}/>
            <Stinput type = 'text' value={todo} placeholder = {'Add a content here...'}
                onChange ={(event) => {setTodo(event.target.value)}}/>
            <Stinputbtn onClick={() => {dispatch(
            AddList({
                id : reducer.length,
                title,
                todo,
                isDone : false,
            })
            )}}><FaPlus/></Stinputbtn>
            </Stform>

            {reducer.filter((item)=> item.isDone === false).map((item) => {
                return (
                    <WorkingItemWrapper key={item.id}>
                        <div> <FaFacebookMessenger/> &nbsp; {item.title}</div> 
                        <BtnWrapper>
                            <StItemBtn style={{color : '#3b5998', backgroundColor :'#ffffff' }} onClick={()=>dispatch(changeStatusHandler(item.id))}> <FaCheck/> </StItemBtn>
                            <Link to={`/Home/${item.id}`}>
                                <StItemBtn style={{ cursor: 'pointer', backgroundColor:'transparent', color : '#3b5998'}}><FaInstagram/></StItemBtn>
                            </Link>
                            <StItemBtn style={{color : '#3b5998', backgroundColor :'#ffffff' }} onClick={()=>dispatch(deleteitem(item.id))}> <FaTrash/> </StItemBtn>
                        </BtnWrapper>
                        
                    </WorkingItemWrapper>
                );
            })}
            <div/>
            {reducer.filter((item)=> item.isDone === true).map((item) => {
            return (
                <DoneItemWrapper key={item.id}>
                    <div> <FaCheck/> &nbsp; {item.title}</div> 
                    <BtnWrapper>
                    <StItemBtn style={{color : '#ffffff', backgroundColor :'#3b5998' }} onClick={()=>dispatch(changeStatusHandler(item.id))}> <FaRedoAlt/> </StItemBtn>
                        <Link to={`/Home/${item.id}`}>
                            <StItemBtn style={{ cursor: 'pointer', backgroundColor:'transparent',color : '#ffffff'}}><FaInstagram/></StItemBtn>
                        </Link>
                        <StItemBtn style={{color : '#ffffff', backgroundColor :'#3b5998' }} onClick={()=>dispatch(deleteitem(item.id))}> <FaTrash/> </StItemBtn>
                    </BtnWrapper>
                </DoneItemWrapper>  
            );
            })}
       </StWrapper>
      );
    }

const StWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    max-width: 1200px;
    padding: 30px;
    border-radius: 10px;
    background: rgba(250, 250, 250, 0.8);
    height: 100vh;
`
const WorkingItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin-bottom: 20px;
    background: #ffffff;
    color: #3b5998;
    font-family: Helvetica;
    font-weight: 400;
    border-radius: 3px;
`
const DoneItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    margin-bottom: 20px;
    background: #3b5998;
    color: #ffffff;
    font-family: Helvetica;
    font-weight: 400;
    border-radius: 3px;
`
const Stform = styled.form`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    min-height: 50px;
    margin-bottom: 25px;
    border-radius: 5px;
    overflow: hidden;
    border: 3px solid #3b5998;
`

const Stinput = styled.input`
    width: 100%;
    min-height: 50px;
    padding-left: 20px;
    width: 100%;
    background: white;
    font-size: 18px;
    font-weight: 200;
    border: none;
    color: #3a7bd5;
    border-radius: 0 0 5px 5px;
`

const Stinputbtn = styled.button`
    display: flex;
    justify-content: center;
    min-height: 60px;
    align-items: center;
    width: 100px;
    font-size: 20px;
    font-weight: 200;
    border: none;
    background: #3b5998;
    color: #ffffff;
    cursor: pointer;

    &:hover{
        background: #5679c4;
        color: #ffffff;
        transition: 0.5s;
    }
`
const StItemBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height : 40px;
    font-size: 20px;
    font-weight: 200;
    border: 1px solid grey;
    border-radius: 50px;
    cursor: pointer;   

    &:hover{
        border-radius: 5px;
        transition: 0.7s;   
    }  
`
const BtnWrapper = styled.div`
    display: flex;
    float: right;
    gap: 15px;
`

export default Home
