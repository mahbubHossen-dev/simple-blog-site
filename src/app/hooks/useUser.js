import { useGetUserQuery } from "@/features/user";

export const useUser = (email) => {
  const { data: users, isLoading } = useGetUserQuery('usersData')
  const found = users?.find(user => user.email === email)
  return found
}