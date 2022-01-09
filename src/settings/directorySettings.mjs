/**
 * @module "DirectorySettings" class
 * @description Class storing one directory settings
 */

"use strict";

export class DirectorySettings {
    get directory() { return this.mDirectory; }
    set directory(pValue) { this.mDirectory = String.verify(pValue); }
    get context() { return this.mSize; }
    set context(pValue) { this.mSize = String.verify(pValue); }

    constructor(pDirectory, pContext) {
        this.directory = pDirectory;
        this.context = pSize;
    }

    validate(pValidator) {
        pValidator.setComponent(DirectorySettings.name);
        pValidator.testNotEmpty("Directory", this.directory);
        pValidator.testNotEmpty("Context", this.context);
        pValidator.restoreComponent();
    }

    toData() {
        const data = {};
        data.directory = this.directory;
        data.context = this.context;
        return data;
    }

    fromData(pData) {
        if (pData != null) {
            this.directory = pData.directory;
            this.context = pData.context;
        }
        return this;
    }
}