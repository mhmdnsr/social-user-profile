import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {postLikesService} from "@services/post-likes.service";

export interface LikesState {
    likes: number[]
}

const initialState: LikesState = {
    likes: []
};

export const likesSlice = createSlice({
    name: "likesState",
    initialState,
    reducers: {
        setLikesState(state, action: PayloadAction<number[]>) {
            let uniqueLikes = new Set(action.payload);
            state.likes = Array.from(uniqueLikes);
        },
        addLikeToLikesState(state, action: PayloadAction<number>) {
            let uniqueLikes = new Set(state.likes);
            uniqueLikes.add(action.payload);
            let likes = Array.from(uniqueLikes);
            postLikesService.updateUserLikes(likes);
            state.likes = likes;
        },
        deleteLikeFromLikesState(state, action: PayloadAction<number>) {
            let uniqueLikes = new Set(state.likes);
            uniqueLikes.delete(action.payload);
            let likes = Array.from(uniqueLikes);
            postLikesService.updateUserLikes(likes);
            state.likes = likes;
        },
    },
});

export const {setLikesState, addLikeToLikesState, deleteLikeFromLikesState} = likesSlice.actions;

export const selectLikesState = (state: RootState) => state.likesState.likes;

export default likesSlice.reducer;
