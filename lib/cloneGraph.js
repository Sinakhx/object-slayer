const dfs = (node, nodeMap) => {
    const clone = { val: node.val, neighbours: [] };
    nodeMap[node.val] = clone;
    for (const neighbour of node.neighbours) {
        if (nodeMap[neighbour.val] == null) {
            dfs(neighbour, nodeMap);
        }
        clone.neighbours.push(nodeMap[neighbour.val]);
    }
    return clone;
};

export const cloneGraph = (node = {}) => {
    if (!node || !Object.keys(node).length) throw new TypeError("invalid node");
    const nodeMap = {};
    return dfs(node, nodeMap);
};

// example
const nodes = [1,2,3,4,5,6,7].map(val => ({ val, neighbours: [] }));
const node = (n) => ({ 
    addNeighbours(...neighbours){
        neighbours.forEach(num => {
            nodes[n - 1].neighbours.push(nodes[num - 1]);
        });
    }
});
// define graph:
node(1).addNeighbours(2, 3, 4);
node(2).addNeighbours(5, 3);
node(4).addNeighbours(6);
node(6).addNeighbours(5, 7);
node(7).addNeighbours(5);
// console.log(JSON.stringify(nodes, null, 2));

const cloned = cloneGraph(nodes[0]);
console.log(JSON.stringify(cloned, null, 2));
console.log(nodes[0] === cloned);
console.log(nodes[0].neighbours[0].neighbours[0] === cloned.neighbours[0].neighbours[0]);