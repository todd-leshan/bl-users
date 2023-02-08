import React, {useEffect, useState} from 'react';
import {User} from "../types/user";
import {useGetUsersQuery} from "../hooks/queries/useGetUsersQuery";
import {Loader} from "../components/Loader/Loader";
import {Container} from "../components/Container/Container";
import {Button} from "../components/Button/Button";
import classNames from "classnames";
import {Icon, IconsName} from "../components/Icon/Icon";

const COL_1_WIDTH = 'w-full lg:w-1/4';
const COL_2_WIDTH = 'w-full lg:w-[18%]';
const COL_3_WIDTH = 'w-full lg:w-[23%]';
const COL_4_WIDTH = 'w-full lg:w-1/4';
const COL_5_WIDTH = 'w-full lg:w-[10%]';

export const Users = () => {
    const [reloadNoti, setReloadNoti] = useState(false);
    const [usersInView, setUsersInView] = useState<[User] | []>([]);
    const {isLoading, isFetching, error, data, refetch} = useGetUsersQuery();

    useEffect(() => {
        setUsersInView(data);
    }, [isFetching, data]);

    const removeUserFromList = (id: number) => {
        const usersLeft = usersInView.filter((user) => user.id !== id);
        setReloadNoti(false);
        setUsersInView(usersLeft);
    };

    const removeAllUsersFromList = () => {
        setReloadNoti(false);
        setUsersInView([]);
    };
    const reloadAllUsers = () => {
        if (usersInView?.length > 0) {
            setReloadNoti(true);
            return false;
        }

        setReloadNoti(false);
        refetch();
    };

    return (
        <>
            {(isLoading || isFetching) && <Loader />}
            {error && (
                <Container className="flex items-center h-[300px]">
                    <p className="text-xl text-primary">Something went wrong...please try again later</p>
                </Container>
            )}
            { !isLoading && !isFetching && !error && (
                <Container className="py-6 lg:py-10">
                    <span className="block text-base font-bold mb-3">Current users: {usersInView?.length || 0}</span>
                    <div className="flex flex-row gap-4">
                        <Button color="primary" onClick={reloadAllUsers}>Reload all users</Button>
                        <Button color="custom" className="bg-theme-3 border-theme-3 hover:text-primary" onClick={removeAllUsersFromList}>Clear all users</Button>
                    </div>
                    {reloadNoti && (
                        <p className="mt-2 text-sm text-secondary">You need to clear all users first.</p>
                    )}
                </Container>
            ) }
            {usersInView && usersInView.length > 0 && (
                <Container className="py-6 lg:py-10">
                    <div className="hidden lg:flex flex-col lg:flex-row border-b-2 border-third pb-2 gap-4 px-2 lg:px-4">
                        <div className={COL_1_WIDTH}>
                            <span className="text-lg uppercase font-bold">User</span>
                        </div>
                        <div className={COL_2_WIDTH}>
                            <span className="text-lg uppercase font-bold">Address</span>
                        </div>
                        <div className={COL_3_WIDTH}>
                            <span className="text-lg uppercase font-bold">Contact</span>
                        </div>
                        <div className={COL_4_WIDTH}>
                            <span className="text-lg uppercase font-bold">Company</span>
                        </div>
                        <div className={COL_5_WIDTH} />
                    </div>
                    {usersInView.map((user, index) => {
                        const { id, name, username, address, email, phone, website, company } = user;
                        const { suite, street, city, zipcode, geo } = address;
                        const { lat, lng } = geo;
                        const { name: companyName, catchPhrase, bs } = company;
                        return (
                            <div key={id} className={classNames(
                                "flex flex-col lg:flex-row border-b-2 border-third py-6 gap-4 px-2 lg:px-4",
                                index === 0 && 'border-t-2 lg:border-t-0'
                            )}>
                                <div className={classNames('flex flex-row', COL_1_WIDTH)}>
                                    <Icon size="lg" name={IconsName.user} className="mr-4" />
                                    <div className="flex flex-col justify-items-start text-left gap-2 text-sm">
                                        <span className="font-bold text-base">{name}</span>
                                        <span>username: {username}</span>
                                    </div>
                                </div>

                                <div className={classNames('flex flex-row', COL_2_WIDTH)}>
                                    <Icon size="lg" name={IconsName.home} className="mr-4" />
                                    <div className="flex flex-col justify-items-start text-left gap-2 text-sm">
                                        <span>{`${suite}, ${street}, ${city}, ${zipcode}`}</span>
                                        <div className="flex flex-row items-center">
                                            <Icon size="xs" name={IconsName.mark} className="mr-2" />
                                            <span className="text-xs">({lat}, {lng})</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={classNames('flex flex-row', COL_3_WIDTH)}>
                                    <div className="flex flex-col justify-items-start text-left gap-2 text-sm">
                                        <a className="flex flex-row items-center" href={`tel:${phone}`}>
                                            <Icon size="xs" name={IconsName.phone} className="mr-2" />
                                            <span>{phone}</span>
                                        </a>
                                        <a className="flex flex-row items-center" href={`mailto:${email}`}>
                                            <Icon size="xs" name={IconsName.email} className="mr-2" />
                                            <span className="break-all">{email}</span>
                                        </a>
                                        <a className="flex flex-row items-center" href={`https://${website}`} target="_blank">
                                            <Icon size="xs" name={IconsName.web} className="mr-2" />
                                            <span>{website}</span>
                                        </a>
                                    </div>
                                </div>

                                <div className={classNames('flex flex-row', COL_4_WIDTH)}>
                                    <div className="flex flex-col justify-items-start text-left gap-2 text-sm">
                                        <span className="text-base font-bold">{companyName}</span>
                                        <p>{catchPhrase}</p>
                                        <span className="text-xs italic">{bs}</span>
                                    </div>
                                </div>

                                <div className={classNames('flex flex-row', COL_5_WIDTH)}>
                                    <div>
                                        <Button onClick={()=> {removeUserFromList(id)}} color="primary">
                                            remove
                                        </Button>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </Container>
            )}
        </>
    );
};
