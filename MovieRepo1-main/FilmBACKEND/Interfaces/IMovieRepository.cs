using FilmBACKEND.Dtos.FilmDtos;
using FilmBACKEND.Dtos.MovieDtos;
using FilmBACKEND.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FilmBACKEND.Interfaces
{
    public interface IMovieRepository : IGenericRepository<Movie>
    {
        IEnumerable<Movie> GetMoviesCount(int count);
        Task<ActionResult<IEnumerable<GetMovieDto>>> GetAllMovies();
        Task<ActionResult<IEnumerable<GetMovieDto>>> GetRentedMovies();
        Task<IEnumerable<GetMovieDto>> GetUnRentedMovies();

        Task<ActionResult<IEnumerable<GetMovieDto>>> GetUsersRentedMovies(int id);

        Task PostMovie(CreateMovieDto movieDto);
        Task RentMovie(RentMovieDto rentMovie);
        Task UnrentMovie(RentMovieDto rentMovie);
        Task DeleteMovie(int id);

    }
}
