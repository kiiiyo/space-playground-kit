'use client';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import {
  EllipsisVerticalIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from '@/shared/components/icon';
import type { User } from '@/features/user/types';

type UserListPresenterProps = {
  users: User[];
  total: number;
};

export function UserListPresenter({ users }: UserListPresenterProps) {
  return (
    <table className="min-w-full table-fixed">
      <thead className=" bg-gray-100">
        <tr className="text-left h-12">
          <th className="w-12">
            <span className="relative inline-flex items-center justify-center w-12 h-12">
              <input type="checkbox" className="w-4 h-4" />
            </span>
          </th>
          <th className="px-2">ID</th>
          <th className="px-2">Name</th>
          <th className="px-2">Role</th>
          <th className="px-2">Created At</th>
          <th className="w-auto"></th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {users.map((user) => {
          const { id, name, role, createdAt } = user;
          const popoverTargetId = `popover-list-menu-${id}`;
          const popoverAnchorName = `--popover-list-anchor-${id}`;

          const userDetailPath = `/users/${id}`;
          const userEditPath = `/users/${id}/edit`;

          return (
            <tr key={id} className="text-sm border-t border-gray-200">
              <td className="w-12">
                <span className="relative inline-flex items-center justify-center w-12 h-12">
                  <input type="checkbox" className="w-4 h-4" />
                </span>
              </td>
              <td className="px-2 ">{id}</td>
              <td className="px-2">{name}</td>
              <td className="px-2">{role}</td>
              <td className="px-2">{createdAt}</td>
              <td className="px-2 text-center">
                <button
                  className="inline-block text-gray-700 hover:bg-gray-100 rounded-sm cursor-pointer"
                  popoverTarget={popoverTargetId}
                  // FIXME: 型エラーが発生するので、CSSPropertiesを使用している
                  style={{ anchorName: popoverAnchorName } as CSSProperties}
                >
                  <span className="flex items-center justify-start p-2 gap-x-2">
                    <EllipsisVerticalIcon className="w-4 h-4 text-gray-500" />
                  </span>
                </button>
                <div
                  id={popoverTargetId}
                  popover="auto"
                  className="z-10 mt-0 w-32 bg-white rounded-md shadow-md border border-gray-200"
                  style={
                    {
                      positionAnchor: popoverAnchorName,
                      top: 'anchor(bottom)',
                      left: 'anchor(right)',
                      translate: '-100% 4px',
                      // FIXME: 型エラーが発生するので、CSSPropertiesを使用している
                    } as CSSProperties
                  }
                >
                  <div className="divide-y divide-gray-200">
                    <div className="p-2">
                      <Link
                        href={{ pathname: userDetailPath }}
                        className="block text-gray-700 hover:bg-gray-100 rounded-sm"
                      >
                        <span className="flex items-center justify-start p-2 gap-x-2">
                          <EyeIcon className="w-4 h-4 text-gray-500" />
                          <span className="block text-xs">View</span>
                        </span>
                      </Link>
                      <Link
                        href={{ pathname: userEditPath }}
                        className="block text-gray-700 hover:bg-gray-100 rounded-sm"
                      >
                        <span className="flex items-center justify-start p-2 gap-x-2">
                          <PencilIcon className="w-4 h-4 text-gray-500" />
                          <span className="block text-xs">Edit</span>
                        </span>
                      </Link>
                    </div>
                    <div className="p-2">
                      <button className="block w-full text-gray-700 hover:bg-gray-100 rounded-sm cursor-pointer">
                        <span className="flex items-center justify-start p-2 gap-x-2">
                          <TrashIcon className="w-4 h-4 text-gray-500" />
                          <span className="block text-xs">Delete</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
