using AutoMapper;
using AutoMapper.QueryableExtensions;
using FilmBACKEND.Dtos.FilmDtos;
using FilmBACKEND.Dtos.MovieDtos;
using FilmBACKEND.Interfaces;
using FilmBACKEND.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmBACKEND.Repositories
{
    public class MovieRepository : GenericRepository<Movie>, IMovieRepository
    {
        private readonly Context _context;
        private readonly IMapper _mapper;

        public MovieRepository(Context context, IMapper mapper) : base(context)
        {
            _mapper = mapper;
            _context = context;
        }



        public IEnumerable<Movie> GetMoviesCount(int count)
        {
            return _context.Movies.OrderByDescending(d => d.Name).Take(count).ToList();
        }
        public async Task<ActionResult<IEnumerable<GetMovieDto>>> GetAllMovies()
        {
            return await _context.Movies.ProjectTo<GetMovieDto>(_mapper.ConfigurationProvider).ToListAsync();

        }

        public async Task RentMovie(RentMovieDto rentMovie)
        {
            var movie = await _context.Movies.FirstOrDefaultAsync(u => u.Id == rentMovie.Id);
            var user = await _context.AppUsers.Include(r => r.RentedMovies).FirstOrDefaultAsync(u => u.Id == rentMovie.RenterId);
            movie.RenterId = rentMovie.RenterId;
            user.RentedMovies.Add(movie);
            await _context.SaveChangesAsync();

        }
        public async Task UnrentMovie(RentMovieDto rentMovie)
        {
            var movie = await _context.Movies.SingleOrDefaultAsync(u => u.Id == rentMovie.Id);
            var user = await _context.AppUsers.Include(r => r.RentedMovies).SingleOrDefaultAsync(u => u.Id == rentMovie.RenterId);
            user.RentedMovies.Remove(movie);
            movie.RenterId = null;
            movie.Renter = null;
            await _context.SaveChangesAsync();


        }
        public async Task DeleteMovie(int id)
        {
            var movie = await _context.Movies.FirstOrDefaultAsync(u => u.Id == id);
            _context.Movies.Remove(movie);
            await _context.SaveChangesAsync();
        }

        public async Task<ActionResult<IEnumerable<GetMovieDto>>> GetRentedMovies()
        {
            return await _context.Movies.ProjectTo<GetMovieDto>(_mapper.ConfigurationProvider).Where(i => i.RenterId != 0).ToListAsync();

        }

        public async Task<ActionResult<IEnumerable<GetMovieDto>>> GetUsersRentedMovies(int renterId)
        {
            return await _context.Movies.ProjectTo<GetMovieDto>(_mapper.ConfigurationProvider).Where(i => i.RenterId == renterId).ToListAsync();
        }


        public async Task<IEnumerable<GetMovieDto>> GetUnRentedMovies()
        {
            return await _context.Movies.ProjectTo<GetMovieDto>(_mapper.ConfigurationProvider).Where(i => i.RenterId == 0).ToListAsync();
        }

        public Task PostMovie(CreateMovieDto movieDto)
        {
            throw new System.NotImplementedException();
        }
    }
}
