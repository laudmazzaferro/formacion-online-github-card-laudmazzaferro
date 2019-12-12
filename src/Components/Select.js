import React from 'react';
import PropTypes from 'prop-types';
import './../scss/Select.scss'


class Select extends React.Component {
  
  getSelectValue(event){
    const {value}= event.currentTarget;
    this.props.getSelectMember(value);
  }

  render() {
    const { members } = this.props;
    return (
      <div className="select__members--container">
        <label htmlFor="members" className="select__members--label"></label>
        <select id="members" name="members" placeholder="Selecciona un usuario" className="select__members" onChange={this.getSelectValue} ><i class="fas fa-sort-down"></i>
          {members.map(member => {
            return (<option value={member.login} key={member.id}className="select__members--option">{member.login}</option>)
          })}
        </select>
      </div>
    )
  }

}

Select.propTypes = {
  members: PropTypes.array.isRequired,
  getSelectMember: PropTypes.func.isRequired,
};

export default Select;