import React from 'react';
//import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

//const NodeMediaServer = require('node-media-server');
class StreamShow extends React.Component{
  
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchStream(id);
    //this.buildPlayer();
  }
  render(){
    if(!this.props.stream)
      return <div>Loading..</div>;

    console.log(this.props.stream.description);
    const { title, description } = this.props.stream;
    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);

