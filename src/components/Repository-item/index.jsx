import React from 'react';
import * as S from './styled';

export default function RepositoryItem({ name, linkRepo, fullName, description }) {
    return (
        <S.Wrapper>
            <h2>{name}</h2>
            <hr />
            <h4>Full name:</h4>
            <a href={linkRepo} target='blank'>{fullName}</a>
            {description ? (
                <>
                    <h4>Description:</h4>
                    <p>{description}</p>
                </>) :
                <></>}
        </S.Wrapper>
    )
}


