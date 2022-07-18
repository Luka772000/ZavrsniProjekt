using FilmBACKEND.Dtos.FilmDtos;

namespace FilmBACKEND.Dtos.ProductionHouseDtos
{
    public class GetProductionHouseDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public GetMovieDto Movie { get; set; }
    }
}
