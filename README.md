# Eventing
Eventing class , which can be used to register, trigger and remove events.
It pushes the logs to MongoDb Atlas DB and to local file `app.logs`. For pushing logs to cloud DB you have to create 
MONGO_URL variable inside .env file.
something like :`MONGO_URL=mongodb+srv://{username}:{password}@cluster0.dommqkr.mongodb.net/{Collection_Name}?retryWrites=true&w=majority` 
