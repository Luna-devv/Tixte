import React from 'react';
import { useState, useEffect } from 'react';

import {
    HomeIcon,
    CakeIcon,
    CodeIcon,
    HeartIcon,
    LockClosedIcon,
    NewspaperIcon,
    LinkIcon
} from '@heroicons/react/outline'

const cards = [{
    name: 'discord-botlist.eu',
    icon: 'https://cdn.discord-botlist.eu/pictures/logo.png',
    description: 'We give you the ailability to apply and give your bot a page on our site.',
    url: 'https://discord-botlist.eu'
}, {
    name: 'Tixte',
    icon: 'https://tixte.com/static/media/logo_mark.d3b45ae2.png',
    description: 'The fast, free and easy way to upload and store your files in the cloud.',
    url: 'https://discord.gg/vWcEAX5G4B'
}, {
    name: 'Dasu',
    icon: 'https://dasu.gifts/profile.png',
    description: 'Utilize powerful rules and control your giveaways with no limitations.',
    url: 'https://dasu.gifts'
}];

export default class Homepage extends React.Component {

    render() {
        return (
            <>

            </>
        );
    };
};

async function getData() {
    const data = await fetch(`https://api.lanyard.rest/v1/users/821472922140803112`);
    return data;
};