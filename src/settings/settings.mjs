/**
 * @module "Settings" class
 * @description Class representing settings of the application
 */

"use strict";

import { DirectoriesSettings } from "./directoriesSettings.mjs";
import { SizesSettings } from "./sizesSettings.mjs";
import { SettingsBase } from "core-library";

export class Settings extends SettingsBase {
    get sizes() { return this.mSizes; }
    set sizes(pValue) { this.mSizes = pValue; }
    get directories() { return this.mDirectories; }
    set directories(pValue) { this.mDirectories = pValue; }

    constructor(pSizes, pDirectories) {
        super();
        this.sizes = pSizes;
        this.directories = pDirectories;
    }

    validate(pValidator) {
        pValidator.setComponent(Settings.name);
        this.sizes.validate(pValidator);
        this.directories.validate(pValidator);
        pValidator.restoreComponent();
    }

    toData() {
        let data = super.toData();
        data.sizes = this.sizes.toData();
        data.directories = this.directories.toData();
        return data;
    }

    fromData(pData) {
        super.fromData(pData);
        if (pData != null) {
            this.sizes = (new SizesSettings()).fromData(pData.sizes);
            this.directories = (new DirectoriesSettings()).fromData(pData.directories);
        }
        return this;
    }    
}