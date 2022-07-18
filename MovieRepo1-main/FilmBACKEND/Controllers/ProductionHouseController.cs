using AutoMapper;
using FilmBACKEND.Dtos.ProductionHouseDtos;
using FilmBACKEND.Interfaces;
using FilmBACKEND.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FilmBACKEND.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductionHouseController : ControllerBase
    {
        private readonly ILogger<MovieCreatingAndRentingController> _logger;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly Context _context;
        private readonly IPhotoService _photoService;

        public ProductionHouseController(ILogger<MovieCreatingAndRentingController> logger, IUnitOfWork unitOfWork, IMapper mapper, Context context, IPhotoService photoService)
        {
            _logger = logger;
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _context = context;
            _photoService = photoService;
        }
        [HttpGet("ProductionHouses")]
        public async Task<ActionResult<IEnumerable<GetProductionHouseDto>>> GetMoviesList()
        {
            _logger.LogInformation("GetMoviesList initiated");
            try
            {
                var Movies = await _unitOfWork.Movies.GetAllMovies();
                return Ok(Movies);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception Caught");
                return BadRequest(ex.Message);
            }
        }
    }
}
