import React from 'react';

class GoogleAuth extends React.Component {

    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ 
                clientId: "787666308758-nrm0dp7ncgl1p5gjae68sfjljlvl868v.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => this.setState({ isSignedIn: this.auth.isSignedIn.get() });

    logInOrOut = t => t === "Out" ? this.auth.signOut() : this.auth.signIn();


    renderAuthButton() {

        const isIn = this.state.isSignedIn;

        if (isIn === null) {
            return null;
        }

        let buttonText;
        isIn ? buttonText = "Out" : buttonText = "In";
        return (
            <button onClick={() => this.logInOrOut(buttonText)} className="ui red google button">
                <i className="google icon" />
                Sign {buttonText}
            </button>
        )
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

export default GoogleAuth;