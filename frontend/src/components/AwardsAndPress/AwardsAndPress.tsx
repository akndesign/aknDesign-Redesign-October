'use client'
// import { data } from './AwardsAndPress.copy';
import './AwardAndPress.scss';
// import { Marquee } from '../Marquee/Marquee';
import Marquee from "react-fast-marquee";
import '../../components/Marquee/Marquee.scss';
import { useEffect, useState } from 'react';
import { client } from '@/libs/sanity/sanity';
import Link from 'next/link';
import { PortableTextComponent } from '@/libs/sanity/utils';
import { PortableText } from "@portabletext/react";

const AwardsAndPress = () => {

    interface AwardProps {
        /** Unique identifier for the award document */
        _id: string;

        /** Document type */
        _type: 'awards';

        /** Custom order rank for sorting */
        orderRank: string;

        /** Title of the award */
        title: string;

        /** Detailed description of the award in rich text format */
        description: any; // Use a more specific type if the rich text structure is defined.

        /** URL link associated with the award */
        link: string;
    }

    const [data, setData] = useState<AwardProps[] | null>(null);
    useEffect(() => {

        const categoriesQuery = ` *[_type == "awards"]|order(orderRank)`;
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
            <Marquee className="marquee" speed={100}>
                <div className="marquee-inner">
                    {
                        Array.from({ length: 30 }).map((_, i) => (
                            <span className='title' key={i}>
                                <span>PRESS & AWARDS •</span>
                            </span>
                        ))
                    }
                </div>
            </Marquee>
            <div className="award-and-press">

                {
                    data?.map((item, index) => {
                        return (
                            <div key={index} className="award-and-press__item">
                                <h2 className="award-and-press__item-title">{item.title}</h2>
                                <div className="award-and-press__info">
                                    <PortableText
                                        value={item.description.richText}
                                        components={PortableTextComponent}
                                    />
                                    <Link href={item.link} passHref>
                                        <i className='icon-akn icon-diagonal-arrow h3'></i>
                                    </Link>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default AwardsAndPress;