import React from 'react';
import Reads from  '../../components/reads';

const json = [{
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
            <Reads data={json} />
        );
    };
};
