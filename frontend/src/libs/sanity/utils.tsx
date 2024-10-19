import React from "react"
import Image from "next/image"
import { urlFor } from "./sanityImageUrl"

export const PortableTextComponent = {
    types: {
        image: ({ value }: { value: any }) => (
            <Image src={urlFor(value).url()} alt={value.alt} width={500} height={500} />
        ),
    },
    block: {
        // normal: ({ children }: any) => (
        //     <p className="w-full text-pretty" data-text-animation>{children}</p>
        // ),

        normal: ({ children }: any) => {
            if (children.length === 1 && children[0] === '') {
                return <br />
            }
            return <p>{children}</p>
        },

    },
}