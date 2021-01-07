import express from 'express' 
import path from 'path'
import serverRenderer from './middleware/renderer'
import getPosts from './middleware/posts'
import verirfyAuth from './middleware/auth'
import cookieParser from 'cookie-parser'

// initialize the application and create the routes
const PORT = 3000;

const app = express()
const router = express.Router();

app.use(cookieParser('secret'))

// root (/) should always serve our server rendered page
router.use(`^/$`, verirfyAuth, getPosts, serverRenderer);  //можем да добавим middleware getPosts

// other static resources should just be served as they are
router.use(express.static( 
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));
// router.use('/relativepath', express.static( 
//     path.resolve(__dirname, '..', 'build'),
//     { maxAge: '30d' },
// ));

// tell the app to use the above rules
router.use('*', serverRenderer);
app.use(router); 

// start the app
app.listen(PORT, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
});
