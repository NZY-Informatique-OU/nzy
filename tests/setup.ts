import { deserialize, serialize } from "node:v8"

if (!globalThis.structuredClone) {
    Object.assign(globalThis, {
        structuredClone: <T>(value: T): T => deserialize(serialize(value)),
    })
}
