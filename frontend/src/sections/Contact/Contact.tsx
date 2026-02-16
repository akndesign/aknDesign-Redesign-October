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
                                    <span>Contact <i>now</i> </span>
                                    <span>
                                        <Image src="/images/icon/paperplane.svg" alt="paperplane" width={38}
  height={48} className='icon' />
                                    </span>
                                    <span>• alexander@akndesign.com • </span>
                                </span>
                            ))
                        }</div>
                </Marquee>

                <div className="contact-wrapper">
                    <p className='h2'>Turning ideas into things that <i>last</i></p>
                    <p className='h3'>With over a decade of experience, I’ve shipped work sold in national retailers, used by millions of people, and covered by major publications.</p>
                    <p className='h5'>Selected clients include Christopher Wylie (Cambridge Analytica), Citymapper, and ustwo. Work featured in <i>The Globe and Mail, The Telegraph, The Times, Wallpaper*,</i> and <i>BuzzFeed.</i></p>

                    <Collapse>

                        <Collapse.Content>
                            <p className='h5'>I was born and raised in beautiful Victoria, British Columbia, Canada, and have lived and worked in <i> London, </i>UK and <i>  Boston</i>, before settling in Vancouver. I’m drawn to projects that require deep problem solving — work that requires structure, taste, and follow-through. I’ve led projects from early concept through production and launch, often working at the intersection of design, engineering, and commerce.
</p>
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