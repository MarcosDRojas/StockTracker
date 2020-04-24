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
        // Build URL
        const url = buildUrl('https://www.alphavantage.co/', {
            path: 'query',
            queryParams: {
                function: 'TIME_SERIES_INTRADAY',
                symbol: 'SWTSX',
                interval: '5min',
                apikey: '', // TOFO: figure out how to have a api key here without pushing to github.
            }
        });

        // Make axios call and return data.
        axios.get(url).then(
            res => {
                this.data = res.data;
                return response.send(this.data);
            }
        ).catch(err => {
            console.log(err)
            return response.status(404).send(err);
        });
    }

}

export default GetController;