import PiComponent from 'pyllar/component';

import CifraModel from './CifraModel';
import Marcador from '../marcador/Marcador';
import NotesCollection from '../note/NoteCollection';

import "./CifraView.css";

export default class CifraView extends PiComponent {
    view = /*html*/`<div class="cifra-view"><div class="titulo">{@_titulo}</div><div id="marcador" class="marcador"></div><pre id="content"></pre></div>`;

    _titulo = '';

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

        this.setMarcadorPosicao(0);
        if (fn) fn();
    }

    setMarcadorPosicao(position) {
        this.marcador.move(this.notes.getNoteByPosition(position));
    }

    _formatNotes(cifra) {
        return cifra.replace(/\([^)]+\)/gi, (note) => {
            return `<b>${note}</b>`
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
}

PiComponent.register(CifraView);