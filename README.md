Note: For express-react  starter boiler plate used  https://github.com/aautio/react-express-postgres-heroku

To start the app 
npm run start:dev

Used heroku-postgresql for database.
.env files attached in the project itself.

created apis as:

1. /api/users to add users into database
2. /api/relations to add relations into database
3. /api/connections to add connection between two users
4. /api/degree to show degree of connection between startUser and endUser

For now, one can add data into database using postgrator package.
