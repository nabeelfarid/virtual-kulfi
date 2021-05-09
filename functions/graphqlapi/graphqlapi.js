const { ApolloServer, gql } = require("apollo-server-lambda");
const faunadb = require("faunadb");
const shortid = require("shortid");

const q = faunadb.query;
var fdbClient = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });

const typeDefs = gql`
  type Query {
    getAllKulfis: [Kulfi!]!
    getKulfiByShortId(shortId: String!): Kulfi
  }

  type Mutation {
    createKulfi(
      colorTop: String!
      colorMiddle: String!
      colorBottom: String!
      to: String!
      from: String!
      message: String!
    ): Kulfi
  }

  type Kulfi {
    id: ID!
    colorTop: String!
    colorMiddle: String!
    colorBottom: String!
    to: String!
    from: String!
    message: String!
    shortId: String!
  }
`;

const resolvers = {
  Query: {
    getAllKulfis: async (_parent, args) => {
      const results = await fdbClient.query(
        q.Map(
          q.Paginate(q.Match(q.Index("kulfis_all"))),
          q.Lambda("kulfi", q.Get(q.Var("kulfi")))
        )
      );
      console.log("allkulfis", results);

      return results.data.map((kulfi) => ({
        ...kulfi.data,
        id: kulfi.ref.id,
      }));
    },
    getKulfiByShortId: async (_parent, args) => {
      const result = await fdbClient.query(
        q.Get(q.Match(q.Index("kulfis_by_shortId"), args.shortId))
      );
      console.log(result);

      return {
        ...result.data,
        id: result.ref.id,
      };
    },
  },
  Mutation: {
    createKulfi: async (_parent, args) => {
      const result = await fdbClient.query(
        q.Create(q.Collection("Kulfis"), {
          data: {
            colorTop: args.colorTop,
            colorMiddle: args.colorMiddle,
            colorBottom: args.colorBottom,
            to: args.to,
            from: args.from,
            message: args.message,
            shortId: shortid.generate(),
          },
        })
      );
      console.log("Craete kulfi", result);
      return {
        ...result.data,
        id: result.ref.id,
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = server.createHandler();

module.exports = { handler };
