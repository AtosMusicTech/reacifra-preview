import PiConfig from 'pyllar/config';
import PiModel from 'pyllar/model';

export default class CifraModel extends PiModel {
    init(){
        super.init(PiConfig.get('endpoint.cifra'));
    }

    initWithJson(json){
        super.initWithJson(json);

        return this;
    }

    isEqual(cifra){
        return this.id == cifra.id;
    }

    actions(){
        return {
            'insert': 'POST:/',
            'save': 'PUT:/',
            'get': 'GET:/:id',
            'all': 'GET:/',
            'import': 'GET:/import?url=:url'
        }
    }
}