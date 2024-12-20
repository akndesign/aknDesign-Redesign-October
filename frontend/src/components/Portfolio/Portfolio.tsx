import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/libs/sanity/sanityImageUrl';
import { PortableTextComponent } from '@/libs/sanity/utils';
import { PortableText } from '@portabletext/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { parseAssetId, buildFileUrl } from "@sanity/asset-utils";
import './Portfolio.scss';

interface PortfolioProps {
    data: any;
}

export const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
    // Ensure images is always an array
    const images = Array.isArray(data.banner?.images) ? data.banner?.images : [data.banner?.images];
    const type = data.banner?.mediaType;
    let urlVideo = '';
    if (data.banner.video && data.banner.mediaType === "video") {
        const parts = parseAssetId(data.banner.video.asset._ref);
        urlVideo = buildFileUrl(parts, {
            projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
            dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        });
    }

    return (
        <div className={`portfolio ${data.background}`}>
            <div className="portfolio-content">
                <p className='h1'>{data.title}</p>
                <p className='h2'>{data.subtitle}</p>
                <div className='h3'>
                    <PortableText
                        value={data.description.richText}
                        components={PortableTextComponent}
                    />
                </div>
                <div className="quote">
                    <div className='h4'>
                        {
                            data.quote && <PortableText
                                value={data.quote.richText}
                                components={PortableTextComponent}
                            />
                        }
                    </div>
                    {
                        data.quoteAuthor && <p className='h4'>- {data.quoteAuthor}</p>
                    }
                </div>
            </div>
            <div className="portfolio-image">
                {/* {images.length > 1 ? (
                    <Swiper
                        // navigation
                        pagination={{ type: "bullets", clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop={true}
                        modules={[Autoplay, Navigation, Pagination]}
                        className='h-full'
                    >
                        {images.map((image: any, index: number) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={urlFor(image).url() as string}
                                    alt={data.title}
                                    width={957}
                                    height={592}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <Image
                        src={urlFor(images[0]).url() as string}
                        alt={data.title}
                        width={957}
                        height={592}
                    />
                )}

                {
                    video && (
                        <video controls>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )
                } */}

                {(() => {
                    switch (type) {
                        case 'video':
                            return (
                                <>
                                    <video autoPlay muted loop>
                                        <source src={urlVideo} />
                                        Your browser does not support the video tag.
                                    </video>
                                    {/* <div>
                                        {video}
                                    </div> */}
                                </>
                            );
                        case 'image':
                            return (
                                images.length > 1 ? (
                                    <Swiper
                                        // navigation
                                        pagination={{ type: "bullets", clickable: true }}
                                        autoplay={{ delay: 3000 }}
                                        loop={true}
                                        modules={[Autoplay, Navigation, Pagination]}
                                        className='h-full w-full'
                                    >
                                        {images.map((image: any, index: number) => (
                                            <SwiperSlide key={index}>
                                                {/* <p className='h-full w-full bg-red-200'>ASU</p> */}
                                                <Image
                                                    src={urlFor(image).url() as string}
                                                    alt={data.title}
                                                    width={957}
                                                    height={592}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                ) : (
                                    <Image
                                        src={urlFor(images[0]).url() as string}
                                        alt={data.title}
                                        width={957}
                                        height={592}
                                    />
                                )
                            );
                        default:
                            return null;
                    }
                })()}
            </div>
        </div>
    );
}