import React from 'react';
// import reducers from '../reducers';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions';

import UserHeader from './UserHeader';

class Bloglist extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();
    }


    renderlist(){
        return this.props.posts.map(x => {
            return <div key={x.id} className="ui relaxed divided list">
                <div className="item">
                <div className="ui avatar large middle aligned image"><i className="blogger icon"></i></div>
                <div className="content">
                    <div className="header"><h3>{x.title}</h3></div>
                    <div className="description">{x.body}</div>

                    <div> <UserHeader userID = {x.userId}/></div>
                </div>

                </div>
                <hr />
            </div>
        }) 
    }
    render(){
        console.log(this.props.posts)
    return(
        <div>{this.renderlist()}</div>
    );
    }
};

const mapStateToProp = (state) => {
    console.log(state)
    return {posts: state.posts}
};
export default connect(mapStateToProp,{fetchPosts})(Bloglist)
// export default Bloglist;
