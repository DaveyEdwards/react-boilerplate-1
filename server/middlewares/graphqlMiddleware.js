const router = require('express').Router()
const graphqlHTTP = require('express-graphql')
const schema = require('../data/schema')

router.use('/', graphqlHTTP({
	schema,
	graphiql: true
}))

module.exports = router
