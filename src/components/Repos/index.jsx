import React, { useState, useEffect } from 'react'
import * as S from './style';
import RepositoryItem from '../Repository-item';
import useGithub from '../../hooks/github-hooks';


function Repos() {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false)
    useEffect(() => {
        if (!!githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);

        }
        setHasUserForSearchRepos(!!githubState.repositories);

    }, [githubState.user.login]);
    return (
        <>
            {hasUserForSearchRepos ? (
                <S.WrapperTabs
                    selectedTabClassName='is-selected'
                    selectedTabPanelClassName='is-selected'
                >
                    <S.WrapperTabList>
                        <S.WrapperTab>
                            Repositories
                        </S.WrapperTab>
                        <S.WrapperTab>
                            Starred
                        </S.WrapperTab>
                    </S.WrapperTabList>

                    <S.WrapperTabPanel>
                        <S.WrapperList>

                            {githubState.repositories.map(item =>
                                <> <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkRepo={item.html_url}
                                    fullName={item.full_name}
                                    description={item.description} />
                                </>
                            )}
                        </S.WrapperList>
                    </S.WrapperTabPanel>

                    <S.WrapperTabPanel>
                        <S.WrapperList>

                            {githubState.starred.map(item =>
                                <> <RepositoryItem
                                    key={item.id}
                                    name={item.name}
                                    linkRepo={item.html_url}
                                    fullName={item.full_name}
                                    description={item.description} />
                                </>
                            )}
                        </S.WrapperList>
                    </S.WrapperTabPanel>


                </S.WrapperTabs>) : (
                <>  </>
            )}
        </>
    )
}

export default Repos
