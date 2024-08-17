import PiComponent from 'pyllar/component';
import PiConfig from 'pyllar/config';

import CifraView from '../cifra/CifraView';
import CifraAnime from '../cifra/CifraAnime';
import CifraStream from '../cifra/CifraStream';

import TransporteModel from '../transporte/TransporteModel';

import "./HomePage.css";

export default class HomePage extends PiComponent {
    view = /*html*/`<div class="container homepage">
        <div class="content">
            <div id="view"></div>
        </div>
    </div>`;

    instances() {
        this.cifraStream = new CifraStream(PiConfig.get('cifraStream'));
    }

    viewDidLoad() {
        this.cifraStream.connect();

        // this._loadTransporte();
        this._loadEvents();
    }

    setView(view) {
        view.render(this.$element.find('#view'));
    }

    _loadTransporte() {
        (new TransporteModel()).get().then((transporte) => {
            if (transporte == null) {
                this.setView(new CifraAnime());
                return;
            }

            if (transporte.cifraId == 0) {
                this.setView(new CifraAnime());
                return;
            }

            const cifraView = new CifraView();
            this.setView(cifraView);
            cifraView.setStream(this.cifraStream);
            cifraView.loadCifra(transporte.cifraId, () => {
                cifraView.setMarcadorPosicao(transporte.posicao);
                cifraView.setMarcadorPosicao(0);
            });
        });
    }

    _loadEvents() {
        this.cifraStream.onNewCifra(cifra => {
            const cifraView = new CifraView();
            this.setView(cifraView);
            cifraView.setStream(this.cifraStream);
            cifraView.setCifra(cifra);
        });
    }
}