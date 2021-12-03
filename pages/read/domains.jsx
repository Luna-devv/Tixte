import React from 'react';
import Reads from  '../../components/reads';

const json = {
    page: 'domains',
    payload: [{
        title: 'Tixte domains',
        description: 'Choose a domain from 26+ domain names and create a funny subdomain that suits you.',
        section: 'tixte',
        list: [{
            id: 1,
            text: 'Go to  the <a href="https://tixte.com/dashboard/domains" class="link">domains tab</a>.'
        }, {
            id: 2,
            text: 'Click on the \'Register +\' button on the top of your screen.'
        }, {
            id: 3,
            text: 'Click the \'Add a Subdomain\'.'
        }, {
            id: 4,
            text: 'Now be creative and choose a domain name to create your own, private subdomain.',
        }, {
            id: 5,
            text: 'Click the \'Register\' button and done 🎉',
        }]
    }, {
        title: 'Custom domains',
        description: 'Are you already bored by our domains or do you want to have a domain that suits you better?',
        section: 'custom',
        list: [{
            id: 1,
            text: 'Go to  the <a href="https://tixte.com/dashboard/domains" class="link">domains tab</a>.'
        }, {
            id: 2,
            text: 'Click on the \'Register +\' button on the top of your screen.'
        }, {
            id: 3,
            text: 'Click the \'Add a Custom Domain\'.'
        }, {
            id: 4,
            text: 'Now enter your domain, you can also use subdomains.',
            subs: ['Note that you cannot use nested subdomains like \'www.images.***\'.']
        }, {
            id: 5,
            text: 'After you\'ve entered your domain you need to add the DNS records displayed there. [<a href="https://cdn.xyna.space/ks40e9k8d9a.png" class="df-link">example</a>]',
            subs: ['Note that you should use <a href="https://www.cloudflare.com/" class="df-link">cloudflare</a>. Other DNS management websites maybe won\'t work at all.']
        }, {
            id: 6,
            text: 'Now click the \'Register\' button.',
            subs: ['Note that it can take up to 48 hours for your changes to be detected due to DNS caches. However, normally it shouldn\'t take more than 2-3 hours.']
        }, {
            id: 7,
            text: 'Now you should be read to go 🎉'
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