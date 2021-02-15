import { Switch, Route} from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import paths from "./router/paths";
import Home from "./pages/Home/Home";


function App() {
    return (
        <Layout>
            <Switch>
                <Route exact path={paths.HOME} component={Home} />
            </Switch>
        </Layout>
    );
}

export default App;
