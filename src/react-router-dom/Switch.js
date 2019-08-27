import React,{Component} from 'react';
import {Consumer} from './context';
import pathToRegExp from 'path-to-regexp';

export default class Switch extends Component{

    render(){
        return (
           <Consumer>
               {
                   state => {
                        let { pathname } = state.location;
                        let children = this.props.children;
                        for(let i = 0, len = children.length; i < len; i++){
                            let child = children[i];
                            let path = child.props.path || '';
                            let reg = pathToRegExp(path, [], {end: false});
                            if(reg.test(pathname)){
                                return child; //匹配成功返回
                            }
                        }
                        return null
                   }
               }
           </Consumer>
        )
    }
}