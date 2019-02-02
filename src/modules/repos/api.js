import { Routing } from 'config';
import { FetchService } from 'services';

export async function getUserRepos() {
  const url = Routing.userRepos();

  return FetchService.get(url);
}

export async function getRepoIssues(url) {
  return FetchService.get(url);
}
