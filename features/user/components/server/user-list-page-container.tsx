import { UserList } from '@/features/user/components/client/user-list';

import { userListPageFacade } from './user-list-page-facade';

export async function UserListPageContainer() {
  const { users, total } = await userListPageFacade();
  return (
    <div className="p-4">
      <div className="lg:max-w-4xl mx-auto">
        <div className="py-4">
          <h1 className="text-2xl font-bold">List</h1>
        </div>
        <div className=" bg-white rounded-lg inset-shadow-xs shadow-md min-h-[460px]">
          <UserList users={users} total={total} />
        </div>
      </div>
    </div>
  );
}
