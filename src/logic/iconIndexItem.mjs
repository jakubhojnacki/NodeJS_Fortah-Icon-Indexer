/**
 * @module "IconIndexItem" class
 * @description Class representing icon index item
 */

"use strict";

export class IconIndexItem {
    get directory() { return this.mDirectory; }
    set directory(pValue) { this.mDirectory = String.verify(pValue); }
    get type() { return this.mType; }
    set type(pValue) { this.mType = String.verify(pValue); }
    get size() { return this.mSize; }
    set size(pValue) { this.mSize = Number.verifyAsInteger(pValue); }
    get context() { return this.mContext; }
    set context(pValue) { this.mContext = String.verify(pValue); }

    constructor(pDirectory, pType, pSize, pContext) {
        this.directory = pDirectory;
        this.type = pType;
        this.size = pSize;
        this.context = pContext;
    }

    toString() {
        return `[${this.directory}]\nType=${this.type}\nSize=${this.size}\nContext=${this.context}`;
    }
}