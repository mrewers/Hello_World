import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props;
    
    fetchUser( userId );
  }
  
  render() {
    const { userId, users } = this.props;
    const user = users.find( user => user.id === userId );

    if (!user) {
      return null;
    }
    
    return <div className="header">{user.name}</div>
  }
}

const mapStateToProps = state => {
  return { users: state.users };
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
