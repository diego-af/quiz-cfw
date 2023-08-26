import styled from 'styled-components';
import {InputText} from 'primereact/inputtext';
import {Dialog} from 'primereact/dialog';

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

export const BoxName = styled(Dialog)`
	width: 24rem;
	height: 30rem;
	max-width: 100%;

	.p-dialog-header {
		display: none;
	}
	.p-dialog-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100% !important;
		padding: 0 !important;
		border-radius: 10px !important;
	}
`;

export const Title = styled.h1`
	color: #000;
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

export const Input = styled(InputText)`
	width: calc(100% - 1rem);
	padding: 1rem;
	border-radius: 0.5rem;

	font-size: 1rem;
	border: 1px solid #ccc;

	&:focus {
		outline: none !important;
		border-color: #148b17 !important;
	}
	&:hover {
		outline: none !important;
		border-color: #148b17 !important;
	}
`;
export const Button = styled.button`
	width: 8rem;
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
