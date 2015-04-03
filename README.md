# angular-jointjs-graph-demo

This is a demo application for the [angular-jointjs-graph](http://github.com/elsix/angular-jointjs-graph)
framework, built with [Sails](http://sailsjs.org).

To launch the application:

  1. Clone the repo:

  `git clone git@github.com:elsix/angular-jointjs-graph-demo.git`

  2. Navigate to the project root and install all dependencies:

  ```
  npm install
  bower install
  ```

  3. If you have `mongod` running on port 27017, execute `sails lift`. This will
  launch the application at `localhost:1337`.
  4. If you wish to use another DB server or change port settings, edit `config/connections.js`,
  then change the connection name in `config/env/development.js`. If you don't have any DB
  server installed or don't want to use one, you can use the `localDiskDb` database adapter
  provided with Sails. Having a database connection configured, run `sails lift` to launch the
  application.
