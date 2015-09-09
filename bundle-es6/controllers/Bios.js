import solfege from "solfegejs";
import config from "../../config/config";
import * as ControllerUtil from "../utils/ControllerUtil";

/**
 * The access points of the BIOS
 */
export default class Bios
{
    /**
     * List the bios
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *listBios(request, response)
    {
        yield ControllerUtil.listDirectory(
            config.api.biosDirectoryPath,
            "bios",
            null,
            request,
            response
        );
    }


    /**
     * Add a bios
     *
     * @public
     * @param   {solfege.bundle.server.Request}     request     The request
     * @param   {solfege.bundle.server.Response}    response    The response
     */
    *addBios(request, response)
    {
        yield ControllerUtil.uploadFile(
            config.api.biosDirectoryPath,
            request,
            response
        );
    }
}

