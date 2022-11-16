import React from 'react';
import Link from 'next/link';

import {
    ExternalLinkIcon
} from '@heroicons/react/outline';

const cards = [{
    title: 'Register',
    qestion: 'How do I create a Tixte account?',
    url: '/read/register',
    important: true
}, {
    title: 'Domains/Subdomains',
    qestion: 'How can I get free subdomains? How can I use my custom domains?',
    url: '/read/domains',
    important: false
}, {
    title: 'Styling',
    qestion: 'How can I customize my embeds? How can I change my file page?',
    url: '/read/styling',
    important: false
}, {
    title: 'ShareX',
    qestion: 'How can I set up ShareX to upload to Tixte?',
    url: '/read/sxcu',
    important: false
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
                        <Link href='/go/luna'>
                            <div style={{color: '#919191'}}>An open source project by <a className='link'>Luna</a>.</div>
                        </Link>
                        <div style={{color: '#5f5f5f'}}><br />This site is not endorsed by or affiliated with Tixte, LLC.</div>
                    </div>
                </div>
            </>
        );
    };
};
