import React from 'react';
import Reads from  '../../components/reads';

const json = {
    page: 'styling',
    payload: [{
        title: 'SXCU Files',
        description: 'Want to have your Tixte Domain as a Default Uploader?',
        section: 'how',
        list: [{
            id: 1,
            text: 'Go to the <a href="https://getsharex.com" class="link">ShareX Website</a>.'
        }, {
            id: 2,
            text: 'Download and open the installer.'
        }, {
            id: 3,
            text: 'Go through the Installer.'
        }, {
            id: 4,
            text: 'Open the Intigrations Tab on the Tixte Website and download the Standard Configuration for your desired Domain.',
            subs: ['Note that you will have to register a Domain and <a href="/read/domains" class="link">set it up with Tixte or set up a Subdomain</a>']
        },
    { 
        id: 5,
        text: 'Open the Configuaration (the Downloaded File) and confirm the Confirmation Box made by ShareX.'
    },
{
    id: 6,
    text: 'Make a Screenshot and Confirm the next Confirmation Box made by ShareX to test everything.'
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
