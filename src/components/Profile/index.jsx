import React, { useEffect } from 'react'
import * as S from "./style";
import useGithub from '../../hooks/github-hooks'

export default function Profile() {

    const { githubState } = useGithub();
    useEffect(() => {
        console.log(githubState.user)
    }, [githubState]);

    return (
        <S.Wrapper>

            <S.WrapperImage src={githubState.user.avatar} alt="Avatar of user" />

            <S.WrapperInfoUsers>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUserName>
                        <h3>Username:</h3>
                        <a href={githubState.user.html_url} target='blank'>{githubState.user.login}</a>
                    </S.WrapperUserName>
                    <S.WrapperUserName>
                        <h3>Company:</h3>
                        <a href={githubState.user.company}
                            target='blank'>{githubState.user.company}</a>
                    </S.WrapperUserName>
                    <S.WrapperUserName>
                        <h3>Location:</h3>
                        <a href={githubState.user.location}
                            target='blank'>{githubState.user.location}</a>
                    </S.WrapperUserName>
                    <S.WrapperUserName>
                        <h3>Blog:</h3>
                        <a href={githubState.user.blog}
                            target='blank'>{githubState.user.blog}</a>
                    </S.WrapperUserName>
                </div>
                <S.WrapperStatusCounter>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>

                    <div>
                        <h4>Followings</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </S.WrapperStatusCounter>
            </S.WrapperInfoUsers>

        </S.Wrapper >
    )
}
