import PiConfig from 'pyllar/config';
import PiModel from 'pyllar/model';

export default class QueueModel extends PiModel {
    init(){
        super.init(PiConfig.get('endpoint.queue'));
    }

    initWithJson(json){
        super.initWithJson(json);

        return this;
    }

    actions(){
        return {
            'get': 'GET:/',
        }
    }
}