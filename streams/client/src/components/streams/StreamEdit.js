import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import StreamForm from './StreamForm';
import { fetchStream, editStream} from '../../actions';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render(){
    if(!this.props.stream){
      return <div>Loading...</div>;
    }
    // only same userId can edit their own post
    if(this.props.currentUserId!==this.props.stream.userId){
      return <div><h3>Please Sign In !</h3></div>
    }
    console.log(this.props.stream);
    //initialValues are by default property of StreamForm
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm 
          initialValues={_.pick(this.props.stream,'title','description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth_reduce.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
