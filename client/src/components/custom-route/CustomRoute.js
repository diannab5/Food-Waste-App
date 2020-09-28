import React from 'react';
import { Route } from 'react-router-dom';

class CustomRoute extends React.Component{
    render(){
        const{Layout,Component, ...rest} =this.props;   //stiu ca le voi primi de la componenta parinte
        return(
            <Route {...rest} render={props=>(
            <Layout>
                <Component {...props} />
            </Layout>
            )} />
            );
    }
}

export default CustomRoute;