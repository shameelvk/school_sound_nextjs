import { configureStore } from '@reduxjs/toolkit'
import courseReducer from '../slice/course-slice'
import teamReducer from '../slice/team-slice'


export const store = configureStore({
  reducer: {
    courses:courseReducer,
    teams:teamReducer,
    
},
})


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch