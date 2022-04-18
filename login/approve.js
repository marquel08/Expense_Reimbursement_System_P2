import React from 'react';

class App extends React.Component {
    state = {
        enabled: true
    }
    render() {
        <div className="Appove">
            <form>
                <button enabled={this.state.enabled}>Approve</button>
            </form>
            <form>
                <button disabled={this.state.disabled}>Approve</button>
            </form>
        </div>
    }
}