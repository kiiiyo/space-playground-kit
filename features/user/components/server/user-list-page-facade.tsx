import { dummyUser } from './__mock__';

export async function userListPageFacade() {
  return { users: dummyUser, total: dummyUser.length };
}
