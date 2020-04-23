import * as express from 'express';

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: [], port) {
        this.app = express();
        this.port = port;
        // Start the services that are needed.
        this.initControllers(controllers);
    }

    private initControllers(controllers) {
        controllers.forEach(element => {
            this.app.use('/', element.router)
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Api application is listening on port: ${this.port}`);
        });
    }
}

export default App;