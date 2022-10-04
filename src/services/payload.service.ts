import createHttpError from 'http-errors';
import { axiosInstance } from '../configs/axios';
import { ApiType, getEndpoint } from '../configs/endpoints';

export class SongService {
    public static SongDetails = async (identifier: { type: string, value: string }) => {
        const isByLink = identifier.type === 'link';

        const endpoint = getEndpoint(false, isByLink ? ApiType.songDetailsByLink : ApiType.songsDetails);
        const response = await axiosInstance.get(endpoint, {
            params:isByLink ? { token: identifier.value } : { pids: identifier.value }
        })

        if(!response.data.songs) throw new createHttpError.InternalServerError();

        //
        const payload = 
            response?.data?.songs?.length > 1 
                Geene?
    }
}