import React, {FC} from 'react';
import {useUserSelector} from "../hooks/hooks";

export const UserPage: FC = () => {
    const data = useUserSelector()

    return (
        <div>{data && data.login}</div>
    );
}

