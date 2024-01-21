import { User, Content, Comment } from "./Instagram";


export const user1 : User = {
    userid: 1,    
    user_name:"messi",                  
    user_image : "/icons/추달.png",     
    place : "seoul" ,              
    contents :[{content_id:1,
        content_image: "/icons/배경.jpg", 
        content: "hello world",   
        like: [{ 
            userid: 2, 
            user_name :"ronaldo",                     
            user_image : "/icons/추달.png",     
            place : "seoul" ,              
            contents :null,
            follow : null
        }] ,      
        comment:[{ comment_id: 1,    
            content_id:1,
            comment_content: "hello, world", 
            like: [],       
            user:  {userid: 5, 
                user_name :"neymar",                     
                user_image : "/icons/추달.png",     
                place : "seoul" ,              
                contents :null,
                follow : null} }],      
        user: {userid: 3, 
            user_name :"megod",                     
            user_image : "/icons/추달.png",     
            place : "seoul" ,              
            contents :null,
            follow : null}

    },{content_id:1,
        content_image: "/icons/배경.jpg", 
        content: "hello world",   
        like: [{ 
            userid: 2, 
            user_name :"ronaldo",                     
            user_image : "/icons/추달.png",     
            place : "seoul" ,              
            contents :null,
            follow : null
        }] ,      
        comment:[{ comment_id: 1,    
            content_id:1,
            comment_content: "hello, world", 
            like: [],       
            user:  {userid: 5, 
                user_name :"neymar",                     
                user_image : "/icons/추달.png",     
                place : "seoul" ,              
                contents :null,
                follow : null} }],      
        user: {userid: 3, 
            user_name :"megod",                     
            user_image : "/icons/추달.png",     
            place : "seoul" ,              
            contents :null,
            follow : null}

    }],
    follow : [{userid: 3, 
        user_name :"megod",                     
        user_image : "/icons/추달.png",     
        place : "seoul" ,              
        contents :null,
        follow : null},
    {userid: 4, 
        user_name :"ronaldogod",                     
        user_image : "/icons/추달.png",     
        place : "seoul" ,              
        contents :null,
        follow : null}
    ,{userid: 5, 
    user_name :"neymar",                     
    user_image : "/icons/추달.png",     
    place : "seoul" ,              
    contents :null,
    follow : null}]
}

export const user2 : User = {
    userid: 2, 
    user_name :"ronaldo",                     
    user_image : "/icons/추달.jpg",     
    place : "seoul" ,              
    contents :null,
    follow : null
}

export const user3 : User = {
    userid: 3,    
    user_name:"hazard",                    
    user_image : "/icons/추달.jpg",     
    place : "seoul" ,              
    contents :null,
    follow : null
}



export const content : Content = {
    content_id:1,
    content_image: "/icons/배경.jpg", 
    content: "hello world",   
    like: [user1] ,      
    comment:null,      
    user: user1.userid
}

export const comment :Comment= {
    comment_id: 1,    
    comment_content: "hello, world", 
    like: [user2,user3],       
    user: 1  
}