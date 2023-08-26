import styled from 'styled-components';

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	display: flex;
	padding: 1rem;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;

	background-color: rgba(0, 0, 0, 0.5);
`;

export const BoxName = styled.div`
	width: 40rem;
	height: 30rem;
	max-width: 100%;
	border-radius: 1rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	padding: 2rem;

	background-color: #03050d;
`;

export const Title = styled.h1`
	color: #fff;
	font-size: 1.4rem;
	text-align: center;
`;

export const BoxNameInput = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
	padding-top: 3rem;
`;

export const Input = styled.input`
	width: calc(100% - 1rem);
	padding: 1rem;
	border-radius: 0.5rem;

	font-size: 1rem;
	border: 1px solid #ccc;

	&:focus {
		outline: none;
		border: 1px solid #148b17;
	}
`;
export const Button = styled.button`
	width: 100%;
	padding: 1rem;

	font-size: 1rem;
	border: none;
	border-radius: 1rem;
	background-color: #148b17;
	color: #ffff;
	cursor: pointer;

	&:hover {
		background-color: #2e7d32;
	}
`;
