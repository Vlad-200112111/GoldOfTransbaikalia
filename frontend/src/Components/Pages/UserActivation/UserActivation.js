import React, {useEffect} from 'react';

function UserActivation(props) {

    let url = new URL(window.location.href)
    let params = new URLSearchParams(url.search);
    let uid = params.get('uid')
    let token = params.get('token')

    useEffect(()=>{

    },[])

    return (
        <>

        </>
    );
}

export default UserActivation;