import React from 'react';
import PropTypes from 'prop-types';


class Select extends React.Component {
  constructor(props) {
    super(props);
    this.getSelectValue = this.getSelectValue.bind(this);
  }
  getSelectValue(event){
    const {value}= event.currentTarget;
    this.props.getSelectMember(value);
  }

  render() {
    const { members } = this.props;
    return (
      <div className="select__members--container">
        <label htmlFor="members" className="select__members--label"></label>
        <select id="members" name="members" placeholder="Selecciona un usuario" className="select__members" onChange={this.getSelectValue} >
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