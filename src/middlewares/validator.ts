import joi from 'joi';
import { Segments, celebrate } from 'celebrate';

const encodeQuery = (query:string) => encodeURIComponent(query);

export const validators = {
    searchAll: celebrate({
        [Segments.QUERY]: joi.object().keys({
            query: joi.string().trim().custom(encodeQuery, 'encode-query').required().min(1)
        })
    }),
    searchSpecific: celebrate({
        [Segments.QUERY]: joi.object().keys({
            query: joi.string().trim().custom(encodeQuery, 'encode-query').required().min(1),
            page: joi.string().trim(),
            limit: joi.string().trim()
        })
    }),
    details: celebrate({
        [Segments.QUERY]: joi.object().keys({
            id: joi.string().trim(),
            link: joi.string().trim()
        })
        .or('id', 'link')
    }),
}
