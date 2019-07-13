import React from 'react';

export default class HideableText extends React.Component {
   constructor (props) {
        super(props);
        this.state = {
            isHidden: false,
        }
   }

   toogleIsHidden() {
       this.setState((currentState) => ({
           isHidden: !currentState.isHidden,
       }))

   }

    render() {
        return (
            <div>
                <button onClick={() => this.toogleIsHidden()}>Toggle</button>
                {!this.state.isHidden && this.props.text}
            </div>
        );
    }

}