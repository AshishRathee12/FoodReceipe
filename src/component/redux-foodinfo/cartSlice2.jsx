import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


// action 
export const getAllData2 = createAsyncThunk("foods", async () => {
    const id = ""
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await data.json();
    return response.categories;
})


export const counterSlice2 = createSlice({
    name: 'food',
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllData2.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllData2.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAllData2.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // use action.error.message instead of action.payload
            });
    },
    reducers: {

    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice2.actions

export default counterSlice2.reducer