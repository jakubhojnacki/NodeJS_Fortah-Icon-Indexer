/**
 * @module "SizeSettings" class
 * @description Class storing one size settings
 */

"use strict";

export class SizeSettings {
    get size() { return this.mSize; }
    set size(pValue) { this.mSize = Number.verifyAsInteger(pValue); }
    get directory() { return this.mDirectory; }
    set directory(pValue) { this.mDirectory = String.verify(pValue); }

    constructor(pSize, pDirectory) {
        this.size = pSize;
        this.directory = pDirectory;
    }

    validate(pValidator) {
        pValidator.setComponent(SizeSettings.name);
        pValidator.testNotEmpty("Size", this.size);
        pValidator.testNotEmpty("Directory", this.directory);
        pValidator.restoreComponent();
    }

    toData() {
        const data = {};
        data.size = this.size;
        data.directory = this.directory;
        return data;
    }

    fromData(pData) {
        if (pData != null) {
            this.size = pData.size;
            this.directory = pData.directory;
        }
        return this;
    }
}