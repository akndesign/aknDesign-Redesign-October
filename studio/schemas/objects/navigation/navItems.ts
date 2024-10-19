//File name: navItem.ts
//File location: schemas/objects
import { GrNavigate } from "react-icons/gr";

export default {
    name: 'navigationItem',
    title: 'Navigation Item',
    type: 'object',
    icon: GrNavigate,
    fields: [
        {
            name: "navigationItemTitle",
            type: "string",
            title: "Navigation Item Title"
        },
        {
            name: "navigationItemIcon",
            type: "imageComponent",
            title: "Navigation Item URL"
        },
        {
            name: "navigationItemUrl",
            type: "linkComponent",
            title: "Navigation Item URL"
        }
    ]
}