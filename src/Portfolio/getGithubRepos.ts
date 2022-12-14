import axios from "axios";
import { GithubReposApiResponse } from "../types";

const params = new URLSearchParams();
params.append("sort", "created");

const reposEndpoint = `https://api.github.com/users/Marcin-Malek/repos?${params.toString()}`;

export const getGithubRepos = () => axios
	.get<GithubReposApiResponse>(reposEndpoint)
	.then(response => response.data);