import { ActionTypes } from "./Types";
import { data as phData} from "./placeholderData";

export const localData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload: {
        dataType: dataType,
        data: phData[dataType]
    }
});