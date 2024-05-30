/**
 * Unit tests for the action's main functionality, src/main.ts
 *
 * These should be run as if the action was called from a workflow.
 * Specifically, the inputs listed in `action.yml` should be set as environment
 * variables following the pattern `INPUT_<INPUT_NAME>`.
 */

import * as core from '@actions/core'
import * as main from '../src/main'

jest.mock('@actions/core')

describe('action', () => {
  const fakeSetOutput = core.setOutput as jest.MockedFunction<typeof core.setOutput>

  test('it should set the release-url output parameter', async () => {
    await main.run()

    expect(fakeSetOutput).toHaveBeenCalledWith('release-url', expect.anything())
  })
})
