import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import path from 'path'
import fs from 'fs'

// import our main App component
import App from '../../src/app';
import Navigation from '../../src/navigation'

const serverRenderer = (req, res, next) => { 

    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html')


    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }
      
        // render the app as a string
        const html = ReactDOMServer.renderToString( 
            <App posts = {req.posts} user = {req.user}>
                <StaticRouter>
                    <Navigation/>
                </StaticRouter>
            </App>
        )
        const htmlWithState = htmlData.replace( 
            `window.__STATE__={}`,
            `window.__STATE__=${JSON.stringify({
                user: req.user,
                posts: req.posts
            })}`,
        )

        // inject the rendered app into our html and send it
        return res.send( 
            htmlWithState.replace(
                `<div id="root"></div>`,
                `<div id="root">${html}</div>`
            )
        )
    })
}
export default serverRenderer
