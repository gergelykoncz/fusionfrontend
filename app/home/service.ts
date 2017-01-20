import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const url = 'http://192.168.110.79:8080/api/values';

@Injectable()
export class Service {
    private _httpService: Http;

    constructor(httpService: Http) {
        this._httpService = httpService;
    }

    sayHello(name :string) :string {
        return 'Hello' + name;
    }

    getAll() {
        return this._httpService.get(url)
            .map((res :Response) => res.json());
    }

    getById(id: number) {
        return this._httpService.get(`${url}/${id}`)
            .map((res: Response) => res.json());
    }
}