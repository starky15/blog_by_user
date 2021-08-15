import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';


class UserHeader extends React.Component {
    // userID
    componentDidMount(){
        console.log('strange')
        console.log(this.props)
    };
    
    render() {
        const user = this.props.user.find(x => x === this.props.userID)
        return(<div>{user}</div>)
    }
};

const mapStateToProps = (state) =>{
    console.log(state)
    return {user: state.users}
};
// console.log({fetchUser})
export default connect(mapStateToProps, {fetchUser})(UserHeader);
