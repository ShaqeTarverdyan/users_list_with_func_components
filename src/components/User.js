import React, { useState } from 'react';
import styled  from "styled-components";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const Wrapper = styled.div`
	position: relative;
	margin: 1rem;
`;

export const UserContent = styled.div`
	border: 1px solid lightgrey;
	text-align: center;
	border-radius: 10px;
	box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.69);
	cursor: pointer;
	height: 340px;

`;
const Image = styled.img`
	width: 100%;
	height: 90%;
	margin: auto;
	background: lightgray;
	object-fit: contain;
	border-radius: 10px 10px 0 0;

`;

const Text = styled.p`
	font-size: 1rem;
	height: 10%;
    margin: 0;
`;

const ActionsWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0.8;
	background: #e6e6e6;
	top: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-radius: 10px;
`;

const IconWrapper = styled.button`
	border: none;
	background: none;
	cursor: pointer
`;

const User = ({ 
		login, 
		avatar_url, 
		onDelete, 
		onFormOpen
	}) => {
	const [isOpenActions, setIsOpenActions] = useState(false);
	const handleOpenActions = () => {
		setIsOpenActions(true)
	}
	const handleCloseActions = () => {
		setIsOpenActions(false)
	}

	const toggleActions = () => {
		setIsOpenActions(prevState => !prevState)
	}

	return(
		<Wrapper
		 	onMouseEnter={handleOpenActions}
			onMouseLeave={handleCloseActions}
		>
			<UserContent>
				<Image src={avatar_url}/>
				<Text>{login}</Text>
			</UserContent>
			{
				isOpenActions &&
				<ActionsWrapper>
					<IconWrapper onClick={onFormOpen}>
						<EditIcon 
							color="primary"
							fontSize="large"
						/>
					</IconWrapper>
					<IconWrapper onClick={onDelete}>
						<DeleteIcon 
							color="error"
							fontSize="large"
						/>
					</IconWrapper>
				</ActionsWrapper>
			}
		</Wrapper>
	)
}


export default User;