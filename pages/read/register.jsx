import React from 'react';
import Reads from  '../../components/reads';

const json = {
    page: 'register',
    payload: [{
        title: 'Register',
        description: 'Tixte is not just an image host, it\'s like Google Drive. <br /> You can upload any type of file you want. And the purpose of using image hosting is just so you can save your screenshots for free with a nice looking embedding in the cloud.',
        section: 'how',
        list: [{
            id: 1,
            text: 'Go to <a href="https://tixte.com/register" class="link">tixte.com/register</a>.'
        }, {
            id: 2,
            text: 'Enter a cool username, your email address, a secure password and a <a href="#code" class="df-link">beta code</a>.'
        }, {
            id: 3,
            text: 'If you want to use <a href="https://getsharex.com/" class="df-link">ShareX</a> or <a href="https://magiccap.me/" class="df-link">MagicCap</a> to create screenshots go to the <a href="https://tixte.com/dashboard/configurations" class="df-link">configurations tab</a> to download the respective configs.'
        }, {
            id: 4,
            text: 'If you want to link your Tixte account with your Discord account, go to <a href="https://discord.com/channels/818940877262553141/818942351946022952" class="mention">#bot-commands</a> on our <a href="/go/discord" class="df-link">discord server</a> and run <a class="highlight">/link [upload_key]</a>.',
            subs: ['[<a class="df-link">How to get your UPLOAD_KEY</a>]']
        }]
    }, {
        title: 'Beta code',
        description: 'A beta code is required to join Tixte since we\'re still in closed beta but don\'t worry, there are multiple ways on how to get one.',
        section: 'code',
        list: [{
            id: '•',
            text: '<bold>Apply via the form</bold>',
            subs: ['Go to <a href="https://tixte.cc/beta" class="link">tixte.cc/beta</a> and enter your email address, you should receive an email when the developers start giving out codes.']
        }, {
            id: '•',
            text: '<bold>Boost our Discord server</bold>',
            subs: ['By boosting our <a href="/go/discord" class="df-link">Discord server</a>, our bot <a href="https://discord.com/users/825825288608415754" class="mention">@Tixte Manager</a> will send you a DM with a beta code, plus you get Tixte Turbo as long as you boost.', 'You you will be still able to use your account with the free plan even if you stop boosting our server.']
        }, {
            id: '•',
            text: '<bold>Enter a giveaway</bold>',
            subs: ['You can participate in a giveaway that gives you the opportunity to win a beta code.', 'If you want to be notified when a giveaway starts go to <a href="https://discord.com/channels/818940877262553141/820152109101350952" class="mention">#information</a> on our <a href="/go/discord" class="df-link">discord server</a> to configure the pings for you.']
        }, {
            id: '•',
            text: '<bold>Ask friendly in chat</bold>',
            subs: ['When you have joined our <a href="/go/discord" class="df-link">discord server</a>, you can nicly ask in the chat if someone has a beta code left.', 'If you want you also can ping <a href="https://discord.com/users/821472922140803112" class="mention">@Luna🎄</a> once.']
        }],
    }]
};

export default class Homepage extends React.Component {

    render() {
        return (
            <Reads data={json} />
        );
    };
};
