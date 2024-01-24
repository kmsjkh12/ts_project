import { dehydrate, HydrationBoundary, QueryClient, useQuery } from "@tanstack/react-query";
import { userStore } from "@/store/user/userStore";
import { getProfile } from "@/store/user/user";
import './styles.css'; 

export async function getServerSideProps(){
    const queryClient = new QueryClient();
    const userInfo = userStore((state)=>state.userInfo)

    await queryClient.prefetchQuery({
        queryKey: ["profile",userInfo?.userid],
        queryFn: () => getProfile(userInfo?.userid)
    })

    return {
        props:{
            dehydratedState : dehydrate(queryClient),
        }
    }    
}

function Profile (){
    const userInfo = userStore((state)=>state.userInfo)

    const { data : profileData ,  isLoading : feedLoading} = useQuery({  queryKey: ["profile",userInfo?.userid], queryFn: () => getProfile(userInfo?.userid) })
    
    if(profileData){
        console.log(profileData.body)
    }

    return(
        <div>
        <header>
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img src="/icons/추달.png" alt="" width="200px" height="200px"/>
            </div>
            <div className="profile-user-settings">
              <h1 className="profile-user-name">{profileData?.body.user.usernickname}</h1>
              <button className="btn profile-edit-btn">Edit Profile</button>
              <button className="btn profile-settings-btn" aria-label="profile settings">
                <i className="fas fa-cog" aria-hidden="true"></i>
              </button>
            </div>
            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">{profileData?.body?.contents.length}</span> posts
                </li>
                <li>
                  <span className="profile-stat-count">{profileData?.body.followers}</span> followers
                </li>
                <li>
                  <span className="profile-stat-count">{profileData?.body.followings}</span> following
                </li>
              </ul>
            </div>
            <div className="profile-bio">
              <p>
                <span className="profile-real-name">Jane Doe</span> 🤣🤣🤣🤣🤣🦫🤣🏕️🦫🤣🏕️🦫🤣🏕️🦫🤣🏕️🦫🤣🏕️🦫🤣🏕️🦫🤣🏕️🦫🤣🏕️
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="gallery">
            {profileData?.body.contents.map((content)=>(
                 <div className="gallery-item" tabindex="0">
                 <img src={content.postimage} className="gallery-image" alt="" />
                     <div className="gallery-item-info">
                         <ul>
                             <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 34</li>
                             <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 1</li>
                         </ul>
                     </div>
             </div>
            ))}
          

          </div>
          <div className="loader"></div>
        </div>
      </main>
      </div>
    )
}

export default function ProfileRoutes({dehydratedState}: any){
    return(
        <HydrationBoundary state={dehydratedState}>
            <Profile />
        </HydrationBoundary>
    )
}
