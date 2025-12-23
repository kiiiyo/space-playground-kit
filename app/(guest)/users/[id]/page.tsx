import { UserDetailPageContainer } from '@/features/user/components/server/user-detail-page-container';

// /items/[id] ルート
export default async function UserDetailPage({
  params,
}: PageProps<'/users/[id]'>) {
  const { id } = await params;

  return <UserDetailPageContainer userId={id} />;
}
