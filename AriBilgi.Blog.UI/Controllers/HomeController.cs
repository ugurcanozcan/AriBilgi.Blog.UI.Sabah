using Microsoft.AspNetCore.Mvc;

namespace AriBilgi.Blog.UI.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
