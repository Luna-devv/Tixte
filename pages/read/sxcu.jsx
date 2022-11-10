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
            text: 'Download and open the Installer.'
        }, {
            id: 3,
            text: 'Go through the Installer.'
        }, {
            id: 4,
            text: 'Open the <a href="https://tixte.com/dashboard/integrations" class="link">Intigrations Tab</a> on the Tixte Website and download the Standard Configuration for your desired Domain.',
            subs: ['Note that you will have to register a Domain and <a href="/read/domains" class="link">set it up with Tixte and/or set up a Subdomain</a> if not already done']
        },
    { 
        id: 5,
        text: 'Open the downloaded configuration file and confirm the pop-up from ShareX.'
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
