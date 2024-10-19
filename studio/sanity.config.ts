import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {myStructure, myDeskToolStructure} from './deskStucture'

export default defineConfig({
  name: 'default',
  title: 'aknDesign (Design Portfolio)',

  projectId: 'beiahbyh',
  dataset: 'production',

  plugins: [
    visionTool(),
    structureTool({
      structure: myStructure,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
