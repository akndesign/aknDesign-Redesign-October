import React from "react";
import Image from "next/image";
import { urlFor } from "./sanityImageUrl";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";

export const PortableTextComponent: Partial<PortableTextReactComponents> = {
    types: {
        image: ({ value }: { value: any }) => (
            <Image
                src={urlFor(value).url()}
                alt={value.alt || "Image"}
                width={500}
                height={500}
            />
        ),
        richTextComponent: ({ value }: { value: any }) => (
            <div className="rich-text-component">
                {/* Render nested Portable Text content */}
                {value?.richText ? (
                    <PortableText value={value.richText} components={PortableTextComponent} />
                ) : (
                    <p>No content available</p>
                )}
            </div>
        ),
    },
    block: {
        normal: ({ children }: any) => {
            // Handle cases where children may be empty or contain only an empty string
            if (children?.length === 1 && children[0] === "") {
                return <br />;
            }
            return <h3 className="award-and-press__item-desc">{children}</h3>

        },
        h3: ({ children }: { children?: React.ReactNode }) => (
            <h3 className="award-and-press__item-desc">{children}</h3>
        ),
    },
};

export default PortableTextComponent;
