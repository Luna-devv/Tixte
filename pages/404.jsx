import React from 'react';

export default class Error404 extends React.Component {
    render() {
        return (
            <>
                The requested site cannot be found <br />
                <a className='link' href='/'> Go home</a>
            </>
        );
    };
};