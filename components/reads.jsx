import React from 'react';
import Link from 'next/link';

import {
    DuplicateIcon,
    ExternalLinkIcon
} from '@heroicons/react/outline';

export default function Reads({ data }) {
    let link = 'https://github.com/Luna-devv/tixte/tree/main#readme'
    let num = 1;

    if (!data) return (<>No data given</>);
    if (!data.page) return (<>Page is not defined. <Link href={link}><a className='link'>{link}</a></Link></>);
    if (!data.payload[0]) return (<>Payload is not defined or is an empty array. <Link href={link}><a className='link'>{link}</a></Link></>);

    return (
        <>
            <div className='read'>
                {data.payload?.map(read => (
                    <section id={read?.section} className='readContainer'>
                        <a className='readTitle' href={'/read/' + data?.page + '#' + read?.section || read.title?.replace(` `, ``)?.toLowerCase()} style={{ cursor: 'pointer' }}> 
                        {read?.title} <DuplicateIcon className='copyIco ico' /> </a>
                        {read?.require?.length > 0 ? <requirements style={{ fontSize: 14, color: '#373737' }}> (requires {read.require.map(req => (<require style={{ color: '#464646' }}>{req}<dark style={{ color: '#373737' }}>{num < read?.require?.length ? num + 1 < read?.require?.length ? ', ' : ' and ' : ''}</dark> <count style={{display: 'none'}}>{num++}</count></require>))})</requirements> : <></>} <br />

                        {read?.description ? <><div className='readDescription'> <text dangerouslySetInnerHTML={{ __html: read?.description }}></text> </div> <br /></> : <></>}
                        <div className='readContent'>
                            {read?.list?.map(item => (
                                <div style={{ marginTop: 3 }}>
                                    <id style={{ color: '#ababab', marginRight: 1 }}>{item?.id}{isNaN(item?.id) ? '' : '.'}</id> <text dangerouslySetInnerHTML={{ __html: item?.text }}></text> <br />
                                    <div style={item?.subs ? { marginBottom: 4 } : {}}>
                                        {item?.subs?.map(sub => (
                                            <>
                                                  <text style={{ color: '#858585', fontSize: 16 }} dangerouslySetInnerHTML={{ __html: sub }}></text> <br />
                                            </>
                                        ))}
                                    </div>
                                </div>
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