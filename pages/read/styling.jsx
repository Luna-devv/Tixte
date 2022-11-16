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
            text: 'Go to the <a href="https://tixte.com/dashboard/embed" class="link">Embed Editor tab</a>.'
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
            url: 'https://us-east-1.tixte.net/uploads/cdn.xyna.space/kt49xz3b09a.mp4',
            text: 'Watch video'
        }]
    }, {
        title: 'Custom CSS',
        require: ['a Tixte Turbo subscription'],
        description: 'Is the default upload page too boring for you? Do you want to spice it up a bit?',
        section: 'css',
        list: [{
            id: 1,
            text: 'Go to the <a href="https://tixte.com/dashboard/library" class="link">Page Design tab</a>.'
        }, {
            id: 3,
            text: 'Write whatever CSS you want to make your file page look like you want it to.',
            subs: [
                'Make sure that the CSS doesn\'t have any errors! You can use a site <a href="http://csslint.net/" class="df-link">like this</a> to check.',
                'If you already have a CSS file you want to use, you can add it using the import button.'
            ]
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
