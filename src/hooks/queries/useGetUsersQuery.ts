import { useQuery } from '@tanstack/react-query';
import {UserService} from "../../serices/UserService";

export const useGetUsersQuery = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => UserService.getUsers(),
        staleTime: 60 * 60 * 1000,
    });
};
