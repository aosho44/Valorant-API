import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import agentApi from '../../api/agentApi';

export const fetchAsyncAgents = createAsyncThunk(
	'agent/fetchAsyncAgents',
	async () => {
		const response = await agentApi.get(`?isPlayableCharacter=${true}`);
		return response.data;
	}
);

const initialState = {
	agents: {},
};

const agentSlice = createSlice({
	name: 'agents',
	initialState,
	reducers: {
		addAgents: (state, { payload }) => {
			state.agents = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAsyncAgents.pending, () => {
				console.log('Pending');
			})
			.addCase(fetchAsyncAgents.fulfilled, (state, payload) => {
				console.log('Fetched Successfully');
				return { ...state, agents: payload };
			})
			.addCase(fetchAsyncAgents.rejected, () => {
				console.log('Failed');
			});
	},
});

export const { addAgents } = agentSlice.actions;
export const getSingleAgents = (state) => state.agents.agents;
export default agentSlice.reducer;
