/**
 * @module "DirectoriesSettings" class
 * @description Class representing an array of directories settings
 */

"use strict";

import { DirectorySettings } from "./directorySettings.mjs";

export class DirectoriesSettings extends Array {
    constructor() {
        super();
    }

    validate(pValidator) {
        for (const item of this)
            item.validate(pValidator);
    }

    toData() {
        const data = new Array();
        for (const item of this) {
            const dataItem = item.toData();
            data.push(dataItem);
        }
        return data;
    }

    fromData(pData) {
        if (Array.isArray(pData))
            for (const dataItem of pData) {
                const item = (new DirectorySettings()).fromData(dataItem);
                this.push(item);
            }
        return this;
    }
}