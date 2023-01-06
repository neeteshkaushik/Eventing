# Eventing
Eventing class , which can be used to register, trigger and remove events.
It pushes the logs to MongoDb Atlas DB and to local file `app.logs`. For pushing logs to cloud DB you have to create 
MONGO_URL variable inside .env file.
something like :`MONGO_URL=mongodb+srv://{username}:{password}@cluster0.dommqkr.mongodb.net/{Collection_Name}?retryWrites=true&w=majority` 

Steps to run this project:
1. Clone this repo in your local PC.
2. create a .env file and provide MONGO_URL varable as mentioned above.
3. Run `npm install` in terminal, this will install all the dependencies.
4. Run `node app.js`.


I have provided some events for demo. You can register your own events and play with it.
