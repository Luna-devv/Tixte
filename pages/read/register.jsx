import React from 'react';
import Reads from  '../../components/reads';

const json = {
    page: 'register',
    payload: [{
        title: 'Register',
        description: 'Tixte is not just an image host, it\'s like Google Drive. <br /> You can upload any type of file you want. And the purpose of using image hosting is just so you can save your screenshots for free with a nice looking embed in the cloud.',
        section: 'how',
        list: [{
            id: 1,
            text: 'Go to <a href="https://tixte.com/register" class="link">tixte.com/register</a>.'
        }, {
            id: 2,
            text: 'Enter a cool username, your email address, and a secure password.'
        }, {
            id: 3,
            text: 'If you want to use <a href="https://getsharex.com/" class="df-link">ShareX</a> or <a href="https://magiccap.me/" class="df-link">MagicCap</a> (Use Tixte Snap on macOS) to create screenshots go to the <a href="https://tixte.com/dashboard/configurations" class="df-link">configurations tab</a> to download the respective configs.'
        }, {
            id: 4,
            text: 'If you want to link your Tixte account with your Discord account, go to <a href="https://discord.com/channels/818940877262553141/818942351946022952" class="mention">#bot-commands</a> on our <a href="/go/discord" class="df-link">discord server</a> and run <a class="highlight">/link [upload_key]</a>.',
            subs: ['[<a class="df-link">How to get your UPLOAD_KEY</a>]']
        }]
    }]
};

export default class Homepage extends React.Component {

    render() {
        return (
            <Reads data={json} />
        );
    };
};
