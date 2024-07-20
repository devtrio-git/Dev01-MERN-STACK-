import path from 'path';

export default class WebPageController {
    static getHome(req, res) {
        // res.sendFile(path.join(process.cwd(), 'views', 'index.html'))
        res.render('index', {title: "Home"})
    }
    static getAbout(req, res) {

        res.render('about',  {title: "About", skills: ['js', 'css', 'react', 'nodejs']})
    }
}