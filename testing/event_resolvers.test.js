const { gql } = require("apollo-server")
const server = require("../src/server")
describe('Event', () => {
    beforeAll(() => {
        jest.setTimeout(60000);
    })
    test('getAll query', async () => {
        const query = gql`
        query getAllEvents {
            getAll {
              url
              name
              id
            }
          }
        `
        const body = await server.executeOperation({ query })
        expect(body.data.getAll).toBeDefined()
        expect(body.data.getAll).toHaveLength(2)
    })
})


