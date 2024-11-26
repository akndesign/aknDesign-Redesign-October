import siteSettings from '../schemas/settings/siteSettings'
import navItems from '../schemas/objects/navigation/navItems'
import link from '../schemas/objects/link'
import image from '../schemas/objects/image'
import text from '../schemas/objects/text'
import contentComponent from '../schemas/objects/content'
import richText from '../schemas/objects/richText'

import works from '../schemas/documents/works'
import homepage from '../schemas/documents/homepage'
import awards from '../schemas/documents/awards'

const Pages = [works, homepage, awards]

const Settings = [siteSettings, link, image, navItems, text, richText, contentComponent]

export const schemaTypes = [...Settings, ...Pages]
