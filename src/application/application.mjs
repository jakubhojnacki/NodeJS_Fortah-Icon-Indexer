/**
 * @module "Application" class
 * @description Main application class
 */

import { ArgName } from "../application/argName.mjs";
import { ArgTemplateFactory } from "../application/argTemplateFactory.mjs";
import { ConsoleApplication } from "console-library";
import { Logic } from "../logic/logic.mjs";
import { Settings } from "../settings/settings.mjs";

export class Application extends ConsoleApplication {
    constructor(pRootDirectoryPath) {
        super(pRootDirectoryPath, ( new ArgTemplateFactory()).create(), new Settings());
    }    

    async runLogic() {
        const sourcePath = this.args.get(ArgName.sourcePath);
        const destinationPath = this.args.get(ArgName.destinationPath);
        const logic = new Logic(this, sourcePath, destinationPath);
        const __this = this;
        logic.onSize = (lEventArgs) => { __this.logic_onSize(lEventArgs); };
        logic.onDirectory = (lEventArgs) => { __this.logic_onDirectory(lEventArgs); };
        logic.run();
    }

    logic_onSize(pEventArgs) {
        this.console.writeLine(pEventArgs.size);
    }

    logic_onDirectory(pEventArgs) {
        this.console.writeLine(pEventArgs.directory);
    }
}