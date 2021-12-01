import React from 'react';

import {
    DuplicateIcon,
    ExternalLinkIcon
} from '@heroicons/react/outline';

const reads = [{
    title: 'Register',
    section: 'how',
    list: [{
        id: 1,
        text: 'Go to <a href="https://tixte.com/register" class="link">tixte.com/register</a>.'
    }, {
        id: 2,
        text: 'Enter a username, your email address, a secure password and a <a href="#code" class="df-link">beta code</a>.'
    }, {
        id: 3,
        text: 'If you want to use <a href="https://getsharex.com/" class="df-link">ShareX</a> or <a href="https://magiccap.me/" class="df-link">MagicCap</a> to create screenshots go to the <a href="https://tixte.com/dashboard/configurations" class="df-link">configurations tab</a> to download the respective configs.'
    }, {
        id: 4,
        text: 'If you want to link your Tixte account with your Discord account, go to <a href="https://discord.com/channels/818940877262553141/818942351946022952" class="mention">#bot-commands</a> on <a href="/go/discord" class="df-link">our server</a> and run <a href="https://cdn.xyna.space/1638297786.png" style="background-color: #2b2b2b; padding: 0.1rem; padding-left: 0.2rem; padding-right: 0.2rem; border-radius: 0.3rem; cursor: pointer">/link [upload_key]</a>.'
    }],
    buttons: [{
        url: '/',
        text: 'Read more'
    }],
}, {
    title: 'Beta code',
    section: 'code',
    list: [{
        id: '•',
        text: '<bold>Enter a Giveaway</bold>',
        subs: ['a']
    }, {
        id: '•',
        text: 'Enter a username, your email address, a secure password and a <a href="#code" class="df-link">beta code</a>.'
    }, {
        id: '•',
        text: 'If you want to use <a href="https://getsharex.com/" class="df-link">ShareX</a> or <a href="https://magiccap.me/" class="df-link">MagicCap</a> to create screenshots go to the <a href="https://tixte.com/dashboard/configurations" class="df-link">configurations tab</a> to download the respective configs.'
    }, {
        id: '•',
        text: 'If you want to link your Tixte account with your Discord account, go to <a href="https://discord.com/channels/818940877262553141/818942351946022952" class="mention">#bot-commands</a> on <a href="/go/discord" class="df-link">our server</a> and run <a href="https://cdn.xyna.space/1638297786.png" style="background-color: #2b2b2b; padding: 0.1rem; padding-left: 0.2rem; padding-right: 0.2rem; border-radius: 0.3rem; cursor: pointer">/link [upload_key]</a>.'
    }],
    buttons: [{
        url: '/',
        text: 'Watch video'
    }, {
        url: '/',
        text: 'test'
    }],
}];

export default class Homepage extends React.Component {

    render() {
        return (
            <>
                <div className='read'>
                {reads?.map(read => (
                    <section id={read?.section} className='readContainer'>
                        <a className='readTitle' href={'/read/register#' + read?.section} style={{cursor: 'pointer'}}> {read?.title} <DuplicateIcon className='copyIco ico' /> </a> <br />
                        <div className='readContent'>
                        {read?.list?.map(item => (
                            <>
                                 <id style={{color: '#ababab'}}>{item?.id}{isNaN(item?.id) ? '' : '.'}</id> <text dangerouslySetInnerHTML={{__html: item?.text}}></text> <br />
                                <div style={item?.subs ? {marginBottom: 10} : {}}>
                                    {item?.subs?.map(sub => (
                                        <>
                                                <text dangerouslySetInnerHTML={{__html: sub}}></text> <br />
                                        </>
                                    ))}
                                </div>
                            </>
                        ))}
                        </div>
                        <br />
                            {read?.buttons?.map(button => (
                                <>
                                    <button className='button' style={button?.url && button?.text ? {marginLeft: 14} : {visibility: 'hidden', position: 'absolute'}} onClick={()=> window.open(button?.url)}>
                                        {button?.text} <ExternalLinkIcon className='ico' style={{top: 3.2, left: 0.1}} />
                                    </button>
                                </>
                            ))}
                    </section>
                ))}
                </div>
            </>
        );
    };
};
