'use client';
import type { User } from '@/features/user/types';
import { UserListPresenter } from './user-list-presenter';

type UserListProps = {
  users: User[];
  total: number;
};

export function UserList({ users, total }: UserListProps) {
  return <UserListPresenter users={users} total={total} />;
}
