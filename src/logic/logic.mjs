/**
 * @module "Logic" class
 * @description Main logic of the application
 */

"use strict";

import FileSystem from "fs";
import Path from "path";

import { IconIndex } from "../logic/iconIndex.mjs";
import { IconIndexItem } from "../logic/iconIndexItem.mjs";

export class Logic {
    get application() { return this.mApplication; }
    set application(pValue) { this.mApplication = pValue; }
    get sourcePath() { return this.mSourcePath; }
    set sourcePath(pValue) { this.mSourcePath = String.verify(pValue); }
    get destinationPath() { return this.mDestinationPath; }
    set destinationPath(pValue) { this.mDestinationPath = String.verify(pValue); }
    get iconIndex() { return this.mIconIndex; }
    set iconIndex(pValue) { this.mIconIndex = pValue; }
    get onSize() { return this.mOnSize; }
    set onSize(pValue) { this.mOnSize = pValue; }
    get onDirectory() { return this.mOnDirectory; }
    set onDirectory(pValue) { this.mOnDirectory = pValue; }

    constructor(pApplication, pSourcePath, pDestinationPath) {
        this.application = pApplication;
        this.sourcePath = pSourcePath;
        this.destinationPath = pDestinationPath;
        this.iconIndex = new IconIndex();
        this.onSize = null;
        this.onDirectory = null;
    }

    run() {
        this.initialise();
        this.process();
        this.finalise();
    }

    initialise() {

    }

    process() {
        const sizes = this.application.settings.sizes;
        const directories = this.application.settings.directories;
        for (const size of sizes) {
            if (this.onSize)
                this.onSize(size);
            for (const directory of directories) {
                if (this.onDirectory)
                    this.onDirectory(directory);
                const sourceFullPath = Path.join(this.sourcePath, size.directory, directory.directory);
                if (FileSystem.existsSync(sourceFullPath))
                    this.iconIndex.push(new IconIndexItem());
            }
        }
    }

    finalise() {

    }
}