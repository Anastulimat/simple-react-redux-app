import { BUY_PHONE } from "./type";

/**
 * Creation of action creator
 * @returns {{type: string}}
 */
export const buyPhone = (totalPhone) => {
    return {
        type: BUY_PHONE,
        payload: totalPhone
    }
}