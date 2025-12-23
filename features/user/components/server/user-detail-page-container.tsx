type UserDetailPageContainerProps = {
  userId: string;
};

export function UserDetailPageContainer({
  userId,
}: UserDetailPageContainerProps) {
  return (
    <div className="p-4">
      <div className="lg:max-w-4xl mx-auto">
        <div className="py-4">
          <h1 className="text-2xl font-bold">User Details: {userId}</h1>
        </div>
        <div className="py-4 bg-white rounded-lg inset-shadow-xs shadow-md min-h-[460px]"></div>
      </div>
    </div>
  );
}
