import React from 'react';
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
	height: 100%;
	position: fixed;
	top: 0;
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
	box-shadow: rgba(100,100,111, 0.2) 0px 7px 29px 0px;
	padding: ${props => props.padding ? props.padding : '20px'};
`;

const EncabezadoModal = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 20px;
	padding-bottom: 20px;
	border-bottom: 1px solid #E8E8E8;
	h3 {
		font-size: 42px;
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
