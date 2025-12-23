import { UserEditPageContainer } from '@/features/user/components/server/user-edit-page-container';

export default async function UserEditPage({
  params,
}: PageProps<'/users/[id]/edit'>) {
  const { id } = await params;

  return <UserEditPageContainer userId={id} />;
}
