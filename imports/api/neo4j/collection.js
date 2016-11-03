export const Neo4j = new Neo4jDb({
    url: "http://localhost:7474/",
    auth: {
        username: "neo4j",
        password: "admin"
    },
    headers: {},
    proxy: null,
    agent: null });
