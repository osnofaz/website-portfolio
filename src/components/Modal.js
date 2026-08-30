import React, { useEffect } from 'react';
import styled from 'styled-components';

const Modal = ({
	children,
	estado,
	cambiarEstado,
	titulo = 'Alerta',
	mostrarHeader,
	mostrarOverlay,
	posicionModal,
	padding
}) => {
	useEffect(() => {
	if (estado) {
		document.body.style.overflow = 'hidden';
		document.body.classList.add('modal-open');
	} else {
		document.body.style.overflow = '';
		document.body.classList.remove('modal-open');
	}

	return () => {
		document.body.style.overflow = '';
		document.body.classList.remove('modal-open');
	};
	}, [estado]);

	return (
		<>
			{estado && 
				<Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
					<ContenedorModal padding={padding}>
										
					<button onClick={() => cambiarEstado(false)} className="botaofechar">
						<i className="fas fa-times"></i>
						</button>
						{mostrarHeader && 

							<EncabezadoModal>
								<h3>{titulo}</h3>
							</EncabezadoModal>
						}

						

						{children}
					</ContenedorModal>
				</Overlay>
			}
		</>
	);
}
 
export default Modal;


const Overlay = styled.div`
	width: 100%;
	height: calc(100% - 65px);
	position: fixed;
	top: 65px;
	left: 0;
	background: ${props => props.mostrarOverlay ? 'rgba(0,0,0,.7)' : 'rgba(0,0,0,0)'};
	padding: 40px;
	display: flex;
	align-items: ${props => props.posicionModal ? props.posicionModal : 'center'};
	justify-content: center;
	z-index: 2;
`;

const ContenedorModal = styled.div`
	min-height: 100px;
	position: relative;
	border-radius: 5px;
	background-color: var(--dark-background);
	border: 1px solid var(--border-subtle);
	padding: ${props => props.padding ? props.padding : '20px'};
	width: 100%;
	max-width: 900px;
	max-height: 85vh;
	overflow-y: auto;
`;

const EncabezadoModal = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid var(--border-subtle);
	h3 {
		font-size: var(--fs-xl);
		font-weight: 700;
	}
	@media only screen and (max-width: 768px) {
		margin-bottom: 5px;
		padding-bottom: 5px;
		h3{
			font-size: 25px;
			font-weight: 700;
		}
	}
	@media only screen and (max-width: 1050px) {
		margin-bottom: 5px;
		padding-bottom: 5px;
		h3{
			font-size: 25px;
			font-weight: 700;
		}
	}
`;
