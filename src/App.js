import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation/index';
import { Route, Switch } from 'react-router-dom';
import GalleryView from './components/GalleryView/index';
import ArtDescription from './components/ArtDescription/ArtDescription';

function App() {
  return (
    <div className="main-content">
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route exact path="/">
          <h2>Harvard Art Museum</h2>
          <p>Look, but Don't Touch. Please select a Gallery in the navigation bar.</p>
        </Route>
        <Route exact path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route path={`/galleries/:galleryId/art/:artId`}>
          <ArtDescription galleries={harvardArt.records} />
        </Route>
        <Route path="*">
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
