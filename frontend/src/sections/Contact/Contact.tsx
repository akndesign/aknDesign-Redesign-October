
// import { Marquee } from '@/components/Marquee/Marquee';
import Marquee from "react-fast-marquee";
import React, { useEffect, useState } from 'react';
import './Contact.scss';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import Collapse from '@/components/Collapse/Collapse';
import Image from 'next/image';
import '../../components/Marquee/Marquee.scss';
import { client } from "@/libs/sanity/sanity";

const Contact: React.FC = () => {

    interface PortfolioItem {
        _id: string;
        title: string;
        // Add other relevant fields based on your Sanity schema
    }


    const [data, setData] = useState<PortfolioItem[] | null>(null);
    useEffect(() => {

        const categoriesQuery = ` *[_type == "works"]|order(orderRank)`;
        const fetchData = async () => {
            try {
                const response = await client.fetch(categoriesQuery);
                setData(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <section className="contact" id="contact" data-section="contact">
                <Marquee className="marquee" speed={100}>
                    <div className="marquee-inner">
                        {
                            Array.from({ length: 20 }).map((_, i) => (
                                <span className='title' key={`contact-${i}`}>
                                    <span>CONTACT NOW  </span>
                                    <span>
                                        <Image src="/images/icon/paperplane.svg" alt="paperplane" width={72} height={87} className='icon' />
                                    </span>
                                    <span>ALEXANDER@AKNDESIGN.COM • </span>
                                </span>
                            ))
                        }</div>
                </Marquee>

                <div className="contact-wrapper">
                    <p className='h2'> My client-based work has received the attention of <Link href={'https://www.buzzfeednews.com/article/ryanmac/christopher-wylie-cambridge-analytica-scandal'} className='link'><span><Button variant='default' split={true}> Buzzfeed <i className='icon-akn icon-buzzfeed'></i></Button></span></Link>, <Link href={'https://www.theglobeandmail.com/politics/article-business-plan-hatched-by-christopher-wylie-sheds-light-on-whistle/'} className='link'><span><Button variant='default' split={true}>the Globe and Mail <i className='icon-akn icon-maple-leave'></i></Button></span></Link>,
                        and Wallpaper* Magazine. </p>
                    <p className='h3'>My freelance clients include Christopher Wylie
                        (Cambridge Analytica), Citymapper, and UsTwo.</p>


                    <Collapse>

                        <Collapse.Content>
                            <p className='h3'>I&apos;ve just completed a 6 month intensive coding bootcamp with General Assembly (November 2021, wrapping up May 28th, 2022). I&apos;m proficient in React, Node.Js, ExpressJS, MongoDB, SQL (Postgres), Python, and Django. Whilst Ruby isn&apos;t on my list, I&apos;m personally quite interested in further development.</p>
                        </Collapse.Content>
                        <Collapse.Button>   <Button variant="secondary" icon="arrow-right" split={true} className="mt-5">
                            Read More
                        </Button></Collapse.Button>
                    </Collapse>
                </div>

            </section>
        </>
    )
}

export default Contact;