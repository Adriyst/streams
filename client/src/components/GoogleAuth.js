import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ 
                clientId: "787666308758-nrm0dp7ncgl1p5gjae68sfjljlvl868v.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = isIn => isIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();

    logInOrOut = txt => txt === "Out" ? this.auth.signOut() : this.auth.signIn();

    renderAuthButton() {

        const isIn = this.props.isSignedIn;

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

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
