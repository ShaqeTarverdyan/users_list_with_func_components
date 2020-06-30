import React, { useState } from 'react';
import User from './User';
import UserForm from './UserForm';
import styled from 'styled-components';

const EditableUser = (props) => {
	
	const handleDeleteCurrentUser = () => {
		props.deleteCurrentUser(props.id)
	}

	const handleUserFormOpen = () => {
		props.onFormUserIdChange(props.id)
	}
	const handleUserFormClose = () => {
		props.onFormUserIdChange(null)
	}

	return props.isUserFormOpen ? 
		<UserForm 
			onClose={handleUserFormClose}
			onEditForm={props.editCurrentUser}
			{...props}
		/> : 
		<User  
			onDelete={handleDeleteCurrentUser}
			onFormOpen={handleUserFormOpen}
			{...props}
		/>	

}

export default EditableUser;