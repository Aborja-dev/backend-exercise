const { ApolloServer, gql } = require('apollo-server')
const events = require('../mocks/Events.mock.js')
const { v2: uuid } = require('uuid')
const Event = require('../models/Event')
const typeDefs = gql`
    type Event {
        id: ID,
        name: String,
        url:  String
    }
    type Query{
        getAll:  [Event]
    }
    type Mutation{
        createEvent(name: String, url: String): Event
    }
 `
const resolvers = {
    Query: {
        getAll: async () => {
            const events = await Event.find({})
            return events
        }
    },
    Mutation: {
        createEvent: async (parent, args) => {
            const newEvent =  new Event(args)
            const savedEvent = await newEvent.save()
            return savedEvent
            
        }
    }
}

const server = new ApolloServer({typeDefs, resolvers})
module.exports = server

