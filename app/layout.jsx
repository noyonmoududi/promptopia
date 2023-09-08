import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metadata ={
    title: "Promptopia",
    description: "Discover & share AI Prompts"
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Provider>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
              <Nav/>
              {children}
            </main>
          </Provider>
        </body>
    </html>
  )
}

export default RootLayout;

//https://www.youtube.com/watch?v=wm5gMKuwSYk&t=1191s&ab_channel=JavaScriptMastery
//https://github.com/adrianhajdin/project_next_13_ai_prompt_sharing/tree/main