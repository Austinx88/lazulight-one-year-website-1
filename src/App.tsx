import { Route, Switch } from 'wouter'
import { PageWrapper } from './components/PageWrapper'
import Home from './pages/Home'
import Elira from './pages/Elira'
import Finana from './pages/Finana'
import Pomu from './pages/Pomu'
import Secret from './pages/Secret'
import DiamondCityLights from './pages/DiamondCityLights'
import VisualNovel from './pages/VisualNovel'
import Art from './pages/Art'
import Messages from './pages/Messages'
import About from './pages/About'

export default function App (): JSX.Element {
  return (
    <div>
      {/* Notes: (Brandon)
        This file switches the route and passes the name of the page to PageWrapper
        Doing this allows everything in PageWrapper to dynamically change based on the value of 'page'
        Because for some reason it wouldn't dynamically change based on 'location.pathname'

        Content of PageWrapper: header, footer, background
      */}
      <Switch>
        <Route path='/elira'><PageWrapper page='elira'><Elira /></PageWrapper></Route>
        <Route path='/finana'><PageWrapper page='finana'><Finana /></PageWrapper></Route>
        <Route path='/pomu'><PageWrapper page='pomu'><Pomu /></PageWrapper></Route>
        <Route path='/project-secret'><PageWrapper page='secret'><Secret /></PageWrapper></Route>
        <Route path='/project-dcl'><PageWrapper page='dcl'><DiamondCityLights /></PageWrapper></Route>
        <Route path='/project-vn'><PageWrapper page='vn'><VisualNovel /></PageWrapper></Route>
        <Route path='/all-art'><PageWrapper page='art'><Art /></PageWrapper></Route>
        <Route path='/all-messages'><PageWrapper page='messages'><Messages /></PageWrapper></Route>
        <Route path='/about'><PageWrapper page='about'><About /></PageWrapper></Route>
        <Route>
          <PageWrapper page='home'><Home /></PageWrapper>
        </Route>
      </Switch>
    </div>
  )
}
