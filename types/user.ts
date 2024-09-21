export interface IUser {
    id: string,
    username: string,
    displayname: string,
    profile: {
        avatarUrl: string,
        bannerUrl: string,
        bio: string,
        pronouns: string
    },
    followers: [],
    followed: [],
    liked: [],
    replies: [],
    posts: [],
    flags: IUserFlags[] | any[],
    suspension: {
        active: boolean,
        createdAt: string,
        expiredAt: string,
        reason: string
    },
    createdAt: string
}

export enum IUserFlags {
    CAN_SUSPEND = 'CAN_SUSPEND',
    CAN_DELETE_AVATAR = 'CAN_DELETE_AVATAR',
    CAN_DELETE_BANNER = 'CAN_DELETE_BANNER',
    CAN_DELETE_POST = 'CAN_DELETE_POST',
    CAN_MODIFY_USER = 'CAN_MODIFY_USER'
}