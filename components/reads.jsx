import React from 'react';

import {
    DuplicateIcon,
    ExternalLinkIcon
} from '@heroicons/react/outline';

export default function Reads({ data }) {

    return (
        <>
            <div className='read'>
                {data?.map(read => (
                    <section id={read?.section} className='readContainer'>
                        <a className='readTitle' href={'/read/register#' + read?.section} style={{ cursor: 'pointer' }}> {read?.title} <DuplicateIcon className='copyIco ico' /> </a> <br />
                        <div className='readContent'>
                            {read?.list?.map(item => (
                                <>
                                    <id style={{ color: '#ababab' }}>{item?.id}{isNaN(item?.id) ? '' : '.'}</id> <text dangerouslySetInnerHTML={{ __html: item?.text }}></text> <br />
                                    <div style={item?.subs ? { marginBottom: 10 } : {}}>
                                        {item?.subs?.map(sub => (
                                            <>
                                                <text dangerouslySetInnerHTML={{ __html: sub }}></text> <br />
                                            </>
                                        ))}
                                    </div>
                                </>
                            ))}
                        </div>
                        <br />
                        {read?.buttons?.map(button => (
                            <>
                                <button className='button' style={button?.url && button?.text ? { marginLeft: 14 } : { visibility: 'hidden', position: 'absolute' }} onClick={() => window.open(button?.url)}>
                                    {button?.text} <ExternalLinkIcon className='ico' style={{ top: 3.2, left: 0.1 }} />
                                </button>
                            </>
                        ))}
                    </section>
                ))}
            </div>
        </>
    );
};