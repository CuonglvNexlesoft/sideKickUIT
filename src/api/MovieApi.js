/* eslint-disable */
import BaseApi from './BaseApi';

class MovieAPI extends BaseApi {

    getMovieDetail(id){
        return super.execute(this.Methods.GET, this.Urls.movies.getMovieDetail.replace('{movie_id}', id), null, null, params);
    }
    
}

export default new MovieAPI();
