import axios from "axios";

export const getGithubRepos = () => axios
    .get("https://api.github.com/users/Marcin-Malek/repos")
    .then(response => response.data);