import React, { createContext, useState, useCallback } from 'react'
import api from '../services/api';

export const GithubContext = createContext({
    loading: false,
    user: {},
    repositories: [],
    starred: [],
});
const GithubProvider = ({ children }) => {

    const [githubState, setGithubState] = useState({
        loading: false,
        has_user: false,
        user: {
            avatar: '/nouser.jpeg',
            id: undefined,
            login: undefined,
            name: '',
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,

        },
        repositories: [],
        starred: [],
    });
    const getUser = async (username) => {
        setGithubState((prevState) => ({
            ...prevState,
            loading: !prevState.loading,


        }))
        api.get(`users/${username}`).then((data) => {

            setGithubState(prevState => ({
                ...prevState,
                has_user: true,
                user: {
                    avatar: data.data.avatar_url,
                    id: data.data.id,
                    login: data.data.login,
                    name: data.data.name,
                    html_url: data.data.html_url,
                    blog: data.data.blog,
                    company: data.data.company,
                    location: data.data.location,
                    followers: data.data.followers,
                    following: data.data.following,
                    public_gists: data.data.public_gists,
                    public_repos: data.data.public_repos,

                }
            }));
        }).finally(() => {
            setGithubState((prevState) => ({
                ...prevState,
                loading: !prevState.loading,
            }))
        })
    }
    const getUserRepos = async (username) => {
        api.get(`users/${username}/repos`).then((data) => {

            setGithubState(prevState => ({
                ...prevState,
                repositories: data.data,


            }));
        })

    }
    const getUserStarred = async (username) => {
        api.get(`users/${username}/starred`).then((data) => {
            setGithubState(prevState => ({
                ...prevState,
                starred: data.data,


            }));
        })

    }
    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),

    };
    return (
        < GithubContext.Provider value={contextValue} >
            {children}
        </GithubContext.Provider>

    )
}
export default GithubProvider;

