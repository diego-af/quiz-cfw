import styled from 'styled-components';
import {Button} from 'primereact/button';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	justify-content: center;
	background-color: #090b10;
`;

interface Props {
	correct: boolean | string;
	incorrect: boolean | string;
	disabled: boolean | string;
}

export const ButtonOptions = styled.button<Props>`
	width: 100%;
	max-width: 30rem;
	background-color: #69a369;
	background-color: ${(props) => props.correct && '#2e712e'};
	background-color: ${(props) => props.incorrect && 'red'};
	border-radius: 0.4rem;
	border: ${(props) => (props.correct ? '1px solid purple' : 'white')};
	padding: 0.5rem;
	color: #ffffff;
	font-weight: bold;
	font-size: 1rem;
	margin-bottom: 0.5rem;

	&:focus {
		border: red;
	}
`;

export const CurrentQuestion = styled.h3`
	font-size: 1.2rem;
	color: #ffff;
`;
export const ButtonNext = styled(Button)`
	width: 100%;
	max-width: 30rem;
	color: #000;
	display: flex;
	justify-content: center;
	padding: 0.6rem;
	background-color: #f6fbf7db;
	border-radius: 0.4rem;
	border: 1px solid #70bc7c;
	font-weight: bold;
	font-size: 1rem;
`;
export const Title = styled.h3`
	font-size: 1.2rem;
	text-align: center;
	color: #ffff;
	font-weight: 400;
`;
export const TitleName = styled(Title)`
	font-size: 1.2rem;
	color: #ffff;
	font-weight: 300;
`;
export const QuestionContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;
	gap: 1rem;
`;
