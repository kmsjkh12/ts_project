export interface LoginProps {
    usernickname :string,
    place :string,
    useremail :string,
    userimage :string,
    accessToken :string,
} 

export interface LoginData {
    useremail : string,
    password : string
} 

export interface UserData{
    userid: number,
    usernickname: string,   
    useremail: string,
    plage:string,
    userimage: string,
}


export interface PostUserData{
    userid:number;
}

followid
: 
1
place
: 
"kmsjkh12@naver.com"

export interface FollowerList{
    follower: Array<Follower>
}

export interface Follower{
    userid:number,
    followid:number,
    useremail:string,
    userimage:string,
    usernickname:string,
    place:string,
}

export interface ContentList{
    content: Array<Content>
}

export interface Content{
    postid:number,
    content:string,
    comment:CommentList,
    image:string,
    user: UserData
}


export interface CommentList{
    comment : Array<Comment>
}

export interface Comment{
    commentid:number,
    content:string,
    feedReplyDtoList: [],
    nickname:string,
    profile_image:string
}

export interface CreateComment{
    content:string,
    postid:number,
}