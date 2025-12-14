const params = new URLSearchParams(self.location.search)
const scriptName = params.get("script") || "./kirkify.js"

try {
  const kirkifyModule = await import(scriptName)
  const wasmName = scriptName.replace(".js", "_bg.wasm")

  await kirkifyModule.default(wasmName)
} catch (e) {
  console.error("worker failed to initialize:", e)
  throw e
}
