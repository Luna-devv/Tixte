import React from 'react';
import Link from 'next/link';
export default class Error404 extends React.Component {
    render() {
        return (
            <>
                The requested site cannot be found <br />
                <Link href='/'>
                    <a className='link'> Go home</a>
                </Link>
            </>
        );
    };
};