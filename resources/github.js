var username = "delbra1n";
var ignoredRepos = ["repo1", "repo2"]; 
var url = `https://api.github.com/users/${username}/repos`;

function fetchRepos() {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            var repos = {};
            data.forEach(repo => {
                var reponame = repo.name;
                var stars = repo.stargazers_count;
                var fork = repo.fork;
                if (reponame !== username && !ignoredRepos.includes(reponame) && fork != true) {
                    repos[reponame] = stars;
                }
            });
            return repos;
        });
}

function sort_object(obj) {
    var items = Object.keys(obj).map(function(key) {
        return [key, obj[key]];
    });
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    var sorted_obj = {};
    items.forEach(function(v) {
        var use_key = v[0];
        var use_value = v[1];
        sorted_obj[use_key] = use_value;
    });
    return sorted_obj;
}

document.addEventListener("DOMContentLoaded", function () {
    var headerElement = document.querySelector(".u-layout-row"); // Assuming there's only one element with this class
    fetchRepos()
        .then(repos => {
            var number = 0;
            const max = 5;
            var content = "";
            var sortedRepos = sort_object(repos);
            for (var reponame in sortedRepos) {
                content += `<a href="https://github.com/${username}/${reponame}" target="_blank"><img src="https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${reponame}&theme=dark"/></a>`;
            }
            headerElement.innerHTML = content;
        })
        .catch(error => {
            alert("Error fetching repos:", error);
        });
});