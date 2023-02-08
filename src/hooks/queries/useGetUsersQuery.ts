import { useQuery } from '@tanstack/react-query';
import { UserService } from '../../services/UserService';
import { GET_USERS_KEY } from '../../util/queryKeys';

export const useGetUsersQuery = () => {
	return useQuery({
		queryKey: [GET_USERS_KEY],
		queryFn: async () => await UserService.getUsers(),
		staleTime: 60 * 60 * 1000,
	});
};
