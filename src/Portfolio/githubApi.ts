import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GithubReposApiResponse } from "../types";

const githubApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: "/" }),
	tagTypes: ["Repos"],
	endpoints: (build) => ({
		getRepos: build.query<GithubReposApiResponse, void>({
			query: () => ({
				url: "https://api.github.com/users/Marcin-Malek/repos",
				method: "GET",
				params: { sort: "created" }
			}),
			providesTags: ["Repos"]
		})
	})
});

export const { useGetReposQuery } = githubApi;

export default githubApi;