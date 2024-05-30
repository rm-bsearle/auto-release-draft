import * as core from '@actions/core'
import * as github from '@actions/github'

export function getCreatedTag(): string | null {
    if ( github.context.eventname != 'create' ) {
        core.info(`The event name was ${github.context.eventName}`)
        return null
    }

    if ( github.context.payload.ref_type != 'tag' ) {
        core.info(`The ref type was ${github.context.payload.ref_type}`)
        return null
    }

    return github.context.payload.ref
}