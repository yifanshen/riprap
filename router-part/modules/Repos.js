import React from 'react'
import { Link } from 'react-router'
import datas from 'json!./data.json'

export default React.createClass({
  
  render() {
    // var list = [];
    //   for(var i = 0; i < datas.length; i++){
    //     //list.push(<li><link to="/repos/reactjs/react-router"> {datas[i].name} </link></li>)
    //     list.push(datas[i])
    //     console.log(datas[i].name);
    //   } 
    // return 里面只能有tag 或者用括号包围起来的javascript
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><Link to="/repos/reactjs/react-router">React Router</Link></li>
          <li><Link to="/repos/facebook/react">React</Link></li>
          {datas.map(function(data,index){
            return <li><Link to={"/repos/"+data.name+"/"+data.brief}>{data.name+"****"+data.brief}</Link></li>
          })}
        </ul>
      </div>
    )
  }

})
