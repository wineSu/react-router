import React,{Component} from 'react';
import pathToRegExp from 'path-to-regexp';
import {Consumer} from './context';

export default class Route extends Component{
    render(){
        return (
            <Consumer>
                {
                    (state) => {
                        let { path, component: Component, exact = false } = this.props;
                        let { pathname } = state.location;
                        let keys = [];
                        let reg = pathToRegExp(path, keys, {end: exact});
                        //取参数
                        keys = keys.map(item => item.name);
                        let result = pathname.match(reg);
                        let [url, ...values] = result || [];

                        let props = {
                            location: state.location,
                            hostory: state.history,
                            match: {
                                params: keys.reduce((obj, cur, i)=>{
                                    obj[cur] = values[i]
                                    return obj
                                },{})
                            }
                        }
                        if(result){
                            return <Component {...props}></Component>
                        }
                        return null
                    }
                }
            </Consumer>
        )
    }
}