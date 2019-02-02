import { Routing } from 'config';
import { FetchService } from 'services';

export async function getUserRepos() {
  const url = Routing.userRepos();

  return FetchService.get(url);
}
