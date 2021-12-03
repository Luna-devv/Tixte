import React from 'react';
import Reads from  '../../components/reads';

const json = {
    page: 'styling',
    payload: [{
        title: 'File embedding',
        description: 'Want to have a nice looking embed for your files?',
        section: 'embeds',
        list: [{
            id: 1,
            text: 'Go to the <a href="https://tixte.com/dashboard/configurations" class="link">configurations tab</a>.'
        }, {
            id: 2,
            text: 'Scroll down to the \'embed\' section.'
        }, {
            id: 3,
            text: 'Be creative and write everything you want in it.',
            subs: ['Note that you must add at least a Title or Author Name for the embed to appear.']
        }, {
            id: 4,
            text: 'Click \'Save Changes\' and done.',
            subs: ['Note that any files cached by Discord won\'t show the new embed for a while.']
        }],
        buttons: [{
            url: 'https://cdn.xyna.space/kt49xz3b09a.mp4',
            text: 'Watch video'
        }]
    }, {
        title: 'Custom CSS',
        require: ['Turbo'],
        description: 'Is the grey upload page too boring for you?',
        section: 'css',
        list: [{
            id: 1,
            text: 'Go to the <a href="https://tixte.com/dashboard/configurations" class="link">configurations tab</a>.'
        }, {
            id: 2,
            text: 'Scroll down to the \'Custom CSS\' section.'
        }, {
            id: 3,
            text: 'Be creative and design everything with the magic of CSS.',
            subs: ['Note that you check if you wrote valid CSS.']
        }, {
            id: 4,
            text: 'Click \'Save Changes\' and done.',
            subs: ['Note that any files cached by your DNS server won\'t show the new styling for a while.']
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