export type UsersType = {
    avatar_url: string,
    id: number,
    login: string,
    numRepos?: number
}

export type UserType = {
    avatar_url: string
    bio: string | null
    created_at: string
    email: string | null
    followers: number
    following: number
    location: string
    login: string
    repos: ReposType[]
}

export type ReposType = {
    name: string
    stargazers_count: number
    forks_count: number
    id?: number
}