import React from 'react'
import datas from 'json!./data.json'

export default React.createClass({
  // getBrief(){
  // 	var info = datas.filter(function(data){
  // 		return data.name == this.props.params.userName;
  // 	})[0];
  // 	for(var i = 0; i < datas.length; i++){
  // 		var obj = data[i];
  // 		console.log("name"+obj.name);
  // 	}
  // }

  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
        <h2>I am here</h2>
        <h2>{this.props.params.userName}</h2>
      </div>
    )
  }
})
