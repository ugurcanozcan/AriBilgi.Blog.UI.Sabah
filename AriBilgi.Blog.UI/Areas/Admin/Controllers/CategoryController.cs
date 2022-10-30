using Microsoft.AspNetCore.Mvc;

namespace AriBilgi.Blog.UI.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class CategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Add()
        {
            return View(); 
        }
        public IActionResult Edit()
        {
            return View();
        }
    }
}
