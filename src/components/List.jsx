import React from 'react'
import { connect } from 'react-redux';
import Item from './Item';

const List = ({list}) => {
    return (
      <div class="container list-container">
        <ul class="list-group">
        {list.list.map((cost , index)=>(
           <Item
            index = {index}
            cost = {cost}
           />
         ))}
        </ul>
      </div>
    )
}
const mapStateToProps = (state) => ({
  list: state.list
})

export default connect(mapStateToProps)(List)
