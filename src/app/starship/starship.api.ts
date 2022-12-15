import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IStarship, IStarships } from '../../models';

export const starshipApi = createApi({
    reducerPath: 'api/starships',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://swapi.dev/api/'
    }),
    endpoints: build => ({
        getStarships: build.query<IStarships, string>({
            query: (limit: string) => ({
                url: 'starships',
                params: {
                    _limit: limit
                }
            })
        }),
        getStarship: build.query<IStarship, string>({
            query: (id: string) => ({
                url: 'starships/' + id,
            })
        })
    })
})

export const {
    useGetStarshipsQuery,
    useGetStarshipQuery
} = starshipApi;