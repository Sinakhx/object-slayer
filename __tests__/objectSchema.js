import { objectSchema } from "../lib/objectSchema.js";
import { userObject } from "../utils/sampleObjects.js";

const userSchema = objectSchema(userObject);

console.log(userSchema);
