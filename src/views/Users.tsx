import React from 'react';
import { useGetUsersQuery } from '../hooks/queries/useGetUsersQuery';
import { Loader } from '../components/Loader/Loader';
import { Container } from '../components/Container/Container';
import { UsersList } from '../components/UsersList/UsersList';

export const Users = (): JSX.Element => {
	const { isLoading, isFetching, error, data, refetch } = useGetUsersQuery();

	return (
		<>
			{(isLoading || isFetching) && <Loader />}
			{error && (
				<Container className="flex items-center h-[300px]">
					<p className="text-xl text-primary">Something went wrong...please try again later</p>
				</Container>
			)}
			{!isLoading && !isFetching && !error && <UsersList users={data} refetchUsers={refetch} />}
		</>
	);
};
