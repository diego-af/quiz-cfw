import {useEffect, useState} from 'react';
import * as S from './ModalResult.styles';

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
const ModalResult = ({setTabs, nome, setCount, count}: ModalProps) => {
	const [result, setResult] = useState('');

	useEffect(() => {
		if (count <= 4) {
			setResult('Você precisa estudar mais em');
		}
		if (count > 4 && count <= 8) {
			setResult('Você está evoluindo bastante');
		}
		if (count > 8 && count < 12) {
			setResult('Você está na média');
		}
		if (count >= 12) {
			setResult('Conhecimento muito bom, continue');
		}
	}, []);

	return (
		<S.ModalContainer>
			<S.BoxName>
				<S.Title>
					{result} {nome} <br /> sua pontuação é {count}.
				</S.Title>

				<S.Button
					onClick={() => {
						setTabs('2');
						setCount(0);
					}}
				>
					{' '}
					Iniciar novamente
				</S.Button>
			</S.BoxName>
		</S.ModalContainer>
	);
};

export {ModalResult};
