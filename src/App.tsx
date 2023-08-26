import {useState} from 'react';
import {Modal} from './components/Modal';
import Questions from './components/Questions';
import {ModalResult} from './components/ModalResult';
import {ToastContainer} from 'react-toastify';

function App() {
	const [nome, setNome] = useState('');

	const [tabs, setTabs] = useState('1');
	const [count, setCount] = useState(0);
	const [erros, seterros] = useState<[]>([]);

	const currentView = {
		'1': <Modal nome={nome} setNome={setNome} tabs={tabs} setTabs={setTabs} />,
		'2': (
			<Questions
				nome={nome}
				setNome={setNome}
				tabs={tabs}
				setTabs={setTabs}
				count={count}
				setCount={setCount}
				erros={erros}
				seterros={seterros}
			/>
		),
		'3': (
			<ModalResult
				nome={nome}
				setNome={setNome}
				tabs={tabs}
				setTabs={setTabs}
				count={count}
				setCount={setCount}
				erros={erros}
				seterros={seterros}
			/>
		)
	}[tabs];
	return (
		<>
			{currentView}
			<ToastContainer />
		</>
	);
}

export default App;
