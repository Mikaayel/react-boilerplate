import React, { Component } from 'react';
import Main from './Main';
import Home from './Home';
import { Link, Route, Switch } from 'react-router-dom';

import About from './components/about/about';
import NotFound from './components/notFound/notFound';
import Page from './components/page/page';

export default () => (
    <div>
        <Page>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='*' component={NotFound}/>
            </Switch>
        </Page>
    </div>
    // <div style={style}>
    //     <Sidebar>
    //         {
    //             gists ? gists.map(gist => (
    //                     <SidebarItem key={gist.id}>
    //                         <Link to={`/g/${gist.id}`}>
    //                             {gist.description || '[no description]'}
    //                         </Link>
    //                     </SidebarItem>
    //                 )) : (<p>Loading…</p>)
    //         }
    //     </Sidebar>
    //     <Main>
    //         <Route path="/" exact component={Home} />
    //         {
    //             gists && (
    //                 <Route path="/g/:gistId" render={
    //                     ({ match }) => (
    //                         <Gist gist={gists.find(g => g.id === match.params.gistId)} />
    //                     )
    //                 } />
    //             )
    //         }
    //     </Main>
    // </div>
);

