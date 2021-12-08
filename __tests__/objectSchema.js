import { objectSchema } from "../lib/objectSchema.js";

const userObject = {
    user: {
        name: "Steven",
        age: 25,
        isLoggedIn: true,
        favorites: ["books", "games", "food"],
        transactionIds: [1, 2, 3, 4, 5],
        id: BigInt("123456789012345678901234567890"),
    },
    isLoading: false,
    friends: [
        {
            name: "Alice",
            age: 23,
            favorites: ["books", "games", "food"],
            id: BigInt("123456789012345678901234567890"),
        },
        {
            name: "John",
            age: 27,
            favorites: ["books", "games", "food"],
            id: BigInt("123456789012345678901234567890"),
        },
    ],
    getUserInfo: () => {},
    otherInfo: new Map(),
};

const userSchema = objectSchema(userObject);

console.log(userSchema);
