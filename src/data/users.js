
import { useGetUserQuery } from "@/features/user";



export const getUserByEmail =async (email) => {
  const { data } = useGetUserQuery('usersData')

  const found = data.find(user => user.email === email);
  return found;
}