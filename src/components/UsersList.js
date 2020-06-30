import React, { useState } from 'react';
import EditableUser from './EditableUser';
import styled from 'styled-components';
import Loader from './Loader';

const UsersContainer = styled.div`
	width: 80%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr;
	@media (min-width: 600px) {
    	grid-template-columns: 1fr 1fr ;
  	}
  	@media (min-width: 1020px) {
    	grid-template-columns: 1fr 1fr 1fr;
  	}
`;

const UsersList = ({ users, deleteCurrentUser, editCurrentUser }) => {
	const [formUserId, setFormUserId] = useState(null);
	const handleFormUserIdChange = (id) => {
		setFormUserId(id)
	} 
	if(!users.length) {
		return <Loader/>
	}
	return (
		<UsersContainer>
			{
				users.map(({id, login, avatar_url}) => 
					<EditableUser 
						key={id}
						login={login}
						avatar_url={avatar_url}
						id={id}
						deleteCurrentUser={deleteCurrentUser}
						editCurrentUser={editCurrentUser}
						onFormUserIdChange={handleFormUserIdChange}
						isUserFormOpen={formUserId === id}
					/>
				)
			}
		</UsersContainer>
	)
}

export default UsersList;