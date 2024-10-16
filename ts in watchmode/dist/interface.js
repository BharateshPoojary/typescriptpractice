"use strict";
class Email {
    constructor(notes, //the type should also be similar
    phonenolist //iF any property is not there it leads to an error
    ) {
        this.notes = notes;
        this.phonenolist = phonenolist;
    }
}
class FileEditor {
    constructor(notes, phonenolist, file //here I have implemented the property of fileexplorer along with additional property which is note there in interface
    ) {
        this.notes = notes;
        this.phonenolist = phonenolist;
        this.file = file;
    }
    getPhoto() {
        return "";
    }
}
/**TypeScript interfaces expect the properties to be public by default */ 
