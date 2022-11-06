using Microsoft.AspNetCore.Mvc;

namespace AriBilgi.Blog.UI.Controllers
{
    public class ArticleController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
