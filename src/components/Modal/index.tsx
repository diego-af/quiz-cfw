import {useRef} from 'react';
import * as S from './Modal.styles';

import {Toast} from 'primereact/toast';

interface ModalProps {
	nome: string;
	setNome: (nome: string) => void;
	tabs: string;
	setTabs: (tabs: string) => void;
}
const Modal = ({setNome, tabs, nome, setTabs}: ModalProps) => {
	const toast = useRef<Toast>(null);
	const handleStep = () => {
		if (nome === '') {
			toast.current?.show({
				severity: 'warn',
				summary: 'Aviso',
				detail: 'Digite seu nome',
				life: 3000
			});

			return;
		}
		setTabs('2');
	};
	return (
		<S.ModalContainer>
			<S.BoxName
				visible={tabs === '1'}
				onHide={() => {
					return;
				}}
			>
				<S.Title>Quiz C.F.W e Catecismo Maior</S.Title>

				<S.BoxNameInput>
					<S.Input
						placeholder='Digite seu nome'
						onChange={(e) => setNome(e.target.value)}
					/>
					<S.Button onClick={handleStep}> Começar</S.Button>
				</S.BoxNameInput>
				<Toast ref={toast} />
			</S.BoxName>
		</S.ModalContainer>
	);
};

export {Modal};
