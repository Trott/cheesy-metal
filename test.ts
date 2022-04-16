import cheese from './index.js'
import assert from 'node:assert'
import childProcess from 'node:child_process'

// returns a random name
assert.ok(cheese().length > 0)

// returns a two-part name
assert.notStrictEqual(cheese().indexOf(' '), -1)

// returns a different name each call
{
  const names = [cheese(), cheese(), cheese(), cheese(), cheese(), cheese()]
  const unique = names.filter((val, idx, arr) => arr.indexOf(val) === idx)
  assert.ok(unique.length > 3)
}

// CLI returns something
{
  const name = childProcess.spawnSync('./cli.js')
  assert.ok(name.stdout.toString().length > 0)
  assert.ok(name.stdout.toString().includes(' '))
  assert.strictEqual(name.status, 0)
  assert.strictEqual(name.stderr.toString(), '')
}
