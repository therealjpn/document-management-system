import React from 'react';
import PropTypes from 'prop-types';
import { addDisabledClass } from './disabledItems';


const RoleList = ({ roles, editRole, deleteRole }) => {
  const handleEditRole = (roleToBeEdited) => {
    if (roleToBeEdited.title === 'admin') return;
    editRole(roleToBeEdited);
  };

  const handleDeleteRole = (roleToBeDeleted) => {
    if (roleToBeDeleted.title === 'admin') return;
    deleteRole(roleToBeDeleted.id);
  };

  return (
    <div className="role-collection">
      <ul className="collection">
        {roles
          .map(role =>
            <li key={role.title} className="collection-item">
              <div className="row user-collection-item">
                <div className="col s4 offset s2 email">{role.title}</div>
                <div className="col s2 name">{role.id}</div>
                <div className="user-buttons row col s3">
                  <a
                    className={`waves-effect waves-light btn blue-grey ${addDisabledClass(role.title)}`}
                    onClick={handleEditRole(role)}>
                    <i className="tiny material-icons left">edit</i>
                    edit
                  </a>
                  <a
                    className={`waves-effect waves-light btn blue-grey ${addDisabledClass(role.title)}`}
                    onClick={handleDeleteRole(role)}>
                    <i className="tiny material-icons left">delete</i>
                    delete
                  </a>
                </div>
              </div>
            </li>
          )}
      </ul>
    </div>
  );
};

RoleList.propTypes = {
  editRole: PropTypes.func.isRequired,
  deleteRole: PropTypes.func.isRequired,
  roles: PropTypes.array.isRequired
};


export default RoleList;
