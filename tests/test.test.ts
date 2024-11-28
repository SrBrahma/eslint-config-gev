import { test } from "bun:test"
import path from "node:path"
import { $ } from "bun"

const flavors = ["index", "ts", "js", "react", "next", "react-native"]

$.cwd(path.resolve(__dirname))

test("can run eslint", async () => {
  const execs = flavors.map((flavor) =>
    $`bunx eslint --config ../${flavor}.js test.test.ts`.catch(
      (err: unknown) => {
        throw new Error(`error on flavor ${flavor}: ${err}`)
      },
    ),
  )

  await Promise.all(execs)
})
