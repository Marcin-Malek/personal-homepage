import axios from "axios";

const params = new URLSearchParams();
params.append("sort", "created");

const reposEndpoint = `https://api.github.com/users/Marcin-Malek/repos?${params.toString()}`;

export const getGithubRepos = () => axios
	.get(reposEndpoint)
	.then(response => response.data);