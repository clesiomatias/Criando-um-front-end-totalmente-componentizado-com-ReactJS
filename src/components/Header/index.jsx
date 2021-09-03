import React, { useState } from 'react'
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';





export default function Header() {
    const { getUser } = useGithub();
    const [userNameForSearch, setUserNameForSearch] = useState();
    const submitGetUser = () => {
        if (!userNameForSearch) return;
        return getUser(userNameForSearch)
    }
    return (
        <S.Wrapper>
            <input
                type="text"
                onChange={(event) => setUserNameForSearch(event.target.value)}
                placeholder='Digite o nome para pesquisa' />
            <button type='submit' onClick={submitGetUser}>
                BUSCAR
            </button>
        </S.Wrapper>
    )
}

