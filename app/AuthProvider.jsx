'use client';

import { useUser } from '@stackframe/stack'
import React, { useEffect, Suspense } from 'react'

function UserComponent() {
    const user = useUser();

    useEffect(() => {
        console.log(user)
    }, [user])
    
    return null;
}

function AuthProvider({ children }) {
    return (
        <div>
            <Suspense fallback={<div>Loading user...</div>}>
                <UserComponent />
            </Suspense>
            {children}
        </div>
    )
}

export default AuthProvider
