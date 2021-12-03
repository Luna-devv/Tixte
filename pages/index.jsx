import React from 'react';

import {
    ExternalLinkIcon
} from '@heroicons/react/outline';

const cards = [{
    title: 'Register',
    qestion: 'How can I register me on Tixte? What is a beta code and how can I get one?',
    url: '/read/register',
    important: true
}, {
    title: 'Register',
    qestion: 'How can I register me on Tixte? What is a beta code and how can I get one?',
    url: '/read/register',
    important: true
    
}];

export default class Homepage extends React.Component {

    render() {
        return (
            <>
                <div className='center'>
                    <div className='menu'>
                        {cards.map(card => (
                            <>
                                <button className={card.important ? 'blue-card card' : 'card'} onClick={()=> window.location.href=card.url}>
                                    <h>{card.title}</h> <ExternalLinkIcon className='ico' /> <br />
                                    <hh>{card.qestion}</hh>
                                </button>
                                <br />
                            </>
                        ))}
                        <div style={{color: '#919191'}}> An open source project by <a className='link' href='/go/luna'>Luna</a>.</div>
                    </div>
                </div>
            </>
        );
    };
};