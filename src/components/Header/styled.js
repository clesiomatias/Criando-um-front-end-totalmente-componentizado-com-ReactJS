import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input{
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 4px;
        font-weight: 500;
            }
    button{
        background-color: #ccc;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;
        font-weight:bold;
        font-size: 16px;
        &:hover{
            background-color: #9DE1FE;
            box-shadow: 0 1px 1px 1px rgba(0,0,0,0.2);

        }
    }

`;