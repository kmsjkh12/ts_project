import { create } from "zustand";

export const userStore = create((set) => ({
  userInfo: null,
  story : null,
  feed : [],
  loginSuccess: (data : any) =>
    set(
      (state : any) => (
        console.log(data),
        {
          userInfo: data,
        }
      )
    ),
  lougout: () =>
    set(() => ({
      userInfo: {},
    })),


  addStory: (data : any)=>
  set(
    (state : any)=>(
      console.log(data),

      {
          story : data
      }
    )
  ),
  
  addFeed: (data : any) =>
  set(
    (state:any)=>(
      {
          feed : data
      }
    )

  )

}));
