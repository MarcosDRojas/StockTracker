import * as express from 'express';
const buildUrl = require('build-url');
const axios = require('axios').default;

class GetController {
    public path = '/api';
    public router = express.Router();
    public data = {};

    constructor() {
        this.initGetRoutes();
    }

    private initGetRoutes() {
        this.router.get(this.path, this.getStockValues);
    }

    getStockValues = (request: express.Request, response: express.Response) => {
        //TODO: Figure out how to hide api key.
        buildUrl('https://www.alphavantage.co/', {
            path: 'query',
            queryParams: {
                function: 'TIME_SERIES_INTRADAY',
                symbol: 'AAPL',
                interval: '5min',
                apikey: '',
            }
        });
        response.send('Hello World');
    }

}

export default GetController;