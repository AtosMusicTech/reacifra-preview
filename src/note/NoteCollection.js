import Note from "./Note";

export default class NotesCollection extends Array {
    constructor($notes) {
        super();

        $notes.get().forEach((note, index) => {
            this.push(new Note($(note)));
        });
    }

    getNoteByPosition(p) {
        if (p < 0) return 0;
        if (p >= this.length) return this.length - 1;

        return this[p];
    }
};