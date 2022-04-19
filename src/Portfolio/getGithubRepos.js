export const getGithubRepos = async () => {
    const response = await fetch("https://api.github.com/users/Marcin-Malek/repos");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};