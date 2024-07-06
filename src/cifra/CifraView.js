import PiComponent from 'pyllar/component';

import CifraModel from './CifraModel';
import Marcador from '../marcador/Marcador';
import NotesCollection from '../note/NoteCollection';

import "./CifraView.css";

export default class CifraView extends PiComponent {
    view = /*html*/`<div :class="cifra-view {@_mostrarAcordes ?  '' : 'no-chords'}">
        <div class="titulo">
            {@_titulo}
        </div>

        <div class="options">
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="mostrarAcordes" @change="_saveMostrarAcordes($value)" :checked="{@_mostrarAcordes}">
                <label class="form-check-label" for="mostrarAcordes">Mostrar Acordes</label>
            </div>

            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="barraRolagem" @change="_saveRolagemAutomatica($value)" :checked="{@_rolagemAutomatica}">
                <label class="form-check-label" for="barraRolagem">Barra de Rolagem Automática</label>
            </div>

            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="evidenciar" @change="_saveEvidenciarNotas($value)" :checked="{@_evidenciarAcordes}">
                <label class="form-check-label" for="evidenciar">Evidênciar acordes</label>
            </div>
        </div>

        <div class="center"></div>

        <div id="marcador" class="marcador"></div>
        
        <pre id="content"></pre>
    </div>`;

    _titulo = '';
    _mostrarAcordes = true;
    _rolagemAutomatica = true;
    _evidenciarAcordes = true;

    viewDidLoad() {
        this._loadConfig();
    }

    setStream(stream) {
        stream.onNewNote(note => {
            this.setMarcadorPosicao(note.position);
        });
    }

    async loadCifra(id, fn) {
        const cifra = await (new CifraModel()).get(id);
        this.setCifra(cifra, fn);
    }

    setCifra(cifra, fn) {
        this.$element.find("#content").html(this._formatNotes(this._formatTag(cifra.texto)));

        this._titulo = cifra.titulo;

        this._loadNotes();
        this._loadMarcador();
        this._loadConfig();

        this.setMarcadorPosicao(0);
        if (fn) fn();
    }

    setMarcadorPosicao(position) {
        this.marcador.move(this.notes.getNoteByPosition(position));
    }

    _saveMostrarAcordes(v) {
        this._mostrarAcordes = v;

        this._saveConfig();
    }

    _saveRolagemAutomatica(v) {
        this._rolagemAutomatica = v;

        if (this.marcador) {
            this.marcador.setRolagemAutomatica(v);
        }

        this._saveConfig();
    }

    _saveEvidenciarNotas(v) {
        this._evidenciarAcordes = v;

        if (this.marcador) {
            v ? this.marcador.show() : this.marcador.hide();
        }

        this._saveConfig();
    }

    _formatNotes(cifra) {
        return cifra.replace(/\([^)]+\)/gi, (note) => {
            return `<b>${note.replace('(', '').replace(')', '')}</b>`
        });
    }

    _formatTag(cifra) {
        return cifra.replace(/\[[^\]]+\]/gi, (note) => {
            return `<i>${note}</i>`
        });
    }

    _loadMarcador() {
        this.marcador = new Marcador(this.$element.find("#marcador"));
    }

    _loadNotes() {
        this.notes = new NotesCollection(this.$element.find("#content").find('b'));
    }

    _saveConfig() {
        window.localStorage.setItem('mostrar_acordes', this._mostrarAcordes);
        window.localStorage.setItem('rolagem_automatica', this._rolagemAutomatica);
        window.localStorage.setItem('evidenciar_acordes', this._evidenciarAcordes);
    }

    _loadConfig() {
        const config = this._getConfig();

        this._saveMostrarAcordes(config.mostrarAcordes);
        this._saveRolagemAutomatica(config.rolagemAutomatica);
        this._saveEvidenciarNotas(config.evidenciarAcordes);
    }

    _getConfig() {
        const mostrarAcordes = window.localStorage.getItem('mostrar_acordes');
        const rolagemAutomatica = window.localStorage.getItem('rolagem_automatica');
        const evidenciarAcordes = window.localStorage.getItem('evidenciar_acordes');

        if (mostrarAcordes === null || rolagemAutomatica === null || evidenciarAcordes === null) {
            this._saveConfig();

            mostrarAcordes = true;
            rolagemAutomatica = true;
            evidenciarAcordes = true;
        }

        return {
            mostrarAcordes: mostrarAcordes === 'true',
            rolagemAutomatica: rolagemAutomatica === 'true',
            evidenciarAcordes: evidenciarAcordes === 'true'
        }
    }
}

PiComponent.register(CifraView);