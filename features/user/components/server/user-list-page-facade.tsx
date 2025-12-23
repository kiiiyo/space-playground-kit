export async function userListPageFacade() {
  // サーバーサイドでは絶対URLが必要
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000');
  const res = await fetch(`${baseUrl}/api/users`, {
    cache: 'no-store', // 常に最新を取得
  });
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await res.json();
  return { users: data.users, total: data.total };
}
