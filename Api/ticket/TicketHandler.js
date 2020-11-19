const connectToDatabase = require('../db');
const Ticket = require('./Ticket');

/**
 * Functions
 */

module.exports.create = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Ticket.create(JSON.parse(event.body))
        .then(ticket => callback(null, {
          statusCode: 200,
          body: JSON.stringify(ticket)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the ticket.'
        }));
    });
};

module.exports.getOne = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Ticket.findById(event.pathParameters.id)
        .then(ticket => callback(null, {
          statusCode: 200,
          body: JSON.stringify(ticket)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the ticket.'
        }));
    });
};

module.exports.getAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Ticket.find()
        .then(ticket => callback(null, {
          statusCode: 200,
          body: JSON.stringify(ticket)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the ticket.'
        }))
    });
};

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Ticket.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
        .then(ticket => callback(null, {
          statusCode: 200,
          body: JSON.stringify(ticket)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the ticket.'
        }));
    });
};

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Ticket.findByIdAndRemove(event.pathParameters.id)
        .then(ticket => callback(null, {
          statusCode: 200,
          body: JSON.stringify({ message: 'Removed ticket with id: ' + note._id, note: note })
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the ticket.'
        }));
    });
};

  
/**
 * Helpers
 */

// function getTables() {
//   return User.aggregate([
// {$skip : 5},
// {$limit :20},  
// {$sort: {
//   name: 1,
//   email: 1
//         }
// },
// {$project: {
//   name: 1,
//   email: 1,
//   username: 1
//            }
// },
// {}
//     // {$match : {"telegramPIN": "Jnzoeb4"}}
// ])
// }