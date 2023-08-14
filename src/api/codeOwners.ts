import fs from 'node:fs/promises'
import path from 'node:path'
import {readLocales} from '../util/readLocales'
import {runScript} from '../util/runScript'

const MAX_FILE_SIZE = 3e6 // 3 MB

const template = `
# By default, assign the studio developer experience team.
# Later matching rules will take precedence.
* @sanity-io/studio-dx

# Locale-specific owners:
`.trim()

export async function writeCodeOwners() {
  const locales = await readLocales()

  const owners: string[] = []
  for (const {id, maintainers} of locales) {
    const users = maintainers.map((user) => `@${user}`).join(' ')
    owners.push(`/locales/${id}/ ${users}`)
  }

  const content = `${template}\n${owners.join('\n')}\n`

  if (content.length > MAX_FILE_SIZE) {
    throw new Error('Code owners file too large! Please file an issue with the Sanity team.')
  }

  const codeOwnersPath = path.join(__dirname, '..', 'CODEOWNERS')
  await fs.writeFile(codeOwnersPath, content, {encoding: 'utf8'})
}

runScript(writeCodeOwners)
