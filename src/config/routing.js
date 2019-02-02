class Routing {
  static userRepos() {
    return '/user/repos';
  }

  static clientHome() {
    return '/';
  }

  static clientRepos() {
    return '/repos';
  }

  static clientRepoIssues(id = ':id') {
    return `/repos/${id}`;
  }
}

export default Routing;
