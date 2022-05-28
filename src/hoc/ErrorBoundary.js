import { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false
    };
    static getDerivedStateFromError(error) {
        return { hasError: true }

    }
    componentDidCatch(error, errrInfo) {
        //save error tag

        // console.log('Erron Boundary');
        // console.log(error, errrInfo);

    }

    render() {

        if (this.state.children) {
            return <div className=' alert alert-danger'>Wystąpił jakis problem</div>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;