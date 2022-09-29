// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
// import axios from 'axios'

// const initialState = {
//     volunteersArr: [],
//     status: null,
//     error: null
// }

// export const logVolunteerInfo = createAsyncThunk(
//     'VOLUNTEER_LOGGING',
//     async() => {
//         try {
//             const data = await axios.post('/api/volunteer_log')
//             return data.json();
//         } catch(e) {
//             console.error('failed to log volunteer information, please go to Help in settings')
//         }
//     }
// )

// const volunteerSlice = createSlice({
//     name: 'volunteerLog',
//     initialState,
//     extraReducers: {
//         [logVolunteerInfo.pending]: (state,action) => {
//             state.status = 'loading'
//         },
//         [logVolunteerInfo.fulfilled]: (state,action) => {
//             state.status = 'success';
//             state.volunteersArr.push(action.payload);
//         },
//         [logVolunteerInfo.rejected]: (state,action) => {
//             state.status = 'failed';
//             state.error = action.error
//         }
//     }

// })

// export default volunteerSlice.reducer