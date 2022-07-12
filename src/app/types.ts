export type UsersType = {
    avatar_url: string,
    // events_url: string,
    // followers_url: string,
    // following_url: string,
    // gists_url: string,
    // gravatar_id: string,
    // html_url: string,
    id: number,
    login: string,
    numRepos?: number
    // node_id: string,
    // organizations_url: string,
    // received_events_url: string,
    // repos_url: string,
    // site_admin: boolean,
    // starred_url: string,
    // subscriptions_url: string,
    // type: string,
    // url: string,
}

export type UserType = {
     avatar_url: string
     bio: string | null
    // blog: string
    // company: string
    created_at: string
    email: string | null
    // events_url: string
     followers: number
    // followers_url: string
     following: number
    // following_url: string
    // gists_url: string
    // gravatar_id: string
    // hireable: string | null
    // html_url: string
    // id: number
    location: string
    login: string
    // name: string
    // node_id: string
    // organizations_url: string
    // public_gists: number
    // public_repos: number
    // received_events_url: string
    // repos_url: string
    // site_admin: boolean
    // starred_url: string
    // subscriptions_url: string
    // twitter_username: string
    // type: string
    // updated_at: string
    // url: string
    repos: ReposType[]
}

export type ReposType = {
    name: string
    stargazers_count: number
    forks_count: number
    id?: number
}