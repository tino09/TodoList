import React, { Component } from 'react';

class Methods extends Component {
    state = {  }

    componentDidMount(){
        // Th very first time a component runs on the screen it gets data to correctly display
        // most common use for this is when you need to get dat from an API calls
    }

    componentWillReceiveProps(nextProps, Depricated){
        // KInd of like when someone gives you a gift
        // will run everytime a parent component decides to hand props to the child component
        //syntax 
        // if (nextProps.whatever !== this.props.whatever){
            // do something
        //}
    }

    shouldComponentUpdate(nextProps, nextState){
        //allows developer to decides with logic if a componenent needs to update
        // return true if you want it to update
        // return false if not
        // this is for performance and optimization but be sure and cafeful of use.
    }

    componentWillUnmount(Depricated){
        // teardown and clean up code before your component disappears
        //remove event listener
        //
    }

    componentWillUpdate(Depricated){

    }

    static getDerivedStateFromProps(props, state){
        // is for rare cases where your components needs to take incoming 
        //props from components to set its own state
        // return the new updated state based on the props
    }

    getSnapshotBeforeUpdate(){
        //create a backuo before updates  
    }

    render() { 
        return ( <div>

        </div> );
    }
}
 
export default Methods;