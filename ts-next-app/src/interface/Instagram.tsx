export interface User{                   
    userid:number,      
    user_name: string,             // 유저 번호
    user_image : string | null,      // 프로필 사진
    place : string | null            // 장소
    contents : Array<Content> |null  // 게시글 array
    follow : Array<User> | null      // 팔로우한 유저 array
}   

export interface Content {
    content_id: number ;      //게시글 번호
    content_image: string | null;   //게시글 이미지
    content: string | null;         //게시글 내용  
    like: Array<User> | null;       //게시글 좋아요 user array
    comment: Array<Comment> | null;        //게시글 댓글 array
    user: User;           //유저id
}

export interface Comment {
    comment_id: number ,      //댓글 번호
    content_id : number,
    comment_content: string | null, //댓글 내용
    like: Array<User> | null,       //댓글 좋아요 
    user: User,           //유저 id
}


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




