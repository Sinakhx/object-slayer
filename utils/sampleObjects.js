export const userObject = {
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

export const obj1 = {
    a: 2,
    b: 3,
    c: {
        d: [
            12,
            14,
            {
                e: 15,
                c: [
                    16,
                    17,
                    [
                        18,
                        19,
                        {
                            f: 14,
                        },
                        {
                            g: 18,
                        },
                    ],
                    20,
                ],
                h: 19,
            },
            21,
        ],
        i: 22,
    },
    j: 18,
    k: [
        19,
        21,
        22,
        [
            {
                c: 18,
            },
        ],
    ],
};
