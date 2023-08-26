import * as S from './Questions.styles';
import {questions} from '../../utils/questions';
import {useState} from 'react';

interface ModalProps {
	nome: string;
	setNome: (nome: string) => void;
	tabs: string;
	setTabs: (tabs: string) => void;
	count: number;
	setCount: (count: number) => void;
	erros: [];
	seterros: (erros: []) => void;
}

type Question = {
	pergunta: string;
	resposta: string[];
	respostaCorreta: number;
};
type Questions = {
	questions: Question[];
};

const Questions = ({nome, setCount, setTabs, count}: ModalProps) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [selectedAnswer, setSelectedAnswer] = useState<number | string>('');

	const handleAnswer = (index: number) => {
		setSelectedAnswer(index);
		if (index === questions[currentQuestion].respostaCorreta) {
			setCount(count + 1);
			setSelectedAnswer(index);

			return;
		}
	};

	const nextQuestion = () => {
		if (currentQuestion === questions.length - 1) {
			setTabs('3');

			return;
		}
		setSelectedAnswer('');
		setCurrentQuestion(currentQuestion + 1);
	};
	return (
		<S.Container>
			<S.TitleName>Bem vindo(a) {nome} ao Quiz CFW</S.TitleName>
			<S.Title>
				Pergunta {currentQuestion + 1} de {questions.length}
			</S.Title>
			<S.QuestionContainer>
				<S.CurrentQuestion>
					{questions[currentQuestion].pergunta}
				</S.CurrentQuestion>
				{questions[currentQuestion].respostas.map((resposta, index) => (
					<S.ButtonOptions
						onClick={() => handleAnswer(index)}
						key={index}
						disabled={selectedAnswer !== ''}
						correct={selectedAnswer === index}
						incorrect={
							selectedAnswer !== '' &&
							selectedAnswer === index &&
							index !== questions[currentQuestion].respostaCorreta
						}
					>
						{resposta}
					</S.ButtonOptions>
				))}
			</S.QuestionContainer>

			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<S.ButtonNext
					onClick={nextQuestion}
					label='Próxima Pergunta'
					disabled={selectedAnswer === ''}
				/>
			</div>
		</S.Container>
	);
};

export default Questions;
